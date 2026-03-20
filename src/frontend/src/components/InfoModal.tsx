import { Mail, MapPin, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

export interface ModalContent {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  highlight?: string;
  extraContent?: React.ReactNode;
}

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ModalContent;
}

export default function InfoModal({
  isOpen,
  onClose,
  content,
}: InfoModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center px-0 sm:px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.87)" }}
          data-ocid="info.modal"
        >
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-[560px] rounded-none sm:rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "oklch(0.095 0.024 252)",
              border: "1px solid oklch(0.82 0.11 82 / 0.28)",
              maxHeight: "92vh",
            }}
          >
            {/* Header */}
            <div
              className="flex items-start justify-between px-8 pt-8 pb-4 flex-shrink-0"
              style={{ borderBottom: "1px solid oklch(0.18 0.04 252)" }}
            >
              <h2
                className="text-2xl font-bold leading-tight pr-8"
                style={{
                  color: "oklch(0.95 0.02 252)",
                  letterSpacing: "-0.01em",
                }}
              >
                {content.title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                data-ocid="info.close_button"
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/5"
                style={{ color: "oklch(0.82 0.11 82)" }}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div
              className="px-8 py-6 overflow-y-auto flex-1"
              style={{ overflowY: "auto" }}
            >
              {/* Paragraphs */}
              {content.paragraphs && content.paragraphs.length > 0 && (
                <div className="space-y-3 mb-6">
                  {content.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-sm leading-relaxed"
                      style={{
                        color: "oklch(0.60 0.02 252)",
                        lineHeight: "1.75",
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Bullet list */}
              {content.bullets && content.bullets.length > 0 && (
                <div className="mb-6">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "oklch(0.82 0.11 82)" }}
                  >
                    Includes
                  </p>
                  <ul className="space-y-2.5">
                    {content.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            background: "oklch(0.82 0.11 82)",
                            marginTop: "6px",
                          }}
                        />
                        <span
                          className="text-sm"
                          style={{
                            color: "oklch(0.65 0.03 252)",
                            lineHeight: "1.65",
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Extra content */}
              {content.extraContent && (
                <div className="mb-6">{content.extraContent}</div>
              )}

              {/* Highlight */}
              {content.highlight && (
                <div
                  className="mt-6 pl-4 py-3"
                  style={{
                    borderLeft: "3px solid oklch(0.82 0.11 82)",
                    background: "oklch(0.82 0.11 82 / 0.05)",
                    borderRadius: "0 6px 6px 0",
                  }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: "oklch(0.88 0.12 82)",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{content.highlight}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Pre-built extra content for Careers
export function CareersExtra() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-2">
      <a
        href="https://wa.me/916296982596?text=Hi%20MoveX,%20I%20am%20interested%20in%20careers"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="careers.whatsapp.button"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors"
        style={{
          border: "1px solid oklch(0.82 0.11 82 / 0.7)",
          color: "oklch(0.88 0.12 82)",
          background: "oklch(0.82 0.11 82 / 0.07)",
        }}
      >
        Chat on WhatsApp
      </a>
      <a
        href="mailto:support@movexindia.com"
        data-ocid="careers.email.button"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors"
        style={{
          border: "1px solid oklch(0.82 0.11 82 / 0.4)",
          color: "oklch(0.75 0.06 252)",
          background: "transparent",
        }}
      >
        Email Us
      </a>
    </div>
  );
}

// Pre-built extra content for Contact
export function ContactExtra() {
  return (
    <ul className="space-y-4">
      <li>
        <a
          href="tel:+916296982596"
          data-ocid="contact.phone.link"
          className="flex items-center gap-3 group"
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(0.82 0.11 82 / 0.12)" }}
          >
            <Phone
              className="w-4 h-4"
              style={{ color: "oklch(0.82 0.11 82)" }}
            />
          </span>
          <span
            className="text-sm transition-colors group-hover:text-amber-400"
            style={{ color: "oklch(0.75 0.04 252)" }}
          >
            +91 6296982596
          </span>
        </a>
      </li>
      <li>
        <a
          href="mailto:support@movexindia.com"
          data-ocid="contact.email.link"
          className="flex items-center gap-3 group"
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(0.82 0.11 82 / 0.12)" }}
          >
            <Mail
              className="w-4 h-4"
              style={{ color: "oklch(0.82 0.11 82)" }}
            />
          </span>
          <span
            className="text-sm transition-colors group-hover:text-amber-400"
            style={{ color: "oklch(0.75 0.04 252)" }}
          >
            support@movexindia.com
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://maps.google.com/?q=4th+A,+1,+Main,+Mysore+Rd,+Metro+Lay+Out,+Nayanda+Halli,+Bengaluru,+Karnataka+560026"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="contact.address.link"
          className="flex items-start gap-3 group"
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(0.82 0.11 82 / 0.12)" }}
          >
            <MapPin
              className="w-4 h-4"
              style={{ color: "oklch(0.82 0.11 82)" }}
            />
          </span>
          <span
            className="text-sm transition-colors group-hover:text-amber-400"
            style={{ color: "oklch(0.75 0.04 252)", lineHeight: "1.6" }}
          >
            Bangalore, India
          </span>
        </a>
      </li>
    </ul>
  );
}
