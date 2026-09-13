import { useState, useEffect } from "react";

export default function CookieNotice() {
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
      aria-label="Cookie notice"
      className="fixed inset-x-4 bottom-[4.75rem] z-20 mx-auto flex max-w-[440px] flex-col gap-3 rounded-sm border border-rule bg-caption-bg p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto"
    >
      <p className="text-[0.82rem] leading-[1.6] text-fg-dim">
        This site uses cookies for analytics, to understand how visitors find and use it. No
        personal data is sold or shared.{" "}
        <a href="/privacy" className="text-teal underline underline-offset-2">
          Privacy policy
        </a>
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={accept}
          className="w-fit cursor-pointer rounded-sm border-none bg-teal px-5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-canvas transition-colors hover:bg-mint"
        >
          Got it
        </button>
        <button
          onClick={decline}
          className="w-fit cursor-pointer rounded-sm border border-rule bg-transparent px-5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-fg-dim transition-colors hover:border-teal hover:text-fg"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
