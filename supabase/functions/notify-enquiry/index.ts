// Fired by the DB trigger when a new enquiry row is inserted.
// Sends a WhatsApp Cloud API template message to the business owner.

const WHATSAPP_GRAPH_VERSION = "v23.0"

const handler = async (req: Request): Promise<Response> => {
  // Guarded by the shared secret the DB trigger sends in the header.
  if (req.headers.get("x-webhook-secret") !== Deno.env.get("WEBHOOK_SECRET")) {
    return new Response("Unauthorized", { status: 401 })
  }

  let record: Record<string, unknown>
  try {
    const body = await req.json()
    record = body?.record ?? body
  } catch {
    return new Response("Bad request", { status: 400 })
  }

  const token = Deno.env.get("WHATSAPP_TOKEN")
  const phoneNumberId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID")
  const recipient = Deno.env.get("WHATSAPP_RECIPIENT")
  if (!token || !phoneNumberId || !recipient) {
    console.error("notify-enquiry: missing WHATSAPP env secrets")
    return new Response("Not configured", { status: 500 })
  }

  const clip = (v: unknown, n = 128) =>
    (v === null || v === undefined ? "" : String(v)).slice(0, n)

  const parameters = [
    clip(record.name),
    clip(record.business),
    clip(record.email),
    clip(record.phone),
    clip(record.message),
  ].map((text) => ({ type: "text", text }))

  const url = `https://graph.facebook.com/${WHATSAPP_GRAPH_VERSION}/${phoneNumberId}/messages`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: recipient,
      type: "template",
      template: {
        name: "enquiry_notification",
        language: { code: "en" },
        components: [{ type: "body", parameters }],
      },
    }),
  })

  const out = await res.text()
  console.log("notify-enquiry: send status", res.status, out.slice(0, 300))
  return new Response(res.ok ? "ok" : "failed", { status: res.ok ? 200 : 502 })
}

Deno.serve(handler)