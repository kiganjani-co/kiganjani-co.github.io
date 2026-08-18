-- Fire the notify-enquiry edge function whenever an enquiry is inserted.
create extension if not exists pg_net;

create or replace function public.notify_enquiry_on_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  function_url text := 'https://czvholmguhiatgxxjfpg.supabase.co/functions/v1/notify-enquiry';
  webhook_secret text := '4e785b6f956534d0c952943c1e7282882cb7f21fd04b88d9';
begin
  perform net.http_post(
    url := function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', webhook_secret
    ),
    body := to_jsonb(new)
  );
  return new;
end;
$$;

drop trigger if exists enquiries_notify_on_insert on public.enquiries;
create trigger enquiries_notify_on_insert
  after insert on public.enquiries
  for each row execute function public.notify_enquiry_on_insert();