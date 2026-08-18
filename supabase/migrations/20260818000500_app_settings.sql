-- Server-only key/value store for settings that must not live in the repo
-- (e.g. the notify-enquiry webhook secret). Seed values via the dashboard
-- SQL editor; anon/authenticated can never read them.
create table if not exists public.app_settings (
  key        text primary key,
  value      text not null,
  updated_at timestamptz not null default now()
);

revoke all on table public.app_settings from anon, authenticated;
revoke all on table public.app_settings from public;