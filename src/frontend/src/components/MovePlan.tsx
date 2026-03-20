import { Clock, DollarSign, Shield, Users } from "lucide-react";
import { useGetEstimate } from "../hooks/useQueries";

interface MovePlanProps {
  homeSize: string;
  fromLocation: string;
  toLocation: string;
}

const FEATURES = [
  {
    icon: Shield,
    title: "Zero Damage Policy",
    desc: "Every item is professionally packed with military-grade materials.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Precision scheduling. We don't miss windows — ever.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    desc: "What we quote is what you pay. Not a rupee more.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Trained, verified professionals. Background-checked every move.",
  },
];

export default function MovePlan({
  homeSize,
  fromLocation,
  toLocation,
}: MovePlanProps) {
  const { data: estimate } = useGetEstimate(homeSize);
  const cost = estimate
    ? Number(estimate.cost).toLocaleString("en-IN")
    : "8,500";
  const time = estimate ? Number(estimate.time) : 6;
  const team = estimate ? Number(estimate.teamSize) : 4;

  return (
    <section id="technology" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.82 0.11 82)" }}
          >
            Your Move Plan
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
            Everything calculated,{" "}
            <span style={{ color: "oklch(0.88 0.12 82)" }}>
              nothing left to chance
            </span>
          </h2>
        </div>

        <div
          className="glass-card rounded-2xl p-6 mb-8 relative overflow-hidden"
          style={{ borderRadius: "1.25rem" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "oklch(0.82 0.11 82 / 0.03)",
              transform: "translate(30%, -40%)",
              filter: "blur(40px)",
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <p
                className="text-xs font-medium mb-1"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                Route
              </p>
              <p className="text-base font-bold text-foreground">
                {fromLocation} → {toLocation}
              </p>
            </div>
            <div>
              <p
                className="text-xs font-medium mb-1"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                Estimated Cost
              </p>
              <p
                className="text-base font-bold"
                style={{ color: "oklch(0.88 0.12 82)" }}
              >
                ₹{cost}
              </p>
            </div>
            <div>
              <p
                className="text-xs font-medium mb-1"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                Duration
              </p>
              <p className="text-base font-bold text-foreground">
                {time} Hours
              </p>
            </div>
            <div>
              <p
                className="text-xs font-medium mb-1"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                Team Size
              </p>
              <p className="text-base font-bold text-foreground">
                {team} Professionals
              </p>
            </div>
          </div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "oklch(0.82 0.11 82 / 0.1)",
              border: "1px solid oklch(0.82 0.11 82 / 0.3)",
            }}
          >
            <Shield
              className="w-3.5 h-3.5"
              style={{ color: "oklch(0.82 0.11 82)" }}
            />
            <span
              className="text-xs font-bold tracking-wide"
              style={{ color: "oklch(0.82 0.11 82)" }}
            >
              100% DAMAGE GUARANTEE — OR WE PAY
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              data-ocid={`move_plan.${f.title.toLowerCase().replace(/ /g, "_")}.card`}
              className="glass-card rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
              style={{
                borderRadius: "1.25rem",
                border: "1px solid oklch(0.22 0.04 252)",
                boxShadow: "0 2px 12px oklch(0 0 0 / 0.25)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "oklch(0.82 0.11 82 / 0.1)",
                  border: "1px solid oklch(0.82 0.11 82 / 0.2)",
                }}
              >
                <f.icon
                  className="w-4 h-4"
                  style={{ color: "oklch(0.82 0.11 82)" }}
                />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">
                {f.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "oklch(0.55 0.02 252)" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
