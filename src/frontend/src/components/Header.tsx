import { Phone, Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-2">
      <div
        className="mx-auto max-w-6xl glass-card rounded-full px-5 py-3 flex items-center justify-between"
        style={{ borderRadius: "9999px" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.82 0.11 82), oklch(0.65 0.09 82))",
            }}
          >
            <Zap
              className="w-4 h-4"
              style={{ color: "oklch(0.085 0.024 252)" }}
            />
          </div>
          <span
            className="font-bold text-[15px] tracking-tight"
            style={{ color: "oklch(0.88 0.12 82)" }}
          >
            Relocate Xpress
          </span>
        </div>

        <a
          href="tel:+918001234567"
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
