-- PostgREST's `Prefer: return=representation` (used by supabase-js inserts)
-- runs an internal SELECT after the INSERT. Grant the SELECT privilege so that
-- echo succeeds, but add an RLS policy that returns zero rows so anon/authenticated
-- can never actually read enquiry data.
grant select on public.enquiries to anon, authenticated;

create policy "anon cannot read enquiries"
  on public.enquiries
  for select
  to anon, authenticated
  using (false);