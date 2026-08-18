-- The form inserts via the anon (publishable) key. RLS policies only apply
-- after the role has table-level privileges, so grant INSERT explicitly.
grant insert on public.enquiries to anon, authenticated;