-- Store checkout (Ziina). Additive only: does not touch comments/feed/profiles.
create table if not exists public.products (
  id bigint generated always as identity primary key,
  handle text not null unique,
  title text not null,
  price_fils integer not null check (price_fils >= 0),
  currency text not null default 'AED',
  available boolean not null default true,
  image text,
  shopify_product_id bigint unique,
  shopify_variant_id bigint unique,
  updated_at timestamptz not null default now()
);
alter table public.products enable row level security;
drop policy if exists "anyone reads products" on public.products;
create policy "anyone reads products" on public.products for select using (true);

create sequence if not exists public.order_no_seq start 1001;
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_no bigint not null unique default nextval('public.order_no_seq'),
  access_token uuid not null default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  status text not null default 'new' check (status in ('new','paid','shipped','delivered','canceled')),
  payment_status text not null default 'pending' check (payment_status in ('pending','requires_payment_instrument','requires_user_action','completed','failed','canceled')),
  customer_name text not null check (char_length(customer_name) between 2 and 120),
  phone text not null check (char_length(phone) between 7 and 20),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  emirate text not null check (emirate in ('أبوظبي','دبي','الشارقة','عجمان','أم القيوين','رأس الخيمة','الفجيرة')),
  city text not null check (char_length(city) between 2 and 80),
  address text not null check (char_length(address) between 5 and 400),
  note text check (char_length(note) <= 500),
  subtotal_fils integer not null check (subtotal_fils >= 0),
  shipping_fils integer not null check (shipping_fils >= 0),
  total_fils integer not null check (total_fils >= 200),
  currency text not null default 'AED',
  ziina_intent_id text unique,
  ziina_test boolean not null default true,
  email_sent_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists orders_created_idx on public.orders (created_at desc);
create table if not exists public.order_items (
  id bigint generated always as identity primary key,
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id bigint references public.products(id),
  handle text not null,
  title text not null,
  unit_price_fils integer not null check (unit_price_fils >= 0),
  qty integer not null check (qty between 1 and 20),
  line_fils integer not null check (line_fils >= 0)
);
create index if not exists order_items_order_idx on public.order_items (order_id);
create table if not exists public.order_events (
  id bigint generated always as identity primary key,
  order_id uuid not null references public.orders(id) on delete cascade,
  kind text not null,          -- status | payment | email
  value text not null,
  actor text not null,         -- owner | ziina-webhook | order-status | checkout
  created_at timestamptz not null default now()
);
create index if not exists order_events_order_idx on public.order_events (order_id);

-- Owner = the publisher profile AND the confirmed owner email (both must hold).
create or replace function public.is_store_owner() returns boolean
language sql stable security definer set search_path = public, auth as $$
  select exists (
    select 1 from auth.users u join public.profiles p on p.id = u.id
    where u.id = auth.uid() and p.role = 'publisher'
      and lower(u.email) = 'almarar707@gmail.com' and u.email_confirmed_at is not null)
$$;
revoke all on function public.is_store_owner() from public;
grant execute on function public.is_store_owner() to authenticated, anon;

alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.order_events enable row level security;
drop policy if exists "owner or own orders read" on public.orders;
create policy "owner or own orders read" on public.orders for select to authenticated
  using (public.is_store_owner() or (user_id is not null and user_id = auth.uid()));
drop policy if exists "owner or own items read" on public.order_items;
create policy "owner or own items read" on public.order_items for select to authenticated
  using (public.is_store_owner() or exists (select 1 from public.orders o where o.id = order_id and o.user_id = auth.uid()));
drop policy if exists "owner reads events" on public.order_events;
create policy "owner reads events" on public.order_events for select to authenticated using (public.is_store_owner());
-- No insert/update/delete policies: writes happen only in edge functions (service role) or the owner RPC below.
revoke insert, update, delete on public.orders, public.order_items, public.order_events, public.products from anon, authenticated;

create or replace function public.set_order_status(p_order uuid, p_status text) returns public.orders
language plpgsql security definer set search_path = public as $$
declare r public.orders;
begin
  if not public.is_store_owner() then raise exception 'not allowed' using errcode = '42501'; end if;
  if p_status not in ('new','paid','shipped','delivered','canceled') then raise exception 'bad status'; end if;
  update public.orders set status = p_status, updated_at = now() where id = p_order returning * into r;
  if r.id is null then raise exception 'not found'; end if;
  insert into public.order_events(order_id, kind, value, actor) values (p_order, 'status', p_status, 'owner');
  return r;
end $$;
revoke all on function public.set_order_status(uuid, text) from public, anon;
grant execute on function public.set_order_status(uuid, text) to authenticated;
