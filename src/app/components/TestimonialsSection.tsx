const QUOTES = [
  {
    stars: 5,
    quote: "We stopped losing the late-night Instagram enquiries. They get answered and half of them are booked before we open.",
    name: "Maya R.",
    role: "Day spa · Inner West",
    initials: "MR",
    color: "#0D1528",
  },
  {
    stars: 5,
    quote: "No-shows used to wreck our Saturdays. Confirmations and the waitlist fill mean those tables don't sit empty anymore.",
    name: "Jordan T.",
    role: "Café & wine bar",
    initials: "JT",
    color: "#C5913A",
  },
];

export function TestimonialsSection() {
  return (
    <section style={{ background: "#F8F9FB", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#6B7280",
            marginBottom: 16,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            From the floor
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "#111827",
            lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0,
          }}>
            The kind of thing owners tell us
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="q-grid">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 18,
                padding: "36px 36px 32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ color: "#C5913A", fontSize: "1.1rem", letterSpacing: 2, marginBottom: 18 }}>
                {"★".repeat(q.stars)}
              </div>
              <blockquote style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "1.22rem",
                lineHeight: 1.45,
                color: "#111827",
                margin: "0 0 24px",
                fontWeight: 400,
              }}>
                "{q.quote}"
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                <div style={{
                  width: 42, height: 42,
                  borderRadius: "50%",
                  background: q.color,
                  display: "grid",
                  placeItems: "center",
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                }}>
                  {q.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#111827", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{q.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#9CA3AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "0.76rem", color: "#C4C9D4", marginTop: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Illustrative composites for demonstration.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) { .q-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
