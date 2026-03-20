export default function OurSystem() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "oklch(0.10 0.03 252 / 0.8)",
            border: "1px solid oklch(0.22 0.04 252)",
            borderLeft: "4px solid oklch(0.82 0.11 82)",
            boxShadow:
              "0 0 40px oklch(0.82 0.11 82 / 0.05), 0 4px 24px oklch(0 0 0 / 0.3)",
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.82 0.11 82)" }}
          >
            Our System
          </p>

          <h2
            className="text-2xl md:text-3xl font-black mb-2"
            style={{ color: "oklch(0.97 0.008 252)" }}
          >
            MoveX is not a traditional movers service.
          </h2>

          <p
            className="text-base mb-6"
            style={{ color: "oklch(0.62 0.02 252)" }}
          >
            It is a smart relocation system designed to:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Optimize routes",
              "Assign trained teams",
              "Ensure zero-damage handling",
              "Deliver predictable timelines",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{
                    background: "oklch(0.82 0.11 82 / 0.15)",
                    border: "1px solid oklch(0.82 0.11 82 / 0.4)",
                    color: "oklch(0.88 0.12 82)",
                  }}
                >
                  ✓
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.85 0.01 252)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="text-sm font-semibold"
            style={{ color: "oklch(0.72 0.01 252)" }}
          >
            Every move is calculated, tracked, and executed with precision.
          </p>
        </div>
      </div>
    </section>
  );
}
