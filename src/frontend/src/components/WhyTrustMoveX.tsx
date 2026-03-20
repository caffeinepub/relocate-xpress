import { MapPin, Package, ShieldCheck, Users } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "No hidden charges",
    description: "Final price transparency before you confirm.",
  },
  {
    icon: Users,
    title: "Verified professionals",
    description: "Trained and background-checked moving teams.",
  },
  {
    icon: Package,
    title: "Damage protection",
    description: "Every move covered. We fix it if anything goes wrong.",
  },
  {
    icon: MapPin,
    title: "Real-time tracking",
    description: "Live updates from pickup to delivery.",
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
          Why people trust{" "}
          <span style={{ color: "oklch(0.88 0.12 82)" }}>MoveX</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="glass-card rounded-2xl p-6 flex flex-col gap-3"
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
