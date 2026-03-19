import { ChevronRight, MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useGetEstimate } from "../hooks/useQueries";
import RouteAnimation from "./RouteAnimation";

interface HeroProps {
  homeSize: string;
  setHomeSize: (s: string) => void;
  fromLocation: string;
  setFromLocation: (s: string) => void;
  toLocation: string;
  setToLocation: (s: string) => void;
  onBookSlot: () => void;
}

const HOME_SIZES = ["1BHK", "2BHK", "3BHK"];

export default function Hero({
  homeSize,
  setHomeSize,
  fromLocation,
  setFromLocation,
  toLocation,
  setToLocation,
  onBookSlot,
}: HeroProps) {
  const { data: estimate } = useGetEstimate(homeSize);
  const [animKey, setAnimKey] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: setAnimKey is stable
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [homeSize]);

  const cost = estimate
    ? Number(estimate.cost).toLocaleString("en-IN")
    : "8,500";
  const time = estimate ? Number(estimate.time) : 6;
  const team = estimate ? Number(estimate.teamSize) : 4;

  const rows = [
    {
      label: "Estimated Time",
      value: `${time} Hours`,
      icon: "⏱",
      highlight: false,
      badge: false,
    },
    {
      label: "Estimated Cost",
      value: `₹${cost}`,
      icon: "₹",
      highlight: true,
      badge: false,
    },
    {
      label: "Team Assigned",
      value: `${team} Professionals`,
      icon: "👥",
      highlight: false,
      badge: false,
    },
    {
      label: "Risk Level",
      value: "ZERO",
      icon: "🛡",
      highlight: false,
      badge: true,
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center pt-8 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 hero-bloom pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.008 252) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.008 252) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl w-full px-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 glass-card-light rounded-full px-4 py-1.5">
            <Star className="w-3.5 h-3.5 fill-current text-gold" />
            <span
              className="text-xs font-medium"
              style={{ color: "oklch(0.82 0.11 82)" }}
            >
              Trusted by 1000+ customers
            </span>
            <span
              className="mx-2 text-xs"
              style={{ color: "oklch(0.35 0.04 252)" }}
            >
              |
            </span>
            <span className="text-xs" style={{ color: "oklch(0.55 0.02 252)" }}>
              4.9 ★ Rating
            </span>
            <span
              className="mx-2 text-xs"
              style={{ color: "oklch(0.35 0.04 252)" }}
            >
              |
            </span>
            <span className="text-xs" style={{ color: "oklch(0.55 0.02 252)" }}>
              500+ Cities
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-4">
                <span className="text-foreground">Plan your move in </span>
                <span style={{ color: "oklch(0.88 0.12 82)" }}>30 seconds</span>
              </h1>
              <p
                className="text-base mb-2"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                0 damage. 0 hidden charges.
              </p>
              <p
                className="text-lg font-bold"
                style={{ color: "oklch(0.88 0.12 82)" }}
              >
                Or we pay you.
              </p>
            </div>

            <div
              id="input-panel"
              className="glass-card rounded-2xl p-6 glow-gold"
              style={{ borderRadius: "1.25rem" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                Move Calculator
              </p>

              <div className="mb-3">
                <label
                  htmlFor="from-input"
                  className="text-xs font-medium mb-1.5 block"
                  style={{ color: "oklch(0.62 0.02 252)" }}
                >
                  From
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: "oklch(0.82 0.11 82 / 0.7)" }}
                  />
                  <input
                    id="from-input"
                    data-ocid="hero.from.input"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-medium text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 transition-all"
                    style={{
                      background: "oklch(0.09 0.025 252)",
                      border: "1px solid oklch(0.22 0.04 252)",
                      borderRadius: "0.75rem",
                    }}
                    placeholder="Origin city"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center mb-3">
                <div
                  className="flex-1 h-px"
                  style={{ background: "oklch(0.22 0.04 252)" }}
                />
                <div
                  className="mx-3 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.82 0.11 82 / 0.15)",
                    border: "1px solid oklch(0.82 0.11 82 / 0.3)",
                  }}
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                </div>
                <div
                  className="flex-1 h-px"
                  style={{ background: "oklch(0.22 0.04 252)" }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="to-input"
                  className="text-xs font-medium mb-1.5 block"
                  style={{ color: "oklch(0.62 0.02 252)" }}
                >
                  To
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: "oklch(0.84 0.14 207 / 0.7)" }}
                  />
                  <input
                    id="to-input"
                    data-ocid="hero.to.input"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-medium text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 transition-all"
                    style={{
                      background: "oklch(0.09 0.025 252)",
                      border: "1px solid oklch(0.22 0.04 252)",
                      borderRadius: "0.75rem",
                    }}
                    placeholder="Destination city"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="home-size-selector"
                  className="text-xs font-medium mb-2 block"
                  style={{ color: "oklch(0.62 0.02 252)" }}
                >
                  Home Size
                </label>
                <div
                  id="home-size-selector"
                  className="flex gap-2 p-1 rounded-xl"
                  style={{
                    background: "oklch(0.09 0.025 252)",
                    border: "1px solid oklch(0.22 0.04 252)",
                    borderRadius: "0.75rem",
                  }}
                >
                  {HOME_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      data-ocid={`hero.${size.toLowerCase()}.toggle`}
                      onClick={() => setHomeSize(size)}
                      className="flex-1 py-2 text-sm font-semibold rounded-lg transition-all"
                      style={{
                        background:
                          homeSize === size
                            ? "linear-gradient(135deg, oklch(0.82 0.11 82), oklch(0.88 0.12 82))"
                            : "transparent",
                        color:
                          homeSize === size
                            ? "oklch(0.085 0.024 252)"
                            : "oklch(0.62 0.02 252)",
                        borderRadius: "0.625rem",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  data-ocid="hero.lock_slot.primary_button"
                  onClick={onBookSlot}
                  className="btn-gold w-full py-3.5 text-sm font-bold tracking-wide"
                >
                  Lock My Slot Now
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    data-ocid="hero.get_price.secondary_button"
                    onClick={onBookSlot}
                    className="btn-outline-gold py-2.5 text-xs font-semibold"
                  >
                    Get Price in 30 Sec
                  </button>
                  <button
                    type="button"
                    data-ocid="hero.talk_expert.button"
                    className="btn-ghost-white py-2.5 text-xs font-semibold"
                    onClick={() => {
                      window.open("tel:+918001234567");
                    }}
                  >
                    Talk to Expert
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="relative rounded-2xl p-6 neon-border"
            style={{
              background: "oklch(0.10 0.03 252 / 0.9)",
              borderRadius: "1.25rem",
              boxShadow:
                "0 0 40px oklch(0.84 0.14 207 / 0.12), 0 0 80px oklch(0.56 0.22 285 / 0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ background: "oklch(0.84 0.14 207)" }}
                />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "oklch(0.84 0.14 207)" }}
                >
                  Live System Output
                </span>
              </div>
              <div
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: "oklch(0.84 0.14 207 / 0.1)",
                  color: "oklch(0.84 0.14 207)",
                  border: "1px solid oklch(0.84 0.14 207 / 0.3)",
                }}
              >
                LIVE
              </div>
            </div>

            <RouteAnimation from={fromLocation} to={toLocation} />

            <div className="space-y-0 mt-5">
              {rows.map((row, i) => (
                <div
                  key={`${animKey}-${row.label}`}
                  className="flex items-center justify-between py-3.5 animate-count-up"
                  style={{
                    borderBottom:
                      i < 3 ? "1px solid oklch(0.22 0.04 252)" : "none",
                    animationDelay: `${i * 80}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{row.icon}</span>
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.62 0.02 252)" }}
                    >
                      {row.label}
                    </span>
                  </div>
                  {row.badge ? (
                    <span
                      className="text-sm font-black tracking-widest px-3 py-1 rounded-full"
                      style={{
                        color: "oklch(0.84 0.14 207)",
                        background: "oklch(0.84 0.14 207 / 0.08)",
                        border: "1px solid oklch(0.84 0.14 207 / 0.3)",
                        textShadow: "0 0 12px oklch(0.84 0.14 207 / 0.6)",
                      }}
                    >
                      {row.value}
                    </span>
                  ) : (
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: row.highlight
                          ? "oklch(0.88 0.12 82)"
                          : "oklch(0.92 0.008 252)",
                      }}
                    >
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-4 rounded-xl px-4 py-2.5 flex items-center gap-2"
              style={{
                background: "oklch(0.72 0.18 142 / 0.07)",
                border: "1px solid oklch(0.72 0.18 142 / 0.2)",
              }}
            >
              <span
                className="text-xs"
                style={{ color: "oklch(0.72 0.18 142)" }}
              >
                ✓
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: "oklch(0.72 0.18 142)" }}
              >
                Protected by Relocate Xpress System
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
