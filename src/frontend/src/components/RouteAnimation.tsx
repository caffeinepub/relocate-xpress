interface RouteAnimationProps {
  from: string;
  to: string;
}

export default function RouteAnimation({ from, to }: RouteAnimationProps) {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden"
      style={{
        height: "120px",
        background: "oklch(0.08 0.022 252)",
        border: "1px solid oklch(0.18 0.04 252)",
        borderRadius: "0.75rem",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <title>Route grid background</title>
        <defs>
          <pattern
            id="mini-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="oklch(0.84 0.14 207)"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mini-grid)" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 120"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <title>Animated move route</title>
        <defs>
          <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor="oklch(0.84 0.14 207)"
              stopOpacity="0.9"
            />
            <stop
              offset="50%"
              stopColor="oklch(0.56 0.22 285)"
              stopOpacity="0.9"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.65 0.22 315)"
              stopOpacity="0.9"
            />
          </linearGradient>
          <filter id="glow-route">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 40 60 C 120 60 140 30 200 30 C 260 30 280 80 360 60"
          fill="none"
          stroke="url(#route-grad)"
          strokeWidth="6"
          strokeOpacity="0.2"
          filter="url(#glow-route)"
        />
        <path
          d="M 40 60 C 120 60 140 30 200 30 C 260 30 280 80 360 60"
          fill="none"
          stroke="url(#route-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="400"
          strokeDashoffset="400"
          style={{
            animation: "route-dash 2s ease-in-out forwards",
            animationDelay: "0.3s",
          }}
        />

        <circle
          r="4"
          fill="oklch(0.88 0.12 82)"
          style={{ filter: "drop-shadow(0 0 6px oklch(0.82 0.11 82))" }}
        >
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 40 60 C 120 60 140 30 200 30 C 260 30 280 80 360 60"
          />
        </circle>

        <circle
          cx="40"
          cy="60"
          r="7"
          fill="oklch(0.84 0.14 207 / 0.15)"
          stroke="oklch(0.84 0.14 207)"
          strokeWidth="1.5"
          style={{ animation: "float-node 3s ease-in-out infinite" }}
        />
        <circle cx="40" cy="60" r="3" fill="oklch(0.84 0.14 207)" />

        <circle
          cx="360"
          cy="60"
          r="7"
          fill="oklch(0.65 0.22 315 / 0.15)"
          stroke="oklch(0.65 0.22 315)"
          strokeWidth="1.5"
          style={{
            animation: "float-node 3s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <circle cx="360" cy="60" r="3" fill="oklch(0.65 0.22 315)" />
      </svg>

      <div
        className="absolute bottom-2.5 left-3 text-xs font-semibold"
        style={{ color: "oklch(0.84 0.14 207)" }}
      >
        {from || "Origin"}
      </div>
      <div
        className="absolute bottom-2.5 right-3 text-xs font-semibold"
        style={{ color: "oklch(0.65 0.22 315)" }}
      >
        {to || "Destination"}
      </div>
    </div>
  );
}
