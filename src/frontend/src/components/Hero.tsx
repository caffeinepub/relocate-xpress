import { ChevronRight, MapPin } from "lucide-react";
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
  const [isCalculating, setIsCalculating] = useState(false);
  const [secondsAgo, setSecondsAgo] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: setAnimKey is stable
  useEffect(() => {
    setAnimKey((k) => k + 1);
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 800);
    return () => clearTimeout(timer);
  }, [homeSize]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — reset on animKey change
  useEffect(() => {
    setSecondsAgo(0);
    const interval = setInterval(() => {
      setSecondsAgo((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [animKey]);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => setIsUpdating(false), 2000);
    }, 12000);
    return () => clearInterval(cycleInterval);
  }, []);

  const handleFromChange = (val: string) => {
    setFromLocation(val);
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 800);
  };

  const handleToChange = (val: string) => {
    setToLocation(val);
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 800);
  };

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

  const updatedText = isUpdating
    ? "Updating…"
    : secondsAgo === 0
      ? "Just updated"
      : secondsAgo === 1
        ? "Updated 1 sec ago"
        : `Updated ${secondsAgo} sec ago`;

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center pt-8 pb-16 overflow-hidden"
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
        {/* TOP TRUST BAR */}
        <div className="flex items-center justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(0.82 0.11 82 / 0.1)",
              border: "1px solid oklch(0.82 0.11 82 / 0.3)",
              color: "oklch(0.88 0.12 82)",
            }}
          >
            <span>⭐</span>
            <span>Trusted by 1000+ customers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-4">
                <span className="text-foreground">Your move. </span>
                <span style={{ color: "oklch(0.88 0.12 82)" }}>
                  Fully controlled.
                </span>
              </h1>
              <p
                className="text-base"
                style={{ color: "oklch(0.62 0.02 252)" }}
              >
                Zero damage. Zero hidden charges.
              </p>
              <p
                className="text-lg font-bold"
                style={{ color: "oklch(0.88 0.12 82)" }}
              >
                Or we pay you.
              </p>
            </div>

            {/* Urgency strip */}
            <div
              className="flex items-center gap-2 mb-1"
              style={{ marginTop: "-4px" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-dot"
                style={{ background: "oklch(0.72 0.18 142)", flexShrink: 0 }}
              />
              <p
                className="text-xs font-semibold tracking-wide"
                style={{ color: "oklch(0.72 0.18 142)" }}
              >
                Next available slot: Today, 6:30 PM
              </p>
            </div>

            <div
              id="input-panel"
              className="glass-card rounded-2xl p-6"
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
                    onChange={(e) => handleFromChange(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-medium text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-[oklch(0.82_0.11_82/0.5)] focus:border-[oklch(0.82_0.11_82/0.4)] transition-all"
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
                    onChange={(e) => handleToChange(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-medium text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-[oklch(0.82_0.11_82/0.5)] focus:border-[oklch(0.82_0.11_82/0.4)] transition-all"
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
                {isCalculating && (
                  <p
                    className="text-xs mt-2 animate-fade-in-out"
                    style={{ color: "oklch(0.55 0.02 252)" }}
                  >
                    Calculating…
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Emotional trust line above CTA */}
                <p
                  className="text-center text-sm font-semibold"
                  style={{ color: "oklch(0.72 0.18 142)" }}
                >
                  This move is protected.
                </p>
                <button
                  type="button"
                  data-ocid="hero.lock_slot.primary_button"
                  onClick={onBookSlot}
                  className="btn-gold w-full py-4 text-sm font-bold tracking-wide hover:scale-[1.03] transition-transform duration-150"
                >
                  Lock My Safe Move
                </button>
                {/* Micro trust below CTA */}
                <p
                  className="text-center text-xs"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  No damage. No hidden charges. No risk.
                </p>
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

          {/* RIGHT COLUMN — Relocate Xpress System LIVE */}
          <div
            className="relative rounded-2xl p-8"
            style={{
              background: "oklch(0.10 0.03 252 / 0.95)",
              borderRadius: "1.25rem",
              border: "1.5px solid oklch(0.84 0.14 207 / 0.5)",
              boxShadow:
                "0 0 0 1px oklch(0.72 0.18 142 / 0.08), 0 0 50px oklch(0.84 0.14 207 / 0.15), 0 0 90px oklch(0.72 0.18 142 / 0.08), 0 8px 32px oklch(0 0 0 / 0.4)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ background: "oklch(0.84 0.14 207)" }}
                />
                <span
                  className="text-base font-black tracking-wide"
                  style={{ color: "oklch(0.84 0.14 207)" }}
                >
                  Relocate Xpress System — LIVE
                </span>
              </div>
              <div
                className="text-xs px-2.5 py-1 rounded-full font-bold animate-live-badge"
                style={{
                  background: "oklch(0.84 0.14 207 / 0.15)",
                  color: "oklch(0.84 0.14 207)",
                  border: "1px solid oklch(0.84 0.14 207 / 0.4)",
                  textShadow: "0 0 8px oklch(0.84 0.14 207 / 0.5)",
                }}
              >
                LIVE
              </div>
            </div>

            <p
              className="text-xs mb-3"
              style={{
                color: isUpdating
                  ? "oklch(0.72 0.18 142)"
                  : "oklch(0.45 0.02 252)",
              }}
            >
              {updatedText}
            </p>

            {/* Animated activity graph */}
            <div
              className="mb-4 rounded-xl overflow-hidden"
              style={{
                background: "oklch(0.08 0.02 252)",
                border: "1px solid oklch(0.22 0.04 252)",
                height: "44px",
                position: "relative",
              }}
            >
              <svg
                width="200%"
                height="44"
                style={{ display: "block" }}
                aria-hidden="true"
                className="animate-graph-loop"
              >
                <polyline
                  points="0,32 20,28 35,18 50,30 65,14 80,26 95,20 110,32 125,16 140,28 155,22 170,34 185,18 200,28 215,32 230,20 245,14 260,28 275,22 290,32 305,18 320,30 335,16 350,28 365,22 380,32 395,18 400,28"
                  fill="none"
                  stroke="oklch(0.84 0.14 207 / 0.6)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="0,32 20,28 35,18 50,30 65,14 80,26 95,20 110,32 125,16 140,28 155,22 170,34 185,18 200,28 215,32 230,20 245,14 260,28 275,22 290,32 305,18 320,30 335,16 350,28 365,22 380,32 395,18 400,28"
                  fill="none"
                  stroke="oklch(0.84 0.14 207 / 0.6)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(400, 0)"
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "9px",
                  color: "oklch(0.84 0.14 207 / 0.7)",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
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
                      className={`text-sm font-bold${
                        row.highlight && isCalculating
                          ? " animate-pulse-value"
                          : ""
                      }`}
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
