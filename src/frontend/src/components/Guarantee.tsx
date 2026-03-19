import { AlertCircle, CheckCircle, Shield } from "lucide-react";

interface GuaranteeProps {
  onBookSlot: () => void;
}

const GUARANTEES = [
  {
    icon: Shield,
    title: "Zero Damage",
    desc: "Military-grade packing. If anything breaks, we replace it. Full stop.",
    color: "oklch(0.84 0.14 207)",
    bg: "oklch(0.84 0.14 207 / 0.08)",
    border: "oklch(0.84 0.14 207 / 0.25)",
  },
  {
    icon: CheckCircle,
    title: "Zero Hidden Charges",
    desc: "Your quote is your final bill. No surprise fees, ever.",
    color: "oklch(0.82 0.11 82)",
    bg: "oklch(0.82 0.11 82 / 0.08)",
    border: "oklch(0.82 0.11 82 / 0.25)",
  },
  {
    icon: AlertCircle,
    title: "100% Assurance",
    desc: "Something goes wrong? We don't argue. We don't delay. We pay.",
    color: "oklch(0.72 0.18 142)",
    bg: "oklch(0.72 0.18 142 / 0.08)",
    border: "oklch(0.72 0.18 142 / 0.25)",
  },
];

export default function Guarantee({ onBookSlot }: GuaranteeProps) {
  return (
    <section id="guarantee" className="py-24 px-4 relative overflow-hidden">
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
            className="text-xl md:text-2xl font-bold max-w-2xl mx-auto"
            style={{ color: "oklch(0.88 0.12 82)", lineHeight: 1.4 }}
          >
            "If anything goes wrong, we don't argue. We pay."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              data-ocid={`guarantee.${g.title.toLowerCase().replace(/ /g, "_")}.card`}
              className="rounded-2xl p-6 transition-all hover:-translate-y-1"
              style={{
                background: g.bg,
                border: `1px solid ${g.border}`,
                borderRadius: "1.25rem",
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
          <button
            type="button"
            data-ocid="guarantee.book_now.primary_button"
            onClick={onBookSlot}
            className="btn-gold px-10 py-4 text-base font-black tracking-wide"
          >
            Lock My Slot Now
          </button>
          <p className="mt-3 text-xs" style={{ color: "oklch(0.45 0.02 252)" }}>
            No commitment required. Cancel anytime before 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
