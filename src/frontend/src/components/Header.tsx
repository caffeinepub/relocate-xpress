import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-2">
      <div
        className="mx-auto max-w-6xl rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-md border border-white/10"
        style={{
          borderRadius: "9999px",
          background: "oklch(0.06 0.02 252 / 0.82)",
        }}
      >
        <div className="flex items-center gap-4">
          <img
            src="/assets/uploads/9ABA4B56-3745-4D8B-BFE4-691C9B3AC2FE-1.png"
            alt="MoveX Logo"
            style={{
              height: "36px",
              width: "auto",
              objectFit: "contain",
              imageRendering: "auto",
              display: "block",
            }}
          />
          <span
            className="text-sm font-semibold tracking-widest text-white"
            style={{ letterSpacing: "0.18em" }}
          >
            MoveX
          </span>
        </div>

        <a
          href="tel:+916296982596"
          data-ocid="header.call_now.button"
          className="flex items-center gap-1.5 btn-ghost-white px-4 py-2 text-sm font-semibold"
        >
          <Phone className="w-3.5 h-3.5" />
          Call Now
        </a>
      </div>
    </header>
  );
}
