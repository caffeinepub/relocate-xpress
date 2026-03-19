import { Zap } from "lucide-react";

interface HeaderProps {
  onBookNow: () => void;
}

export default function Header({ onBookNow }: HeaderProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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

        <nav className="hidden md:flex items-center gap-6">
          {["Services", "Operation Center", "Technology", "Guarantee"].map(
            (link) => (
              <button
                key={link}
                type="button"
                data-ocid={`nav.${link.toLowerCase().replace(/ /g, "_")}.link`}
                onClick={() => scrollTo(link.toLowerCase().replace(/ /g, "-"))}
                className="text-sm font-medium transition-colors hover:text-foreground"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                {link}
              </button>
            ),
          )}
        </nav>

        <button
          type="button"
          data-ocid="header.book_now.button"
          onClick={onBookNow}
          className="btn-gold px-5 py-2 text-sm font-bold"
        >
          BOOK NOW
        </button>
      </div>
    </header>
  );
}
