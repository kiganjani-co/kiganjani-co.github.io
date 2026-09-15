# Welcome Package — TEMPLATE (generic Auto version)

> Source of truth for JotForm PDF Document + PandaDoc template.
> No real emails, numbers, or links in this file — only labeled placeholders.
> Brand: Kiganjani Co. Timeline: 10-day ladder (Website 10 days / E-commerce 3–4 weeks / App scoped after call).

## Field map — fill once, reuse everywhere

| # | Label in doc | What fills it | JotForm setup | PandaDoc setup |
|---|--------------|---------------|---------------|----------------|
| 1 | `{{client_name}}` | Full name, e.g. from qualify form name field | Short Text field `client_name` → drag into PDF Document | Role var `Client.FirstName` + `Client.LastName`, or custom `[Client.Name]` |
| 2 | `{{first_name}}` | First name only, for greeting | Same field, use First sub-field or separate `first_name` | `Client.FirstName` |
| 3 | `{{company}}` | Business / org name, `—` if none | Short Text `company` (optional) | `Client.Company` |
| 4 | `{{doc_date}}` | Send date, auto | Date field with default = today, or submission date | System var `Document.CreatedDate` |
| 5 | `{{tier}}` | Package interest: Website / E-commerce / Web App / Custom | Dropdown/Radio `tier`, prefilled via URL param from Pricing buttons | Custom `[Project.Tier]` |
| 6 | `{{contact_email}}` | Your studio email (static, set once) | Static Text in PDF, not a form field | Static text / `[Sender.Email]` |
| 7 | `{{contact_whatsapp}}` | Your WhatsApp channel link (static, set once) | Static Text / Button in PDF | Static text / `[Sender.Phone]` |
| 8 | `{{site_url}}` | Site root (static, set once) | Static Text | Static text |
| 9 | `{{qualify_form_link}}` | Qualify + book form entry (static, set once; tier prefill via param) | Static Button `START HERE` linking out | Static button |
| 10 | `{{sender_name}}` | William Balaile, Founder & Digital Strategist (static) | Static Text | `[Sender.FirstName]` or static |

JotForm wiring: Forms → your qualify form → More → Open PDF Editor → New PDF Document → rebuild pages below → drag fields 1–5 in, type 6–10 as static text → Settings → Emails → Autoresponder → Advanced → PDF Attachment ON → select this document. One submission = one personalized PDF attached in ~2 min. Conditional: clone doc per `tier` if E-com needs extra M-Pesa section.

PandaDoc wiring: New Template → paste pages below → select each `{{...}}` → convert to Variable (`[Client.Name]` style) or assign Role `Client` so name/email/company/phone auto-fill from Contacts. Fill once per Document → populates everywhere. Better suited to the 30-min tailored proposal stage than the instant welcome send.

---

## P1 — Cover

```
Kiganjani Co. [logo]

Welcome
Package

For new project enquiries — {{tier}}
Prepared for {{client_name}} {{company}}
{{doc_date}}

Prepared by {{sender_name}} — Kiganjani Co.
Dar es Salaam, Tanzania · {{site_url}}
```

## P2 — Welcome / Thanks for reaching out

```
WELCOME
Thanks for reaching out.

Hi {{first_name}},

Thank you for considering Kiganjani Co. for your web project. This package exists
so you don't have to wait on a call to understand how I work — you'll know exactly
what to expect before we ever talk.

In the next few pages, you'll find: how projects run from kickoff to launch, what to
expect from me at each stage, examples of work shipped, and a preview of investment
ranges so we're aligned before we speak.

If anything here raises a question, hold onto it — we'll cover it on our call.

— William

[BOX: Before we talk]
If you haven't already, take 3 minutes to fill out the project questionnaire.
It means our call starts from context instead of from zero.
Button: FILL OUT THE FORM → {{qualify_form_link}} (tier={{tier}})
```

## P3 — Process / How a project runs

