import { MapPin, Package, ShieldCheck, Users } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Transparent pricing",
    description:
      "No hidden charges — final price always shared before your move.",
  },
  {
    icon: Users,
    title: "Verified professionals",
    description: "Trained and background-checked teams assigned to every move.",
  },
  {
    icon: Package,
    title: "Damage protection included",
    description: "Every item covered. We fix it if anything goes wrong.",
  },
  {
    icon: MapPin,
    title: "Real-time coordination",
    description: "Live support and updates from booking to delivery.",
  },
];

export default function WhyTrustMoveX() {
  return (
    <section
      data-ocid="why_trust.section"
      className="py-16 px-4"
      style={{ background: "oklch(0.085 0.024 252)" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-2xl md:text-3xl font-black text-center mb-10 tracking-tight"
          style={{ color: "oklch(0.97 0.008 252)" }}
        >
          Why MoveX is{" "}
          <span style={{ color: "oklch(0.88 0.12 82)" }}>trusted</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="glass-card rounded-2xl p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.01]"
              style={{
                background: "oklch(0.10 0.03 252 / 0.8)",
                border: "1px solid oklch(0.22 0.04 252)",
              }}
            >
              <point.icon
                className="w-6 h-6"
                style={{ color: "oklch(0.88 0.12 82)" }}
              />
              <h3
                className="text-sm font-black"
                style={{ color: "oklch(0.97 0.008 252)" }}
              >
                {point.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "oklch(0.55 0.02 252)" }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
