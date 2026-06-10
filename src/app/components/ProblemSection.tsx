const PROBLEMS = [
  {
    title: "Enquiries sit while you're on the floor",
    body: "DMs, web forms and emails go cold during service. By the time anyone replies, they've booked elsewhere.",
    icon: "M12 7v5l3 3M12 21a9 9 0 100-18 9 9 0 000 18z",
  },
  {
    title: "Missed calls become someone else's booking",
    body: "Every unanswered call mid-rush is a table, a treatment or a membership your competitor happily takes.",
    icon: "M5 4l3 6-2 2a14 14 0 006 6l2-2 6 3M16 4l5 5M21 4l-5 5",
  },
  {
    title: "No-shows & empty slots quietly drain the week",
    body: "An unconfirmed booking and a forgotten appointment cost the same as an empty slot — and nobody filled the gap.",
    icon: "M3 4h18v17H3zM3 9h18M8 2v4M16 2v4M9 14l2 2 4-4",
  },
  {
    title: "The team burns hours on admin, not guests",
    body: "Confirmations, reminders, rebooking, review chasing, data entry — time that should be spent looking after people.",
    icon: "M12 3v3M12 18v3M5 12H2M22 12h-3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2M12 8a4 4 0 100 8 4 4 0 000-8z",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" style={{ background: "#0E1F33", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: 660, marginBottom: 56 }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#EF4444",
            background: "rgba(239,68,68,0.12)",
            border: "1px solid rgba(239,68,68,0.2)",
            padding: "5px 12px",
            borderRadius: 100,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: 18,
          }}>
            The real problem
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: 0,
          }}>
            Most venues don't have a traffic problem.
          </h2>
          <div style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.3)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginTop: 4,
          }}>
            They have a follow-through problem.
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
        }} className="prob-grid">
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "28px 28px 28px 28px",
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.14)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(239,68,68,0.12)",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={p.icon} />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#FFFFFF",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.48)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  margin: 0,
                }}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 48,
          textAlign: "center",
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
          color: "rgba(255,255,255,0.3)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 40,
        }}>
          Every delay is revenue walking back out the door.
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .prob-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
