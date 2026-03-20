import type React from "react";
import { useEffect, useRef, useState } from "react";

type Item = {
  id: string;
  name: string;
  isHeavy: boolean;
  icon: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    id: "refrigerator",
    name: "Refrigerator",
    isHeavy: true,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="8"
          y="4"
          width="24"
          height="32"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="8"
          y1="16"
          x2="32"
          y2="16"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="14"
          y1="10"
          x2="14"
          y2="14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="22"
          x2="14"
          y2="30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "ac",
    name: "Air Conditioner",
    isHeavy: true,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="5"
          y="10"
          width="30"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="5"
          y1="17"
          x2="35"
          y2="17"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="20"
          x2="35"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="24"
          x2="12"
          y2="32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="24"
          x2="28"
          y2="32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "sofa",
    name: "Sofa",
    isHeavy: true,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="6"
          y="16"
          width="28"
          height="12"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="19"
          width="6"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="30"
          y="19"
          width="6"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="9"
          y="11"
          width="22"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="10"
          y1="28"
          x2="10"
          y2="33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="28"
          x2="30"
          y2="33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "bed",
    name: "Bed",
    isHeavy: true,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="5"
          y="20"
          width="30"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="5"
          y="14"
          width="14"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="5"
          y1="32"
          x2="5"
          y2="36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="35"
          y1="32"
          x2="35"
          y2="36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "washing_machine",
    name: "Washing Machine",
    isHeavy: true,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="6"
          y="4"
          width="28"
          height="32"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="23" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="23" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
        <line
          x1="16"
          y1="10"
          x2="22"
          y2="10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "tv",
    name: "TV",
    isHeavy: false,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="4"
          y="7"
          width="32"
          height="22"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="16"
          y1="29"
          x2="12"
          y2="35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="29"
          x2="28"
          y2="35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="35"
          x2="28"
          y2="35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "dining_table",
    name: "Dining Table",
    isHeavy: true,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="5"
          y="14"
          width="30"
          height="5"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="10"
          y1="19"
          x2="10"
          y2="34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="19"
          x2="30"
          y2="34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="19"
          x2="18"
          y2="28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="19"
          x2="22"
          y2="28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "wardrobe",
    name: "Wardrobe",
    isHeavy: true,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <rect
          x="5"
          y="4"
          width="30"
          height="34"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="4"
          x2="20"
          y2="38"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="16" cy="21" r="1.5" fill="currentColor" />
        <circle cx="24" cy="21" r="1.5" fill="currentColor" />
        <line
          x1="5"
          y1="34"
          x2="35"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "boxes",
    name: "Boxes / Cartons",
    isHeavy: false,
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-8 h-8"
        role="img"
        aria-label="item icon"
      >
        <path
          d="M20 6L34 13V27L20 34L6 27V13L20 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line
          x1="20"
          y1="6"
          x2="20"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="13"
          x2="34"
          y2="13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="9"
          x2="13"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function useAnimatedNumber(value: number) {
  const [displayed, setDisplayed] = useState(value);
  const [animKey, setAnimKey] = useState(0);
  const prev = useRef(value);

  // biome-ignore lint/correctness/useExhaustiveDependencies: displayed intentionally excluded
  useEffect(() => {
    if (value !== prev.current) {
      const start = prev.current;
      prev.current = value;
      setAnimKey((k) => k + 1);
      const end = value;
      const duration = 400;
      const startTime = performance.now();
      const frame = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setDisplayed(Math.round(start + (end - start) * eased));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }, [value]);

  return { displayed, animKey };
}

function buildWhatsAppUrl(quantities: Record<string, number>) {
  const selectedLines = ITEMS.filter((item) => quantities[item.id] > 0).map(
    (item) => `${quantities[item.id]}x ${item.name}`,
  );

  if (selectedLines.length === 0) {
    return "https://wa.me/916296982596?text=Hi%20MoveX,%20Here%20are%20my%20items%20for%20moving";
  }

  const itemsText = selectedLines.join(", ");
  const message = `Hi MoveX, here are my items for moving: ${itemsText}. Please provide a quote.`;
  return `https://wa.me/916296982596?text=${encodeURIComponent(message)}`;
}

export default function ItemSelectorSection() {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(ITEMS.map((i) => [i.id, 0])),
  );
  const [justUpdated, setJustUpdated] = useState(false);
  const updateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  const heavyCount = ITEMS.filter((i) => i.isHeavy).reduce(
    (sum, i) => sum + quantities[i.id],
    0,
  );
  const lightCount = ITEMS.filter((i) => !i.isHeavy).reduce(
    (sum, i) => sum + quantities[i.id],
    0,
  );

  const teamSize = Math.max(2, Math.ceil(heavyCount * 0.8 + lightCount * 0.3));

  const effortLevel =
    totalItems === 0
      ? "—"
      : totalItems <= 5
        ? "Low"
        : totalItems <= 15
          ? "Medium"
          : "High";

  const effortColor =
    effortLevel === "Low"
      ? "#22c55e"
      : effortLevel === "Medium"
        ? "#eab308"
        : effortLevel === "High"
          ? "#ef4444"
          : "oklch(0.55 0.02 252)";

  const effortGlow =
    effortLevel === "Low"
      ? "0 0 12px rgba(34,197,94,0.5)"
      : effortLevel === "Medium"
        ? "0 0 12px rgba(234,179,8,0.5)"
        : effortLevel === "High"
          ? "0 0 12px rgba(239,68,68,0.5)"
          : "none";

  const adjust = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] ?? 0) + delta),
    }));
    // Trigger "updated just now" flash
    setJustUpdated(true);
    if (updateTimerRef.current) clearTimeout(updateTimerRef.current);
    updateTimerRef.current = setTimeout(() => setJustUpdated(false), 3000);
  };

  const { displayed: displayedTotal, animKey: totalKey } =
    useAnimatedNumber(totalItems);
  const { displayed: displayedTeam, animKey: teamKey } =
    useAnimatedNumber(teamSize);

  const whatsappUrl = buildWhatsAppUrl(quantities);

  return (
    <section
      id="item-selector"
      className="py-20 px-4 relative overflow-hidden"
      data-ocid="item_selector.section"
    >
      {/* Background bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.56 0.22 285 / 0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, oklch(0.84 0.14 207 / 0.04) 0%, transparent 60%)",
        }}
      />

      <style>{`
        @keyframes blink-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.15; }
        }
        @keyframes item-select {
          0% { transform: scale(1); }
          40% { transform: scale(1.045); }
          100% { transform: scale(1.02); }
        }
        @keyframes item-deselect {
          0% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        @keyframes number-pop {
          0% { transform: scale(0.75); opacity: 0.4; }
          60% { transform: scale(1.12); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-slide-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan-pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        .item-card-selected {
          animation: item-select 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .item-card-idle {
          animation: item-deselect 0.2s ease forwards;
        }
        .number-pop {
          animation: number-pop 0.38s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-6xl relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.82 0.11 82)" }}
          >
            Smart Item Planner
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Select Items for{" "}
            <span style={{ color: "oklch(0.88 0.12 82)" }}>Your Move</span>
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.55 0.02 252)" }}
          >
            Help us understand what you&apos;re moving —{" "}
            <span style={{ color: "oklch(0.72 0.02 252)" }}>
              this improves accuracy instantly
            </span>
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Item Grid Column */}
          <div className="flex-1">
            {/* Real-time analysis bar */}
            <div
              className="flex items-center gap-2 mb-5 px-4 py-2.5 rounded-xl"
              style={{
                background: "oklch(0.13 0.04 285 / 0.6)",
                border: "1px solid oklch(0.56 0.22 285 / 0.25)",
                animation: "scan-pulse 2.8s ease-in-out infinite",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background: "oklch(0.72 0.18 142)",
                  boxShadow: "0 0 6px oklch(0.72 0.18 142 / 0.8)",
                  animation: "blink-dot 1.2s ease-in-out infinite",
                }}
              />
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: "oklch(0.75 0.08 285)" }}
              >
                Your move is being analyzed in real-time
              </span>
            </div>

            {/* Item Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {ITEMS.map((item, idx) => {
                const qty = quantities[item.id];
                const isSelected = qty > 0;
                return (
                  <div
                    key={item.id}
                    data-ocid={`item_selector.item.${idx + 1}`}
                    className={`relative rounded-2xl p-4 flex flex-col items-center gap-3 cursor-pointer ${
                      isSelected ? "item-card-selected" : "item-card-idle"
                    }`}
                    style={{
                      background: isSelected
                        ? "oklch(0.15 0.04 82 / 0.4)"
                        : "oklch(0.13 0.036 252)",
                      border: isSelected
                        ? "1.5px solid oklch(0.82 0.11 82 / 0.85)"
                        : "1px solid oklch(0.22 0.04 252)",
                      boxShadow: isSelected
                        ? "0 0 22px oklch(0.82 0.11 82 / 0.28), 0 0 6px oklch(0.82 0.11 82 / 0.18), 0 4px 16px oklch(0 0 0 / 0.3)"
                        : "0 2px 12px oklch(0 0 0 / 0.25)",
                      transition:
                        "background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease",
                      transformOrigin: "center",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{
                        background: isSelected
                          ? "oklch(0.82 0.11 82 / 0.12)"
                          : "oklch(0.18 0.04 252)",
                        color: isSelected
                          ? "oklch(0.88 0.12 82)"
                          : "oklch(0.62 0.02 252)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Name */}
                    <p
                      className="text-xs md:text-sm font-semibold text-center leading-tight"
                      style={{
                        color: isSelected
                          ? "oklch(0.92 0.1 82)"
                          : "oklch(0.72 0.02 252)",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item.name}
                    </p>

                    {/* Quantity Selector */}
                    <div
                      className="flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                    >
                      <button
                        data-ocid={`item_selector.item.${idx + 1}.button`}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-150 active:scale-90"
                        style={{
                          background:
                            qty > 0
                              ? "oklch(0.82 0.11 82 / 0.2)"
                              : "oklch(0.22 0.04 252)",
                          color:
                            qty > 0
                              ? "oklch(0.88 0.12 82)"
                              : "oklch(0.45 0.02 252)",
                          border:
                            qty > 0
                              ? "1px solid oklch(0.82 0.11 82 / 0.4)"
                              : "1px solid oklch(0.28 0.04 252)",
                          cursor: qty === 0 ? "not-allowed" : "pointer",
                        }}
                        type="button"
                        onClick={() => adjust(item.id, -1)}
                        disabled={qty === 0}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span
                        key={qty}
                        className="w-5 text-center text-sm font-black tabular-nums number-pop"
                        style={{
                          color: isSelected
                            ? "oklch(0.92 0.1 82)"
                            : "oklch(0.55 0.02 252)",
                        }}
                      >
                        {qty}
                      </span>

                      <button
                        data-ocid={`item_selector.item.${idx + 1}.secondary_button`}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-150 active:scale-90"
                        style={{
                          background: "oklch(0.82 0.11 82 / 0.15)",
                          color: "oklch(0.88 0.12 82)",
                          border: "1px solid oklch(0.82 0.11 82 / 0.35)",
                          cursor: "pointer",
                        }}
                        type="button"
                        onClick={() => adjust(item.id, 1)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Smart Feedback Panel */}
          <div className="xl:w-72 xl:shrink-0">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{
                background: "oklch(0.11 0.03 252)",
                border: "1px solid oklch(0.82 0.11 82 / 0.18)",
                boxShadow:
                  "0 0 28px oklch(0.82 0.11 82 / 0.06), 0 8px 32px oklch(0 0 0 / 0.4)",
                borderRadius: "1.25rem",
              }}
              data-ocid="item_selector.panel"
            >
              {/* Panel title row */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "oklch(0.72 0.18 142)",
                      boxShadow: "0 0 8px oklch(0.72 0.18 142 / 0.8)",
                      animation: "blink-dot 1.4s ease-in-out infinite",
                    }}
                  />
                  <h3
                    className="text-sm font-black uppercase tracking-widest"
                    style={{ color: "oklch(0.88 0.12 82)" }}
                  >
                    Your Move Summary
                  </h3>
                </div>
                {/* LIVE badge */}
                <span
                  className="text-xs font-black tracking-widest px-2 py-0.5 rounded-md"
                  style={{
                    color: "oklch(0.72 0.18 142)",
                    background: "oklch(0.72 0.18 142 / 0.12)",
                    border: "1px solid oklch(0.72 0.18 142 / 0.35)",
                    animation: "blink-dot 2s ease-in-out infinite",
                  }}
                >
                  LIVE
                </span>
              </div>

              {/* Updated just now */}
              <p
                className="text-xs mb-5"
                style={{
                  color: justUpdated
                    ? "oklch(0.72 0.18 142)"
                    : "oklch(0.42 0.02 252)",
                  transition: "color 0.4s ease",
                }}
              >
                {justUpdated
                  ? "✓ Updated just now"
                  : "Monitoring your selection..."}
              </p>

              {/* Stats */}
              <div className="space-y-4 mb-5">
                <div
                  className="rounded-xl p-3"
                  style={{
                    background: "oklch(0.15 0.036 252)",
                    border: "1px solid oklch(0.22 0.04 252)",
                  }}
                >
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: "oklch(0.55 0.02 252)" }}
                  >
                    Total Items
                  </p>
                  <p
                    key={`total-${totalKey}`}
                    className="text-2xl font-black tabular-nums number-pop"
                    style={{ color: "oklch(0.97 0.008 252)" }}
                  >
                    {displayedTotal}
                  </p>
                </div>

                <div
                  className="rounded-xl p-3"
                  style={{
                    background: "oklch(0.15 0.036 252)",
                    border: "1px solid oklch(0.22 0.04 252)",
                  }}
                >
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: "oklch(0.55 0.02 252)" }}
                  >
                    Suggested Team Size
                  </p>
                  <p
                    key={`team-${teamKey}`}
                    className="text-2xl font-black tabular-nums number-pop"
                    style={{ color: "oklch(0.88 0.12 82)" }}
                  >
                    {displayedTeam}{" "}
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.62 0.02 252)" }}
                    >
                      professionals
                    </span>
                  </p>
                </div>

                <div
                  className="rounded-xl p-3"
                  style={{
                    background: "oklch(0.15 0.036 252)",
                    border: "1px solid oklch(0.22 0.04 252)",
                  }}
                >
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: "oklch(0.55 0.02 252)" }}
                  >
                    Effort Level
                  </p>
                  <p
                    key={`effort-${effortLevel}`}
                    className="text-2xl font-black number-pop"
                    style={{
                      color: effortColor,
                      textShadow: effortGlow,
                    }}
                  >
                    {effortLevel}
                  </p>
                </div>
              </div>

              {/* Optimizing line */}
              <p
                className="text-xs font-semibold mb-4"
                style={{
                  color: "oklch(0.62 0.06 285)",
                  animation: "scan-pulse 2.5s ease-in-out infinite",
                }}
              >
                ⟳ Optimizing team &amp; logistics...
              </p>

              {/* Assignment message */}
              {totalItems > 0 && (
                <p
                  className="text-xs font-semibold text-center mb-4 leading-relaxed"
                  style={{
                    color: "oklch(0.72 0.02 252)",
                    animation: "fade-slide-in 0.35s ease-out",
                  }}
                >
                  Based on your selection,{" "}
                  <span style={{ color: "oklch(0.88 0.12 82)" }}>
                    {displayedTeam} professionals
                  </span>{" "}
                  will be assigned
                </p>
              )}

              {/* AI-feel tagline */}
              <p
                className="text-xs italic text-center"
                style={{ color: "oklch(0.42 0.02 252)" }}
              >
                Smart system adjusting your move plan in real-time
              </p>

              {/* Divider */}
              <div
                className="my-5"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.82 0.11 82 / 0.3), transparent)",
                }}
              />

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="item_selector.primary_button"
                className="btn-gold w-full py-3 text-sm font-black tracking-wide text-center block"
                style={{ borderRadius: "0.875rem" }}
              >
                Lock My Slot Now
              </a>
              <p
                className="mt-2 text-xs text-center font-semibold"
                style={{ color: "oklch(0.72 0.18 142)" }}
              >
                ⚡ Based on your selection — instant confirmation on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
