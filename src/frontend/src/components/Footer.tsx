import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap,
} from "lucide-react";

const SOCIAL_ICONS = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
];

const SERVICE_LINKS = [
  "Home Relocation",
  "Office Shifting",
  "Intercity Moves",
  "Premium Packing",
  "Storage Solutions",
];
const COMPANY_LINKS = [
  "About Us",
  "Guarantee Policy",
  "Careers",
  "Press",
  "Contact",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      className="pt-16 pb-8 px-4 mt-8"
      style={{ borderTop: "1px solid oklch(0.18 0.04 252)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
                className="font-bold text-base"
                style={{ color: "oklch(0.88 0.12 82)" }}
              >
                Relocate Xpress
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              India's Smart Relocation Network. The fastest, safest, most
              transparent way to move — across 500+ cities.
            </p>
            <p
              className="text-xs mb-5"
              style={{ color: "oklch(0.35 0.02 252)" }}
            >
              Operating across major cities in India
            </p>
            <div className="flex gap-2">
              {SOCIAL_ICONS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://relocatexpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "oklch(0.16 0.04 252)",
                    border: "1px solid oklch(0.22 0.04 252)",
                    color: "oklch(0.55 0.02 252)",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.82 0.11 82)" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="https://relocatexpress.com"
                    className="text-sm transition-colors hover:text-foreground"
                    style={{ color: "oklch(0.45 0.02 252)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.82 0.11 82)" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="https://relocatexpress.com"
                    className="text-sm transition-colors hover:text-foreground"
                    style={{ color: "oklch(0.45 0.02 252)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.82 0.11 82)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+917090913336"
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-foreground group"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors"
                    style={{ color: "oklch(0.82 0.11 82)" }}
                  />
                  +91 70909 13336
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@relocatexpress.com"
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-foreground group"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors"
                    style={{ color: "oklch(0.82 0.11 82)" }}
                  />
                  info@relocatexpress.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=4th+A,+1,+Main,+Mysore+Rd,+Metro+Lay+Out,+Nayanda+Halli,+Bengaluru,+Karnataka+560026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-foreground group"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors"
                    style={{ color: "oklch(0.82 0.11 82)" }}
                  />
                  4th A, 1, Main, Mysore Rd, Metro Lay Out, Nayanda Halli,
                  Bengaluru, Karnataka 560026
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid oklch(0.16 0.04 252)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.38 0.02 252)" }}>
            © {year} Relocate Xpress. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.35 0.02 252)" }}>
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              style={{ color: "oklch(0.62 0.02 252)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
