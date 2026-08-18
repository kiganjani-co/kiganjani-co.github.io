-- Read the webhook secret from app_settings instead of a hardcoded value.
-- If the key is missing, the trigger no-ops so inserts never fail.
create or replace function public.notify_enquiry_on_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  function_url  text := 'https://czvholmguhiatgxxjfpg.supabase.co/functions/v1/notify-enquiry';
  webhook_secret text;
begin
  select value into webhook_secret
    from public.app_settings
   where key = 'notify_webhook_secret';

  if webhook_secret is null then
    return new;
  end if;

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