import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-2">
      <div
        className="mx-auto max-w-6xl glass-card rounded-full px-5 py-3 flex items-center justify-between"
        style={{ borderRadius: "9999px" }}
      >
        <div className="flex items-center">
          <img
            src="/assets/uploads/IMG_8178-1.jpeg"
            alt="Relocate Xpress"
            style={{ height: "38px", width: "auto" }}
          />
        </div>

        <a
          href="tel:+917090913336"
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
