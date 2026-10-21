// Supabase Edge Function "publish": only a profile with role = 'publisher' may call it.
// Commits an article (content/<slug>.md + images under public/articles/<slug>/) or deletes one, in a single commit
// to GitHub; the repo's deploy Action then rebuilds blog.alcode.ae.
// Secrets (supabase secrets set ...): GITHUB_TOKEN (fine-grained, Contents: read/write on almarar88/alcode.magazine only),
// optional GITHUB_REPO (default almarar88/alcode.magazine), GITHUB_BRANCH (default main).
// SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY are provided by Supabase automatically.
import { createClient } from 'npm:@supabase/supabase-js@2';

const ORIGINS = ['https://blog.alcode.ae', 'http://127.0.0.1:4173', 'http://localhost:5173'];
const cors = (o: string | null) => ({ 'Access-Control-Allow-Origin': o && ORIGINS.includes(o) ? o : ORIGINS[0], 'Access-Control-Allow-Headers': 'authorization, content-type, apikey, x-client-info', 'Access-Control-Allow-Methods': 'POST, OPTIONS', Vary: 'Origin' });
const REPO = Deno.env.get('GITHUB_REPO') ?? 'almarar88/alcode.magazine';
const BRANCH = Deno.env.get('GITHUB_BRANCH') ?? 'main';
const GH = 'https://api.github.com';
const gh = async (path: string, init: RequestInit = {}) => {
  const r = await fetch(GH + path, { ...init, headers: { Authorization: `Bearer ${Deno.env.get('GITHUB_TOKEN')}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json', 'User-Agent': 'alcode-publish' } });
  if (!r.ok && r.status !== 404) throw new Error(`github ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return r.status === 404 ? null : r.json();
};
const SLUG = /^[a-z0-9][a-z0-9-]{1,80}$/, IMG = /^[a-z0-9][a-z0-9._-]{0,60}\.(webp|jpe?g|png)$/i;
const yq = (s: unknown) => JSON.stringify(String(s ?? ''));

function toMarkdown(a: any) {
  const lines = ['---', `title: ${yq(a.title)}`, `author: ${yq(a.author)}`];
  if (a.book) lines.push(`book: ${yq(a.book)}`);
  lines.push(`category: ${yq(a.category)}`, `date: ${yq(a.date)}`, `cover: ${yq(a.cover)}`);
  if (a.coverCaption) lines.push(`coverCaption: ${yq(a.coverCaption)}`);
  lines.push(`excerpt: ${yq(a.excerpt)}`, `tags: [${(a.tags ?? []).map(yq).join(', ')}]`);
  if (a.era) lines.push(`era: ${yq(a.era)}`);
  if (a.eraSort !== undefined && a.eraSort !== '' && !isNaN(Number(a.eraSort))) lines.push(`eraSort: ${Number(a.eraSort)}`);
  return lines.join('\n') + '\n---\n\n' + String(a.body ?? '').trim() + '\n';
}

async function commit(message: string, files: { path: string; content?: string; base64?: string; remove?: boolean }[]) {
  const ref = await gh(`/repos/${REPO}/git/ref/heads/${BRANCH}`);
  const head = await gh(`/repos/${REPO}/git/commits/${ref.object.sha}`);
  const tree = [];
  for (const f of files) {
    if (f.remove) { tree.push({ path: f.path, mode: '100644', type: 'blob', sha: null }); continue; }
    const blob = await gh(`/repos/${REPO}/git/blobs`, { method: 'POST', body: JSON.stringify(f.base64 ? { content: f.base64, encoding: 'base64' } : { content: f.content, encoding: 'utf-8' }) });
    tree.push({ path: f.path, mode: '100644', type: 'blob', sha: blob.sha });
  }
  const t = await gh(`/repos/${REPO}/git/trees`, { method: 'POST', body: JSON.stringify({ base_tree: head.tree.sha, tree }) });
  const c = await gh(`/repos/${REPO}/git/commits`, { method: 'POST', body: JSON.stringify({ message, tree: t.sha, parents: [head.sha] }) });
  await gh(`/repos/${REPO}/git/refs/heads/${BRANCH}`, { method: 'PATCH', body: JSON.stringify({ sha: c.sha }) });
  return c.sha as string;
}

Deno.serve(async (req) => {
  const h = cors(req.headers.get('Origin'));
  if (req.method === 'OPTIONS') return new Response('ok', { headers: h });
  const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...h, 'Content-Type': 'application/json' } });
  try {
    const auth = req.headers.get('Authorization') ?? '';
    const user = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: auth } } });
    const { data: { user: u } } = await user.auth.getUser();
    if (!u) return json({ error: 'unauthorized' }, 401);
    const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    const { data: prof } = await admin.from('profiles').select('role').eq('id', u.id).single();
    if (prof?.role !== 'publisher') return json({ error: 'forbidden' }, 403);

    const body = await req.json();
    if (body.action === 'save') {
      const a = body.article ?? {};
      if (!SLUG.test(a.slug ?? '')) return json({ error: 'bad_slug' }, 400);
      for (const k of ['title', 'author', 'category', 'date', 'excerpt', 'body']) if (!String(a[k] ?? '').trim()) return json({ error: `missing_${k}` }, 400);
      const images = (body.images ?? []) as { name: string; base64: string }[];
      if (images.length > 12) return json({ error: 'too_many_images' }, 400);
      const files: any[] = [];
      for (const im of images) {
        if (!IMG.test(im.name) || im.base64.length > 4_000_000) return json({ error: 'bad_image', name: im.name }, 400);
        files.push({ path: `public/articles/${a.slug}/${im.name}`, base64: im.base64 });
      }
      const existed = !!(await gh(`/repos/${REPO}/contents/content/${a.slug}.md?ref=${BRANCH}`));
      files.push({ path: `content/${a.slug}.md`, content: toMarkdown(a) });
      const sha = await commit(`${existed ? 'تحديث' : 'نشر'}: ${a.slug}`, files);
      if (!existed) await admin.from('feed').insert({ slug: a.slug, title: a.title, excerpt: a.excerpt });
      return json({ ok: true, sha, created: !existed });
    }
    if (body.action === 'delete') {
      if (!SLUG.test(body.slug ?? '')) return json({ error: 'bad_slug' }, 400);
      if (!(await gh(`/repos/${REPO}/contents/content/${body.slug}.md?ref=${BRANCH}`))) return json({ error: 'not_found' }, 404);
      const sha = await commit(`حذف: ${body.slug}`, [{ path: `content/${body.slug}.md`, remove: true }]);
      await admin.from('feed').delete().eq('slug', body.slug);
      return json({ ok: true, sha });
    }
    if (body.action === 'status') {
      const runs = await gh(`/repos/${REPO}/actions/runs?branch=${BRANCH}&per_page=3`);
      return json({ runs: (runs?.workflow_runs ?? []).map((r: any) => ({ name: r.name, status: r.status, conclusion: r.conclusion, sha: r.head_sha.slice(0, 7), at: r.created_at })) });
    }
    return json({ error: 'unknown_action' }, 400);
  } catch (e) {
    return json({ error: 'server_error', detail: String(e).slice(0, 300) }, 500);
  }
});
