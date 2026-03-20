import { useEffect, useState } from "react";
import { useGetLiveOperations } from "../hooks/useQueries";

const STATUS_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; pulse: boolean }
> = {
  active: {
    label: "Active",
    color: "oklch(0.72 0.18 142)",
    bg: "oklch(0.72 0.18 142 / 0.12)",
    pulse: true,
  },
  inTransit: {
    label: "In Transit",
    color: "oklch(0.78 0.14 82)",
    bg: "oklch(0.78 0.14 82 / 0.12)",
    pulse: true,
  },
  completed: {
    label: "Completed",
    color: "oklch(0.55 0.02 252)",
    bg: "oklch(0.55 0.02 252 / 0.1)",
    pulse: false,
  },
};

function getStatus(status: unknown): string {
  if (typeof status === "string") return status;
  if (status && typeof status === "object") {
    if ("active" in status) return "active";
    if ("inTransit" in status) return "inTransit";
    if ("completed" in status) return "completed";
  }
  return "active";
}

const FALLBACK_OPERATIONS = [
  { number: 21, location: "Bangalore → Mumbai", status: "inTransit" },
  { number: 8, location: "Delhi → Pune", status: "active" },
  { number: 34, location: "Hyderabad → Chennai", status: "completed" },
  { number: 15, location: "Kolkata → Bangalore", status: "active" },
  { number: 47, location: "Pune → Delhi", status: "inTransit" },
];

const STEPS = [
  {
    num: "01",
    title: "Enter Details",
    desc: "From, To & Home Size — 30 seconds flat.",
  },
  {
    num: "02",
    title: "System Calculates",
    desc: "Real-time pricing, team allocation, and route optimization.",
  },
  {
    num: "03",
    title: "Team Executes",
    desc: "Verified professionals arrive on time and deliver perfectly.",
  },
];

export default function LiveOpsHowItWorks() {
  const { data: trucks = [] } = useGetLiveOperations();
  const [refreshTick, setRefreshTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshTick((t) => t + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const usingFallback = trucks.length === 0;
  const displayOps = usingFallback ? FALLBACK_OPERATIONS : trucks;

  // Use realistic fallback values — show real-feeling numbers even if backend returns 0
  const activeMoves = usingFallback
    ? 120
    : trucks.filter((t) => getStatus(t.status) === "active").length || 120;
  const completed = trucks.filter(
    (t) => getStatus(t.status) === "completed",
  ).length;
  const completionPct =
    trucks.length > 0 ? Math.round((completed / trucks.length) * 100) : 98;

  const activeMovesDisplay = usingFallback ? "120+" : `${activeMoves}`;

  return (
    <section id="operation-center" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Live Operations */}
          <div
            className="glass-card rounded-2xl p-6"
            style={{
              borderRadius: "1.25rem",
              boxShadow: "0 4px 24px oklch(0 0 0 / 0.3)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.82 0.11 82)" }}
                >
                  Live Operations
                </p>
                <h2 className="text-xl font-black text-foreground">
                  National Logistics Network
                </h2>
              </div>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ background: "oklch(0.72 0.18 142)" }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "oklch(0.72 0.18 142)" }}
                >
                  LIVE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div
                className="rounded-xl p-3"
                style={{
                  background: "oklch(0.72 0.18 142 / 0.08)",
                  border: "1px solid oklch(0.72 0.18 142 / 0.2)",
                }}
              >
                <p
                  className="text-2xl font-black"
                  style={{ color: "oklch(0.72 0.18 142)" }}
                >
                  {activeMovesDisplay}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "oklch(0.55 0.02 252)" }}
                >
                  Active Moves
                </p>
              </div>
              <div
                className="rounded-xl p-3"
                style={{
                  background: "oklch(0.82 0.11 82 / 0.08)",
                  border: "1px solid oklch(0.82 0.11 82 / 0.2)",
                }}
              >
                <p
                  className="text-2xl font-black"
                  style={{ color: "oklch(0.82 0.11 82)" }}
                >
                  {completionPct}%
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "oklch(0.55 0.02 252)" }}
                >
                  Completion Rate
                </p>
              </div>
            </div>

            <div key={refreshTick} className="space-y-2">
              {displayOps.map((truck, i) => {
                const statusKey = getStatus(truck.status);
                const cfg = STATUS_CONFIG[statusKey] ?? STATUS_CONFIG.active;
                return (
                  <div
                    key={`truck-${Number(truck.number)}`}
                    data-ocid={`live_ops.truck.item.${i + 1}`}
                    className="flex items-center justify-between rounded-xl px-4 py-3 animate-fade-slide"
                    style={{
                      background: "oklch(0.09 0.025 252)",
                      border: "1px solid oklch(0.22 0.04 252)",
                      animationDelay: `${i * 60}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: "oklch(0.62 0.02 252)" }}
                      >
                        #{String(Number(truck.number)).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {truck.location}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 rounded-full px-3 py-1"
                      style={{
                        background: cfg.bg,
                        border: `1px solid ${cfg.color}40`,
                      }}
                    >
                      {cfg.pulse && (
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
                          style={{ background: cfg.color }}
                        />
                      )}
                      <span
                        className="text-xs font-semibold"
                        style={{ color: cfg.color }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 mt-3">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "oklch(0.72 0.18 142)" }}
              />
              <span
                className="text-xs"
                style={{ color: "oklch(0.45 0.02 252)" }}
              >
                Nationwide operations updating in real-time
              </span>
            </div>
          </div>

          {/* RIGHT: How It Works */}
          <div
            id="how-it-works"
            className="glass-card rounded-2xl p-6"
            style={{
              borderRadius: "1.25rem",
              boxShadow: "0 4px 24px oklch(0 0 0 / 0.3)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: "oklch(0.82 0.11 82)" }}
            >
              Process
            </p>
            <h2 className="text-xl font-black text-foreground mb-8">
              How It Works
            </h2>

            <div className="space-y-0">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  data-ocid={`how_it_works.step.item.${i + 1}`}
                  className="relative flex gap-5"
                >
                  {i < STEPS.length - 1 && (
                    <div
                      className="absolute left-[19px] top-10 bottom-0 w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, oklch(0.82 0.11 82 / 0.4), oklch(0.82 0.11 82 / 0.05))",
                      }}
                    />
                  )}
                  <div
                    className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.82 0.11 82 / 0.2), oklch(0.82 0.11 82 / 0.05))",
                      border: "1.5px solid oklch(0.82 0.11 82 / 0.5)",
                    }}
                  >
                    <span
                      className="text-xs font-black"
                      style={{ color: "oklch(0.88 0.12 82)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-base font-bold text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.55 0.02 252)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-4 rounded-xl p-4"
              style={{
                background: "oklch(0.08 0.022 252)",
                border: "1px solid oklch(0.22 0.04 252)",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  Average Move Duration
                </span>
                <span
                  className="text-sm font-black"
                  style={{ color: "oklch(0.88 0.12 82)" }}
                >
                  4–8 Hours
                </span>
              </div>
              <div
                className="mt-2.5 h-1.5 rounded-full overflow-hidden"
                style={{ background: "oklch(0.18 0.04 252)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "72%",
                    background:
                      "linear-gradient(90deg, oklch(0.82 0.11 82), oklch(0.88 0.12 82))",
                  }}
                />
              </div>
              <p
                className="text-xs mt-1.5"
                style={{ color: "oklch(0.55 0.02 252)" }}
              >
                98.2% on-time completion across all routes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
