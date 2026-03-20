import { ChevronRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "../App";
import { CITIES } from "../lib/relocateEngine";
import RouteAnimation from "./RouteAnimation";

interface HeroProps {
  homeSize: string;
  setHomeSize: (s: string) => void;
  fromLocation: string;
  setFromLocation: (s: string) => void;
  toLocation: string;
  setToLocation: (s: string) => void;
  onBookSlot: () => void;
  dynamicPrice: number;
  dynamicTimeLabel: string;
}

const HOME_SIZES = ["1BHK", "2BHK", "3BHK"];

const ROUTE_PATHS = [
  {
    id: "r0",
    d: "M 50 400 Q 300 100 600 350 Q 900 600 1150 200",
    dur: "18s",
    delay: "0s",
  },
  {
    id: "r1",
    d: "M 200 700 Q 500 400 800 600 Q 1000 750 1150 500",
    dur: "24s",
    delay: "3s",
  },
  {
    id: "r2",
    d: "M 0 200 Q 300 350 600 150 Q 900 -50 1200 300",
    dur: "20s",
    delay: "6s",
  },
  {
    id: "r3",
    d: "M 100 600 Q 400 300 700 500 Q 950 650 1200 400",
    dur: "28s",
    delay: "1s",
  },
  {
    id: "r4",
    d: "M 300 800 Q 600 500 900 700 Q 1100 800 1200 600",
    dur: "22s",
    delay: "9s",
  },
  {
    id: "r5",
    d: "M 0 500 Q 350 250 650 450 Q 850 600 1200 350",
    dur: "30s",
    delay: "4s",
  },
  {
    id: "r6",
    d: "M 400 50 Q 600 300 800 150 Q 1000 0 1150 350",
    dur: "26s",
    delay: "12s",
  },
  {
    id: "r7",
    d: "M 0 650 Q 200 450 500 580 Q 750 700 1100 500",
    dur: "16s",
    delay: "7s",
  },
];

function useCountUp(target: number, duration = 600): number {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = target;
    if (start === end) return;
    const startTime = performance.now();
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round((start + (end - start) * eased) / 100) * 100;
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(end);
        prevRef.current = end;
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return display;
}

export default function Hero({
  homeSize,
  setHomeSize,
  fromLocation,
  setFromLocation,
  toLocation,
  setToLocation,
  onBookSlot: _onBookSlot,
  dynamicPrice,
  dynamicTimeLabel,
}: HeroProps) {
  const [animKey, setAnimKey] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [secondsAgo, setSecondsAgo] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);

  const animatedPrice = useCountUp(dynamicPrice);

  // biome-ignore lint/correctness/useExhaustiveDependencies: setAnimKey is stable
  useEffect(() => {
    setAnimKey((k) => k + 1);
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 800);
    return () => clearTimeout(timer);
  }, [homeSize, fromLocation, toLocation]);

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

  const teamMap: Record<string, number> = { "1BHK": 3, "2BHK": 4, "3BHK": 5 };
  const team = teamMap[homeSize] ?? 4;

  const rows = [
    {
      label: "Estimated Time",
      value: dynamicTimeLabel,
      icon: "⏱",
      highlight: false,
      badge: false,
      isPrice: false,
    },
    {
      label: "Starting Price",
      value: `Starting from ₹${animatedPrice.toLocaleString("en-IN")}`,
      icon: "₹",
      highlight: true,
      badge: false,
      isPrice: true,
    },
    {
      label: "Team Assigned",
      value: `${team} Professionals`,
      icon: "👥",
      highlight: false,
      badge: false,
      isPrice: false,
    },
    {
      label: "Risk Level",
      value: "ZERO",
      icon: "🛡",
      highlight: false,
      badge: true,
      isPrice: false,
    },
  ];

  const updatedText = isUpdating
    ? "Updating…"
    : secondsAgo === 0
      ? "Just updated"
      : secondsAgo === 1
        ? "Updated 1 sec ago"
        : `Updated ${secondsAgo} sec ago`;

  const selectStyle = {
    background: "oklch(0.09 0.025 252)",
    border: "1px solid oklch(0.22 0.04 252)",
    borderRadius: "0.75rem",
    color: "oklch(0.97 0.008 252)",
  };

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center pt-16 pb-24 overflow-hidden"
    >
      {/* TRUCK BACKGROUND IMAGE with zoom animation */}
      <img
        src="/assets/uploads/06BBE921-0F9E-4D16-A022-2093BF504546-1.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",
          objectPosition: "right center",
          filter: "blur(2px)",
          transform: "scale(1.06)",
          animation: "heroZoom 12s ease-out infinite alternate",
          zIndex: 0,
        }}
      />

      {/* Directional dark overlay — heavier on left (text), lighter on right (truck visible) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 100%)",
          zIndex: 1,
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.008 252) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.008 252) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 2,
        }}
      />

      {/* Animated route lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3 }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {ROUTE_PATHS.map((route) => (
            <radialGradient
              key={route.id}
              id={`dotGrad_${route.id}`}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="oklch(0.88 0.12 82)"
                stopOpacity="0.6"
              />
              <stop
                offset="100%"
                stopColor="oklch(0.88 0.12 82)"
                stopOpacity="0"
              />
            </radialGradient>
          ))}
        </defs>
        {ROUTE_PATHS.map((route) => (
          <g key={route.id}>
            <path
              id={`heroPath_${route.id}`}
              d={route.d}
              fill="none"
              stroke="oklch(0.84 0.14 207 / 0.06)"
              strokeWidth="1"
            />
            <circle r="3" fill={`url(#dotGrad_${route.id})`} opacity="0.7">
              <animateMotion
                dur={route.dur}
                repeatCount="indefinite"
                begin={route.delay}
              >
                <mpath href={`#heroPath_${route.id}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.06); }
        }
      `}</style>

      <div
        className="relative mx-auto max-w-6xl w-full px-4"
        style={{ zIndex: 10 }}
      >
        {/* TOP TRUST BAR */}
        <div className="flex items-center justify-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(0.82 0.11 82 / 0.1)",
              border: "1px solid oklch(0.82 0.11 82 / 0.3)",
              color: "oklch(0.88 0.12 82)",
            }}
          >
            <span>⭐</span>
            <span>Relocation. Engineered.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* Hero text block */}
            <div className="flex flex-col gap-4">
              {/* Brand name */}
              <p
                className="text-4xl lg:text-5xl font-black tracking-tight"
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 0 24px oklch(0.88 0.12 82 / 0.45), 0 0 48px oklch(0.88 0.12 82 / 0.2)",
                  letterSpacing: "-0.02em",
                }}
              >
                MoveX
              </p>

              {/* Eyebrow */}
              <p
                className="text-sm font-bold uppercase tracking-[0.15em]"
                style={{ color: "oklch(0.88 0.12 82 / 0.85)" }}
              >
                India&apos;s Intelligent Relocation System
              </p>

              {/* Main headline */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight">
                <span className="text-white">Your move. </span>
                <span style={{ color: "oklch(0.88 0.12 82)" }}>
                  Fully controlled.
                </span>
              </h1>

              {/* Subline */}
              <p
                className="text-base font-bold"
                style={{ color: "oklch(0.88 0.12 82)" }}
              >
                Across India — Door to Door
              </p>

              {/* Sub-line trust */}
              <p
                className="text-xs font-medium"
                style={{
                  color: "oklch(0.55 0.02 252)",
                  letterSpacing: "0.02em",
                }}
              >
                Transparent pricing. Verified professionals. No hidden charges.
              </p>

              {/* Guarantee */}
              <p className="text-lg">
                <span style={{ color: "oklch(0.75 0.02 252)" }}>
                  Zero damage.{" "}
                </span>
                <span
                  className="font-black"
                  style={{
                    color: "oklch(0.88 0.12 82)",
                    textShadow: "0 0 16px oklch(0.88 0.12 82 / 0.5)",
                  }}
                >
                  Or we pay you.
                </span>
              </p>

              {/* CTA Button */}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="hero.lock_slot.primary_button"
                  className="btn-outline-gold inline-block text-center py-4 px-8 text-sm font-bold tracking-wide hover:scale-[1.03] transition-transform duration-150"
                  style={{ maxWidth: "340px" }}
                >
                  Get Instant Price on WhatsApp
                </a>
                <p
                  className="text-xs font-medium"
                  style={{
                    color: "oklch(0.55 0.02 252)",
                    fontStyle: "italic",
                    letterSpacing: "0.04em",
                  }}
                >
                  Powered by MoveX Intelligence System™
                </p>
                <span
                  style={{
                    color: "oklch(0.72 0.18 142)",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  ● Average response time: under 2 minutes
                </span>
                <span
                  style={{
                    color: "oklch(0.72 0.18 142)",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  No hidden charges. Final price before move.
                </span>
              </div>
            </div>

            {/* Move Calculator */}
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
                  htmlFor="from-select"
                  className="text-xs font-medium mb-1.5 block"
                  style={{ color: "oklch(0.62 0.02 252)" }}
                >
                  From
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    style={{ color: "oklch(0.82 0.11 82 / 0.7)", zIndex: 1 }}
                  />
                  <select
                    id="from-select"
                    data-ocid="hero.from.select"
                    value={fromLocation}
                    onChange={(e) => handleFromChange(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[oklch(0.82_0.11_82/0.5)] transition-all appearance-none cursor-pointer"
                    style={selectStyle}
                  >
                    {CITIES.map((city) => (
                      <option
                        key={city}
                        value={city}
                        style={{ background: "oklch(0.09 0.025 252)" }}
                      >
                        {city}
                      </option>
                    ))}
                  </select>
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
                  htmlFor="to-select"
                  className="text-xs font-medium mb-1.5 block"
                  style={{ color: "oklch(0.62 0.02 252)" }}
                >
                  To
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    style={{ color: "oklch(0.84 0.14 207 / 0.7)", zIndex: 1 }}
                  />
                  <select
                    id="to-select"
                    data-ocid="hero.to.select"
                    value={toLocation}
                    onChange={(e) => handleToChange(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[oklch(0.82_0.11_82/0.5)] transition-all appearance-none cursor-pointer"
                    style={selectStyle}
                  >
                    {CITIES.map((city) => (
                      <option
                        key={city}
                        value={city}
                        style={{ background: "oklch(0.09 0.025 252)" }}
                      >
                        {city}
                      </option>
                    ))}
                  </select>
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
                <p
                  className="text-center text-xs font-semibold"
                  style={{ color: "oklch(0.72 0.18 142)" }}
                >
                  ⚡ Instant confirmation on WhatsApp
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero.get_price.secondary_button"
                    className="btn-outline-gold py-2.5 text-xs font-semibold text-center block"
                  >
                    Get Instant Price on WhatsApp
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero.talk_expert.button"
                    className="btn-ghost-white py-2.5 text-xs font-semibold text-center block"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Micro-trust lines */}
              <div
                className="mt-4 pt-4 flex flex-col gap-1.5"
                style={{ borderTop: "1px solid oklch(0.22 0.04 252)" }}
              >
                {[
                  "✓ No advance required in most cases",
                  "✓ Pay after confirmation",
                  "✓ Support available on call & WhatsApp",
                ].map((line) => (
                  <p
                    key={line}
                    className="text-xs"
                    style={{ color: "oklch(0.72 0.18 142)", fontWeight: 600 }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Flexible scheduling note */}
              <p
                className="mt-3 text-xs"
                style={{ color: "oklch(0.42 0.02 252)" }}
              >
                Plan your move in advance. Flexible scheduling available.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — MoveX System LIVE */}
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
                  MoveX System — LIVE
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
                  className="animate-count-up"
                  style={{
                    borderBottom:
                      i < rows.length - 1
                        ? "1px solid oklch(0.22 0.04 252)"
                        : "none",
                    animationDelay: `${i * 80}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="flex items-center justify-between py-3.5">
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
                    ) : row.isPrice ? (
                      <span
                        className="text-sm font-bold"
                        style={{
                          color: "oklch(0.88 0.12 82)",
                          textShadow: "0 0 10px oklch(0.88 0.12 82 / 0.45)",
                        }}
                      >
                        {row.value}
                      </span>
                    ) : (
                      <span
                        className="text-sm font-bold"
                        style={{ color: "oklch(0.92 0.008 252)" }}
                      >
                        {row.value}
                      </span>
                    )}
                  </div>
                  {row.isPrice && (
                    <div
                      style={{
                        paddingLeft: "2.25rem",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.48 0.02 252)" }}
                      >
                        *Final price confirmed after quick inspection on
                        WhatsApp
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "oklch(0.48 0.02 252)" }}
                      >
                        Based on 2,347 similar moves
                      </p>
                      <p
                        className="text-xs mt-0.5 italic"
                        style={{ color: "oklch(0.55 0.02 252)" }}
                      >
                        Optimizing route, team &amp; logistics in real-time...
                      </p>
                    </div>
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
                Protected by MoveX System
              </span>
            </div>

            <p
              className="text-center mt-2"
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "oklch(0.84 0.14 207 / 0.5)",
              }}
            >
              Powered by MoveX Intelligence System™
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
