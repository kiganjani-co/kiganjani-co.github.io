import { useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  business: string;
  phone: string;
  message: string;
};

type Status = "idle" | "submitting" | "sent" | "error";

const inputClass =
  "w-full rounded-sm border border-rule bg-input-bg px-4 py-3.5 text-[0.9rem] text-fg font-body outline-none transition-colors focus:border-teal/50";

const labelClass =
  "block mb-2 text-[0.62rem] uppercase tracking-[0.16em] text-fg-dim";

const JOTFORM_URL = "https://submit.jotform.com/262499042240051";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    business: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const honeypot = (
      document.getElementById("contact-website") as HTMLInputElement | null
    )?.value;
    if (honeypot) return;

    setStatus("submitting");

    const body = new URLSearchParams({
      q3_q3_textbox1: form.name.trim(),
      q4_q4_email2: form.email.trim(),
      q5_q5_textbox3: form.business.trim(),
      "q6_q6_phone4[full]": form.phone.trim(),
      q11_q11_textarea9: form.message.trim(),
      website: "",
    });

    try {
      const res = await fetch(JOTFORM_URL, {
        method: "POST",
        body,
      });
      if (!res.ok) throw new Error(`JotForm responded with ${res.status}`);
      setStatus("sent");
    } catch (err) {
      console.error("JotForm submission failed", err);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-teal/30 p-12 text-center">
        <p className="font-display mb-3 text-[1.5rem] text-fg">Message sent.</p>
        <p className="text-[0.875rem] leading-[1.7] text-fg-dim">
          Thanks — I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Your name
          </label>
          <input
            id="contact-name"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            value={form.name}
            onChange={handleChange("name")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Your email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange("email")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-business" className={labelClass}>
            Business name
          </label>
          <input
            id="contact-business"
            autoComplete="organization"
            placeholder="Optional"
            value={form.business}
            onChange={handleChange("business")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            value={form.phone}
            onChange={handleChange("phone")}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Tell me about your project
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          placeholder="What does your business do? What are you hoping to achieve online?"
          value={form.message}
          onChange={handleChange("message")}
          className={`${inputClass} resize-vertical`}
        />
      </div>
      <input
        id="contact-website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 opacity-0"
      />
      {status === "error" && (
        <p className="mt-[-0.5rem] text-[0.8rem] text-[#e5484d]">
          Something went wrong sending your message. Please email kiganjani.co@gmail.com directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full cursor-pointer rounded-sm border-none bg-teal p-4 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-canvas transition-colors hover:bg-mint disabled:cursor-wait disabled:opacity-70 font-body"
      >
        {status === "submitting" ? "Sending\u2026" : "Send enquiry"}
      </button>
    </form>
  );
}
