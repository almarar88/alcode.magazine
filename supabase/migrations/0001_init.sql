-- مجلة الكود الرقمية: accounts, comments, in-site notifications. Run once in Supabase → SQL Editor.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'قارئ' check (char_length(display_name) between 1 and 60),
  role text not null default 'reader' check (role in ('reader', 'publisher')),
  notify_site boolean not null default true,
  last_seen_feed timestamptz not null default now(),
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

create or replace function public.is_publisher() returns boolean
language sql stable security definer set search_path = public as
$$ select exists (select 1 from public.profiles where id = auth.uid() and role = 'publisher') $$;

-- New auth user → profile (display name from sign-up metadata or Google full_name).
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, left(coalesce(nullif(new.raw_user_meta_data->>'display_name', ''), nullif(new.raw_user_meta_data->>'full_name', ''), split_part(new.email, '@', 1)), 60));
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

create policy "own profile or publisher reads" on public.profiles for select using (id = auth.uid() or public.is_publisher());
create policy "own profile updates" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());
-- Readers may change only these columns; role can only be set from the SQL editor / service role.
revoke update on public.profiles from authenticated, anon;
grant update (display_name, notify_site, last_seen_feed) on public.profiles to authenticated;

create table if not exists public.comments (
  id bigint generated always as identity primary key,
  article_slug text not null check (article_slug ~ '^[a-z0-9-]+$'),
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  author_name text not null default '',
  body text not null check (char_length(btrim(body)) between 2 and 2000),
  status text not null default 'visible' check (status in ('visible', 'hidden')),
  created_at timestamptz not null default now()
);
create index if not exists comments_slug_idx on public.comments (article_slug, created_at);
alter table public.comments enable row level security;

-- Fill author name from the profile and rate-limit (max 5 comments per 10 minutes per user).
create or replace function public.comments_before_insert() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.comments where user_id = new.user_id and created_at > now() - interval '10 minutes') >= 5 then
    raise exception 'rate_limited';
  end if;
  new.author_name := (select display_name from public.profiles where id = new.user_id);
  new.status := 'visible';
  new.created_at := now();
  return new;
end $$;
drop trigger if exists comments_bi on public.comments;
create trigger comments_bi before insert on public.comments for each row execute function public.comments_before_insert();

create policy "read visible, own, or all for publisher" on public.comments for select using (status = 'visible' or user_id = auth.uid() or public.is_publisher());
create policy "signed-in users comment as themselves" on public.comments for insert to authenticated with check (user_id = auth.uid());
create policy "publisher moderates" on public.comments for update using (public.is_publisher()) with check (public.is_publisher());
create policy "author or publisher deletes" on public.comments for delete using (user_id = auth.uid() or public.is_publisher());
revoke update on public.comments from authenticated, anon;
grant update (status) on public.comments to authenticated;

-- New-article feed for the notification bell; written only by the publish Edge Function (service role).
create table if not exists public.feed (
  id bigint generated always as identity primary key,
  slug text not null, title text not null, excerpt text not null default '',
  published_at timestamptz not null default now()
);
alter table public.feed enable row level security;
create policy "anyone reads feed" on public.feed for select using (true);

-- After Ahmed signs up on the site, make him the only publisher (replace the email):
-- update public.profiles set role = 'publisher' where id = (select id from auth.users where email = 'AHMED_EMAIL_HERE');
