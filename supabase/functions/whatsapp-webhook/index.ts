// WhatsApp Cloud API webhook endpoint.
// GET  = verification handshake (Meta calls this when you save the webhook).
// POST = receives WhatsApp events (messages, delivery status) — always ack 200.

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url)

  // ── Verification handshake ──
  if (req.method === "GET") {
    const mode = url.searchParams.get("hub.mode")
    const token = url.searchParams.get("hub.verify_token")
    const challenge = url.searchParams.get("hub.challenge")
    const expected = Deno.env.get("WEBHOOK_VERIFY_TOKEN") ?? ""
    if (mode === "subscribe" && token === expected && challenge) {
      return new Response(challenge, { status: 200 })
    }
    return new Response("Forbidden", { status: 403 })
  }

  // ── Inbound events ──
  if (req.method === "POST") {
    const body = await req.json()
    // Log and ack. Extend here later if you want to react to inbound messages.
    console.log("whatsapp webhook event", JSON.stringify(body))
    return new Response("EVENT_RECEIVED", { status: 200 })
  }

  return new Response("Method not allowed", { status: 405 })
}

Deno.serve(handler)