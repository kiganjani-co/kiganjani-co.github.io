-- Enquiries submitted via the site contact form.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  business text,
  phone text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

-- The public form can insert rows, but nobody can read them (only the
-- dashboard / service role can).
create policy "anon can insert enquiries"
  on public.enquiries
  for insert
  to anon
  with check (true);