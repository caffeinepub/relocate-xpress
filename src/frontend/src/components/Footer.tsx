import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { useState } from "react";
import InfoModal, { CareersExtra, ContactExtra } from "./InfoModal";
import type { ModalContent } from "./InfoModal";

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

const MODAL_CONTENT: Record<string, ModalContent> = {
  "Premium Packing & Handling": {
    title: "Premium Packing & Handling",
    paragraphs: [
      "We use industry-grade packing materials and trained professionals to ensure every item is protected with precision.",
      "From fragile glassware to heavy furniture, our team follows a structured packing protocol to eliminate risk during transit.",
    ],
    bullets: [
      "Multi-layer protective wrapping",
      "Bubble & foam cushioning",
      "Furniture dismantling & reassembly",
      "Labeling & inventory tracking",
    ],
    highlight: "Engineered packing. Zero compromise.",
  },
  "Secure Storage Solutions": {
    title: "Secure Storage Solutions",
    paragraphs: [
      "MoveX provides secure, monitored storage facilities for short-term and long-term needs.",
      "Your belongings are stored in controlled environments with full safety assurance.",
    ],
    bullets: [
      "24/7 surveillance",
      "Climate-controlled units",
      "Flexible storage duration",
      "Pickup & delivery support",
    ],
    highlight: "Stored safely. Delivered when you're ready.",
  },
  "Express Moving": {
    title: "Express Moving",
    paragraphs: [
      "For urgent relocations, our express moving service ensures fast, priority-based shifting with dedicated resources.",
      "We minimize delays and optimize logistics for faster execution.",
    ],
    bullets: [
      "Priority scheduling",
      "Dedicated team & vehicle",
      "Faster turnaround time",
      "Real-time coordination",
    ],
    highlight: "Speed without chaos.",
  },
  "Corporate Relocation": {
    title: "Corporate Relocation",
    paragraphs: [
      "We handle office and corporate moves with minimal disruption to operations.",
      "From IT equipment to workstations, everything is relocated systematically.",
    ],
    bullets: [
      "Office packing & setup",
      "IT equipment handling",
      "Weekend/after-hours shifting",
      "Dedicated move manager",
    ],
    highlight: "Business moves. Zero downtime.",
  },
  "About MoveX": {
    title: "About MoveX",
    paragraphs: [
      "MoveX is a next-generation relocation platform built for transparency, control, and reliability.",
      "We combine smart logistics with trained professionals to deliver a seamless moving experience across India.",
    ],
    highlight: "Not just moving. Intelligent relocation.",
  },
  "Our System": {
    title: "Our System",
    paragraphs: [
      "Our intelligent system calculates, plans, and optimizes your move in real time.",
    ],
    bullets: [
      "Real-time pricing engine",
      "Smart route optimization",
      "Team allocation system",
      "Live tracking capability",
    ],
    highlight: "Powered by MoveX Intelligence System\u2122",
  },
  "Safety & Guarantee": {
    title: "Safety & Guarantee",
    paragraphs: ["We stand behind every move with a clear guarantee."],
    bullets: [
      "Damage protection policy",
      "No hidden charges",
      "Verified professionals",
      "Customer-first resolution",
    ],
    highlight: "Safe move. Or we fix it.",
  },
  Careers: {
    title: "Careers at MoveX",
    paragraphs: [
      "We are building a logistics network across India.",
      "If interested, contact via WhatsApp or email.",
    ],
    extraContent: <CareersExtra />,
  },
  Contact: {
    title: "Contact MoveX",
    paragraphs: ["Get in touch for quick support or booking."],
    extraContent: <ContactExtra />,
    highlight: "Fast response. Real support.",
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
                  <button
                    type="button"
                    data-ocid={`services.${item.toLowerCase().replace(/[^a-z0-9]/g, "_")}.button`}
                    onClick={() => setActiveModal(item)}
                    className="footer-modal-btn text-sm text-left"
                  >
                    {item}
                  </button>
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
                  <button
                    type="button"
                    data-ocid={`company.${item.toLowerCase().replace(/[^a-z0-9]/g, "_")}.button`}
                    onClick={() => setActiveModal(item)}
                    className="footer-modal-btn text-sm text-left"
                  >
                    {item}
                  </button>
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
          className="flex flex-col items-center gap-2 pt-8"
          style={{ borderTop: "1px solid oklch(0.16 0.04 252)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.38 0.02 252)" }}>
            &copy; {year} MoveX. All rights reserved.
          </p>
          <p
            className="text-xs text-center"
            style={{ color: "oklch(0.30 0.02 252)", fontSize: "10px" }}
          >
            Registered business in India &nbsp;&bull;&nbsp; Transparent pricing
            policy &nbsp;&bull;&nbsp; Customer-first support
          </p>
        </div>
      </div>

      <InfoModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        content={MODAL_CONTENT[activeModal ?? ""] ?? { title: "" }}
      />
    </footer>
  );
}
