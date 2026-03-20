export default function NationalTrustBar() {
  return (
    <section
      data-ocid="trust_strip.section"
      className="py-3 px-4"
      style={{
        borderTop: "1px solid oklch(0.82 0.11 82 / 0.18)",
        borderBottom: "1px solid oklch(0.82 0.11 82 / 0.18)",
        background: "oklch(0.07 0.02 252)",
      }}
    >
      <p
        className="text-center text-xs font-semibold tracking-[0.12em] uppercase"
        style={{ color: "oklch(0.82 0.11 82)" }}
      >
        Live across 500+ cities
        <span className="mx-3" style={{ color: "oklch(0.82 0.11 82 / 0.5)" }}>
          •
        </span>
        Real-time tracking
        <span className="mx-3" style={{ color: "oklch(0.82 0.11 82 / 0.5)" }}>
          •
        </span>
        Verified teams
      </p>
    </section>
  );
}
