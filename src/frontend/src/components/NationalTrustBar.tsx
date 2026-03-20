export default function NationalTrustBar() {
  const stats = [
    { value: "500+", label: "Cities Covered" },
    { value: "10,000+", label: "Moves Completed" },
    { value: "Pan-India", label: "Network" },
  ];

  return (
    <section
      data-ocid="national_trust.section"
      className="py-8 px-4"
      style={{ borderBottom: "1px solid oklch(0.18 0.04 252)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "oklch(0.55 0.02 252)" }}
          >
            Trusted across India
          </p>
          <div className="flex items-center gap-10 md:gap-16">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-ocid={`national_trust.stat.item.${i + 1}`}
                className="flex flex-col items-center gap-0.5"
              >
                <span
                  className="text-2xl font-black leading-none"
                  style={{
                    color: "oklch(0.88 0.12 82)",
                    textShadow: "0 0 16px oklch(0.88 0.12 82 / 0.3)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
