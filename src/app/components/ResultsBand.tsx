const STATS = [
  { n: "<60s", t: "Reply time", s: "down from hours" },
  { n: "~40%", t: "Fewer no-shows", s: "with smart reminders" },
  { n: "24/7", t: "Always answered", s: "after-hours included" },
  { n: "3×", t: "More reviews", s: "auto-requested" },
];

export function ResultsBand() {
  return (
    <section style={{ background: "#0E1F33", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#C5913A",
            background: "rgba(197,145,58,0.12)",
            border: "1px solid rgba(197,145,58,0.2)",
            padding: "5px 12px", borderRadius: 100,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: 16,
          }}>
            What good looks like
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "#FFFFFF",
            lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0,
          }}>
            The targets we build toward
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }} className="results-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: "40px 28px",
              textAlign: "center",
              background: "#0E1F33",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <div style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
                lineHeight: 1,
                color: "#C5913A",
                marginBottom: 10,
              }}>
                {s.n}
              </div>
              <div style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: 4,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {s.t}
              </div>
              <div style={{
                fontSize: "0.84rem",
                color: "rgba(255,255,255,0.36)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {s.s}
              </div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center",
          fontSize: "0.76rem",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.22)",
          marginTop: 28,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          Illustrative targets based on common results — your numbers are set during the audit, not promised on a webpage.
        </p>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .results-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .results-grid > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .results-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
