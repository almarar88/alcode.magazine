// Minimal GitHub OAuth proxy for Decap CMS (Cloudflare Worker).
// Secrets: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET. Var: ALLOWED_ORIGIN = https://blog.alcode.ae
const html = (origin, status, content) => `<!doctype html><html><body><script>
(function(){function r(e){if(e.origin!==${JSON.stringify(origin)})return;window.opener.postMessage('authorization:github:${status}:'+${JSON.stringify(JSON.stringify(content))},e.origin);window.removeEventListener('message',r);}
window.addEventListener('message',r);window.opener.postMessage('authorizing:github',${JSON.stringify(origin)});})();</script></body></html>`;
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === '/auth') {
      const state = crypto.randomUUID();
      const gh = new URL('https://github.com/login/oauth/authorize');
      gh.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      gh.searchParams.set('redirect_uri', `${url.origin}/callback`);
      gh.searchParams.set('scope', url.searchParams.get('scope') || 'public_repo');
      gh.searchParams.set('state', state);
      return new Response(null, { status: 302, headers: { Location: gh.toString(), 'Set-Cookie': `st=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600` } });
    }
    if (url.pathname === '/callback') {
      const cookie = (req.headers.get('Cookie') || '').match(/(?:^|; )st=([^;]+)/)?.[1];
      if (!cookie || cookie !== url.searchParams.get('state')) return new Response(html(env.ALLOWED_ORIGIN, 'error', { message: 'bad state' }), { headers: { 'content-type': 'text/html' } });
      const r = await fetch('https://github.com/login/oauth/access_token', { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code: url.searchParams.get('code'), redirect_uri: `${url.origin}/callback` }) });
      const j = await r.json();
      const ok = !!j.access_token;
      return new Response(html(env.ALLOWED_ORIGIN, ok ? 'success' : 'error', ok ? { token: j.access_token, provider: 'github' } : { message: j.error_description || 'auth failed' }), { headers: { 'content-type': 'text/html' } });
    }
    return new Response('Decap OAuth proxy', { status: 200 });
  },
};