```
PROCESS
How a project runs

Every project moves through the same phases. Nothing is improvised — you'll always
know what just happened, what's happening now, and what's needed from you next.

1. Discovery & Strategy — goals, audience, requirements, sitemap, locked plan.
2. Design & Content — brand-aligned layouts + copy, no lorem ipsum.
3. Build & Review — you review, request changes, we refine.
4. Launch & Handover — live on your domain + handover docs, no daily upkeep dependency.

Timeline ladder:
- Website: online in 10 days (clock starts when content + feedback received).
- E-commerce: 3–4 weeks (payments, inventory, order flow).
- Web App: scoped after call, timeline in your 30-min proposal.

Feedback windows: 2–3 business days on reviews — delays here are what move launch dates.
```

## P4 — Working together / What you can expect

```
WORKING TOGETHER
What you can expect from me

→ Fast first response during working hours Mo–Fr 08–18 EAT.
→ No wasted calls. No Zoom until I understand your project — that's what the questionnaire is for.
→ Same-day proposal. Tiered scope + exact price + timeline within 30 minutes of our call.
→ Clear ownership. Every deliverable ties to conversion, credibility, or time saved.
→ Feedback windows. I'll flag early if a delay risks the launch date.

[BOX: How to reach me]
Email: {{contact_email}} • WhatsApp: {{contact_whatsapp}} • Site: {{site_url}}

[BOX: To start I need from you]
Logo/photos (or phone photos), price list, M-Pesa business details if selling online,
delivery areas, one contact person for approvals.
```

## P5 — Work / Case study 1 (concrete, no stock claims)

```
WORK
Case study 1 — [PROJECT SLOT: e.g. this site funnel / first client build]

Problem → what was broken or missing for the client/use case.
Solution → what was built and why those choices (stack, M-Pesa, SEO, handover).
Result → quantified outcome (days to launch, Lighthouse, enquiries, fulfilment time).
Concrete before/after only — no "worked great."

[If no client result yet, use build log:]
Problem: Dar businesses wait months for overpriced sites, no M-Pesa, no handover.
Solution: 4-phase system, TZS packages, M-Pesa-ready checkout, 1yr hosting included.
Result: Website live in 10 days, [Lighthouse score], [enquiries metric when available].
```

## P6 — Work / Case study 2 (range, not repeat)

```
WORK
Case study 2 — [PROJECT SLOT: different type from Case 1 — one client-style
deliverable + one technical/product build]

Same format: Problem → Solution → Result.

Two strong, specific case studies outperform five vague ones. Leave this slot as
"Founding-client slot — ask on our call" until filled. Do not pad.
```

## P7 — Investment / A starting point

```
INVESTMENT
A starting point

Every project gets a tailored proposal after our call — here's a preview so we're
aligned on range before we speak.

PACKAGE              STARTING AT (TZS)
Website              400,000 — up to 5 pages, domain + emails, 1yr hosting, contact + WhatsApp chat, SEO
E-commerce           1,800,000 — all Website core + cart/checkout + M-Pesa + inventory/orders/notifications
Web App              3,200,000 — all Website core + auth + dashboard/database + admin panel

All packages include 1 year hosting + maintenance. International clients: USD quote at current rate.
Your tailored proposal — scope, exact price, timeline for {{tier}} — follows within 30 minutes of our call.
```

## P8 — Next steps / Let's get started

```
NEXT STEPS
Let's get started — {{client_name}}

1. Fill out the project questionnaire — 3 minutes, goals/timeline/budget for {{tier}}.
2. 15-minute discovery call — talk through your project + anything flagged.
3. Proposal within 30 minutes — tiered pricing, scope, timeline, same day.

[BOX: START HERE]
Project Questionnaire — {{tier}}
Button: FILL OUT THE FORM → {{qualify_form_link}} (tier={{tier}})
Note: already filled it? Skip to your booking link in the autoresponder email.
```

---

## Build checklist (before attaching to autoresponder)

- [ ] Zero `[bracket]` leftovers — every slot is a `{{label}}` above or static text.
- [ ] Footers read `Kiganjani Co. · kiganjani-co.tech` equivalent via `{{site_url}}`, no old personal-domain strings.
- [ ] Timeline says 10-day ladder everywhere (site FAQ + PDF match).
- [ ] `{{qualify_form_link}}` tested with `tier=` prefill ×4.
- [ ] Export <2MB, test email attach + WhatsApp forward.
