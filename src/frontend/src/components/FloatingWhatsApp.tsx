import { WHATSAPP_URL } from "../App";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop floating button */}
      <style>{`
        @keyframes whatsapp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5), 0 4px 20px rgba(37, 211, 102, 0.25), 0 0 20px rgba(37, 211, 102, 0.15); }
          50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0), 0 4px 24px rgba(37, 211, 102, 0.4), 0 0 32px rgba(37, 211, 102, 0.2); }
        }
        .whatsapp-float {
          animation: whatsapp-pulse 2.4s ease-in-out infinite;
        }
        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(-4px);
        }
      `}</style>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating_whatsapp.button"
        className="whatsapp-float hidden md:flex fixed bottom-6 right-6 w-14 h-14 rounded-full items-center justify-center"
        style={{
          background: "#25D366",
          zIndex: 9999,
        }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="white"
          role="img"
          aria-label="WhatsApp"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2C6.478 2 2 6.478 2 12.004c0 1.85.487 3.592 1.338 5.099L2 22l5.037-1.32A9.959 9.959 0 0012.004 22C17.526 22 22 17.522 22 12.004 22 6.478 17.526 2 12.004 2zm0 18.195c-1.712 0-3.313-.491-4.668-1.337l-.334-.199-3.463.908.925-3.374-.218-.35A8.153 8.153 0 013.809 12c0-4.52 3.676-8.196 8.195-8.196 4.519 0 8.195 3.676 8.195 8.196 0 4.52-3.676 8.195-8.195 8.195z" />
        </svg>
        {/* Tooltip */}
        <span
          className="whatsapp-tooltip absolute right-16 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 transition-all duration-200 pointer-events-none"
          style={{
            background: "oklch(0.12 0.03 252)",
            color: "oklch(0.97 0.008 252)",
            border: "1px solid oklch(0.22 0.04 252)",
          }}
        >
          Chat on WhatsApp
        </span>
      </a>

      {/* Mobile sticky bottom CTA */}
      <div
        data-ocid="floating_whatsapp.panel"
        className="block md:hidden fixed bottom-0 left-0 right-0"
        style={{
          background: "oklch(0.085 0.024 252 / 0.97)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid oklch(0.82 0.11 82 / 0.3)",
          zIndex: 9998,
          padding: "12px 16px",
        }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="floating_whatsapp.mobile.primary_button"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-black tracking-wide"
          style={{
            background: "#25D366",
            color: "#fff",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="white"
            role="img"
            aria-label="WhatsApp"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2C6.478 2 2 6.478 2 12.004c0 1.85.487 3.592 1.338 5.099L2 22l5.037-1.32A9.959 9.959 0 0012.004 22C17.526 22 22 17.522 22 12.004 22 6.478 17.526 2 12.004 2zm0 18.195c-1.712 0-3.313-.491-4.668-1.337l-.334-.199-3.463.908.925-3.374-.218-.35A8.153 8.153 0 013.809 12c0-4.52 3.676-8.196 8.195-8.196 4.519 0 8.195 3.676 8.195 8.196 0 4.52-3.676 8.195-8.195 8.195z" />
          </svg>
          Get Instant Price on WhatsApp
        </a>
        <p
          className="text-center mt-1.5 text-xs font-semibold"
          style={{ color: "#25D366" }}
        >
          ● Reply in under 2 minutes
        </p>
        <p
          className="text-center mt-0.5 text-xs"
          style={{ color: "oklch(0.55 0.02 252)", fontSize: "10px" }}
        >
          No hidden charges. Final price before move.
        </p>
      </div>
    </>
  );
}
