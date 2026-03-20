import { Mail, MapPin, Phone, Zap } from "lucide-react";

const CLICKABLE_SERVICES = [
  { label: "Home Relocation", href: "#/home-relocation" },
  { label: "Office Relocation", href: "#/office-relocation" },
  { label: "Intercity Moving", href: "#/intercity-moving" },
  { label: "Vehicle Transportation", href: "#/vehicle-transportation" },
];

const NON_CLICKABLE_SERVICES = [
  "Premium Packing & Handling",
  "Secure Storage Solutions",
  "Express Moving",
  "Corporate Relocation",
];

const COMPANY_LINKS = [
  "About MoveX",
  "Our System",
  "Safety & Guarantee",
  "Careers",
  "Contact",
];

export default function Footer() {
  const year = new Date().getFullYear();

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
                MoveX
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              India&apos;s Smart Relocation Network. The fastest, safest, most
              transparent relocation system &mdash; across 500+ cities.
            </p>
            <p className="text-xs" style={{ color: "oklch(0.35 0.02 252)" }}>
              Operating across major cities in India
            </p>
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
              {CLICKABLE_SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="footer-service-link text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {NON_CLICKABLE_SERVICES.map((item) => (
                <li key={item}>
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.35 0.02 252)", cursor: "default" }}
                  >
                    {item}
                  </span>
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
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.45 0.02 252)" }}
                  >
                    {item}
                  </span>
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
                  href="tel:+916296982596"
                  data-ocid="footer.phone.link"
                  className="footer-contact-link flex items-start gap-2.5 text-sm transition-colors"
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.82 0.11 82)" }}
                  />
                  +91 6296982596
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@movexindia.com"
                  data-ocid="footer.email.link"
                  className="footer-contact-link flex items-start gap-2.5 text-sm transition-colors"
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.82 0.11 82)" }}
                  />
                  support@movexindia.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=4th+A,+1st+Main+Rd,+Mysore+Rd,+Metro+Layout,+Nayandahalli,+Bengaluru,+Karnataka+560026"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.address.link"
                  className="footer-contact-link flex items-start gap-2.5 text-sm transition-colors"
                >
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.82 0.11 82)" }}
                  />
                  4th A, 1st Main Rd, Mysore Rd, Metro Layout, Nayandahalli,
                  Bengaluru, Karnataka 560026
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex items-center justify-center pt-8"
          style={{ borderTop: "1px solid oklch(0.16 0.04 252)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.38 0.02 252)" }}>
            &copy; {year} MoveX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
