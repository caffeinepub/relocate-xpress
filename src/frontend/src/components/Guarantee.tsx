import { AlertCircle, CheckCircle, Shield } from "lucide-react";
import { WHATSAPP_URL } from "../App";

interface GuaranteeProps {
  onBookSlot: () => void;
}

const GUARANTEES = [
  {
    icon: Shield,
    title: "Zero Damage",
    desc: "Military-grade packing. Anything breaks — we replace it.",
    color: "oklch(0.84 0.14 207)",
    bg: "oklch(0.84 0.14 207 / 0.08)",
    border: "oklch(0.84 0.14 207 / 0.25)",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Charges",
    desc: "Your quote is your final bill. No surprises.",
    color: "oklch(0.82 0.11 82)",
    bg: "oklch(0.82 0.11 82 / 0.08)",
    border: "oklch(0.82 0.11 82 / 0.25)",
  },
  {
    icon: AlertCircle,
    title: "Full Assurance",
    desc: "Something goes wrong? We don't argue. We pay.",
    color: "oklch(0.72 0.18 142)",
    bg: "oklch(0.72 0.18 142 / 0.08)",
    border: "oklch(0.72 0.18 142 / 0.25)",
  },
];

export default function Guarantee({ onBookSlot: _onBookSlot }: GuaranteeProps) {
  return (
    <section id="guarantee" className="py-20 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.82 0.11 82 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl relative">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.82 0.11 82)" }}
          >
            Our Promise
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Guarantee
          </h2>
          <p
            className="text-xl md:text-2xl font-black max-w-2xl mx-auto"
            style={{
              color: "oklch(0.88 0.12 82)",
              lineHeight: 1.4,
              textShadow: "0 0 30px oklch(0.82 0.11 82 / 0.3)",
            }}
          >
            "If anything goes wrong — we don't argue. We pay."
          </p>
          {/* Trust intensifier */}
          <p
            className="text-sm font-semibold mt-3"
            style={{ color: "oklch(0.62 0.02 252)" }}
          >
            Zero disputes. Zero follow-ups. Instant resolution.
          </p>
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "oklch(0.88 0.12 82)",
              margin: "12px auto 0",
              borderRadius: "9999px",
              boxShadow: "0 0 10px oklch(0.88 0.12 82 / 0.4)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              data-ocid={`guarantee.${g.title.toLowerCase().replace(/ /g, "_")}.card`}
              className="rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: g.bg,
                border: `1px solid ${g.border}`,
                borderRadius: "1.25rem",
                boxShadow: "0 4px 24px oklch(0 0 0 / 0.3)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: g.bg, border: `1px solid ${g.border}` }}
              >
                <g.icon className="w-5 h-5" style={{ color: g.color }} />
              </div>
              <h3 className="text-base font-black mb-2 text-foreground">
                {g.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.55 0.02 252)" }}
              >
                {g.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p
            className="text-base font-semibold mb-3"
            style={{ color: "oklch(0.72 0.18 142)" }}
          >
            This move is protected.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="guarantee.book_now.primary_button"
            className="btn-gold px-12 py-4 text-base font-black tracking-wide hover:scale-[1.03] transition-transform duration-150 inline-block"
          >
            Get Instant Price on WhatsApp
          </a>
          <p
            className="mt-2 text-xs font-semibold"
            style={{ color: "oklch(0.72 0.18 142)" }}
          >
            ⚡ Instant confirmation on WhatsApp
          </p>
          <p className="mt-2 text-xs" style={{ color: "oklch(0.45 0.02 252)" }}>
            No damage. No hidden charges. No risk.
          </p>
        </div>
      </div>
    </section>
  );
}
