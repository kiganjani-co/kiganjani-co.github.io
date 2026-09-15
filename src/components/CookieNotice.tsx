import { useState, useEffect } from "react";
import { copy, type Lang } from "../i18n/copy";

export default function CookieNotice({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang].cookie;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t.aria}
      className="fixed inset-x-4 bottom-[4.75rem] z-20 mx-auto flex max-w-[440px] flex-col gap-3 rounded-sm border border-rule bg-caption-bg p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto"
    >
      <p className="text-[0.82rem] leading-[1.6] text-fg-dim">
        {t.bodyA}{" "}
        <a href={lang === "sw" ? "/sw/privacy" : "/privacy"} className="text-teal underline underline-offset-2">
          {t.link}
        </a>{" "}
        {t.bodyB}
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={accept}
          className="w-fit cursor-pointer rounded-sm border-none bg-teal px-5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-canvas transition-colors hover:bg-mint"
        >
          {t.accept}
        </button>
        <button
          onClick={decline}
          className="w-fit cursor-pointer rounded-sm border border-rule bg-transparent px-5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-fg-dim transition-colors hover:border-teal hover:text-fg"
        >
          {t.decline}
        </button>
      </div>
    </div>
  );
}
