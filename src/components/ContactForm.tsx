import { useState, type FormEvent } from "react";
import { trackEvent } from "../lib/track";
import { copy, type Lang } from "../i18n/copy";

type FormData = {
  name: string;
  email: string;
  business: string;
  phone: string;
  service: string;
  message: string;
};

type Status = "idle" | "submitting" | "sent" | "error";

const inputClass =
  "w-full rounded-sm border border-rule bg-input-bg px-4 py-3.5 text-[0.9rem] text-fg font-body outline-none transition-colors focus:border-teal/50";

const labelClass =
  "block mb-2 text-[0.62rem] uppercase tracking-[0.16em] text-fg-dim";

const JOTFORM_URL = "https://submit.jotform.com/submit/262499042240051";

// Matches the Dropdown question on the Jotform form (input_13).
// Option values below must stay identical to the Jotform options.
const SERVICE_FIELD_NAME = "q13_whichService";

export default function ContactForm({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang].contactForm;
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    business: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const honeypot = (
      document.getElementById("contact-website") as HTMLInputElement | null
    )?.value;
    if (honeypot) return;

    setStatus("submitting");
    trackEvent("form_start", { form: "short" });

    try {
      const formEl = e.target as HTMLFormElement;
      await fetch(JOTFORM_URL, {
        method: "POST",
        body: new FormData(formEl),
        mode: "no-cors",
      });
      setStatus("sent");
      trackEvent("form_success", { form: "short" });
    } catch {
      setStatus("error");
      trackEvent("form_error", { form: "short" });
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-teal/30 p-12 text-center">
        <p className="font-display mb-3 text-[1.5rem] text-fg">{t.sentTitle}</p>
        <p className="text-[0.875rem] leading-[1.7] text-fg-dim">
          {t.sentBody}
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <input type="hidden" name="formID" value="262499042240051" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              {t.nameLabel}
            </label>
            <input
              id="contact-name"
              name="q3_q3_textbox1"
              required
              autoComplete="name"
              placeholder={t.namePh}
              value={form.name}
              onChange={handleChange("name")}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              {t.emailLabel}
            </label>
            <input
              id="contact-email"
              name="q4_q4_email2"
              type="email"
              required
              autoComplete="email"
              placeholder={t.emailPh}
              value={form.email}
              onChange={handleChange("email")}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-business" className={labelClass}>
              {t.bizLabel}
            </label>
            <input
              id="contact-business"
              name="q5_q5_textbox3"
              autoComplete="organization"
              placeholder={t.bizPh}
              value={form.business}
              onChange={handleChange("business")}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              {t.phoneLabel}
            </label>
            <input
              id="contact-phone"
              name="q6_q6_phone4[full]"
              type="tel"
              autoComplete="tel"
              placeholder={t.phonePh}
              value={form.phone}
              onChange={handleChange("phone")}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-service" className={labelClass}>
            {t.serviceLabel}
          </label>
          <select
            id="contact-service"
            name={SERVICE_FIELD_NAME}
            required
            value={form.service}
            onChange={handleChange("service")}
            className={inputClass}
          >
            <option value="" disabled>
              {t.servicePh}
            </option>
            {t.serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            {t.msgLabel}
          </label>
          <textarea
            id="contact-message"
            name="q11_q11_textarea9"
            required
            rows={6}
            placeholder={t.msgPh}
            value={form.message}
            onChange={handleChange("message")}
            className={`${inputClass} resize-vertical`}
          />
        </div>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 opacity-0"
        />
        {status === "error" && (
          <p className="mt-[-0.5rem] text-[0.8rem] text-[#e5484d]">
            {t.errorA}{" "}
            <a
              href="https://wa.me/255782506217?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { placement: "form-error" })}
              className="underline"
            >
              {t.errorLink}
            </a>{" "}
            {t.errorB}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full cursor-pointer rounded-sm border-none bg-teal p-4 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-canvas transition-colors hover:bg-mint disabled:cursor-wait disabled:opacity-70 font-body"
        >
          {status === "submitting" ? t.sending : t.submit}
        </button>
      </form>
    </>
  );
}
