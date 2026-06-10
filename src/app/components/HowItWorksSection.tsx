const STEPS = [
  {
    num: "01",
    title: "Audit",
    body: "We map every way an enquiry reaches you and time how long each one waits. You get a clear picture of where revenue leaks out.",
    when: "Week 1 · free, no obligation",
  },
  {
    num: "02",
    title: "Build",
    body: "We wire up instant replies, reminders, rebooking and review flows around your existing POS, booking system and socials.",
    when: "Weeks 2–3 · done for you",
  },
  {
    num: "03",
    title: "Run",
    body: "It works in the background 24/7. Your team just sees tidier bookings and a daily brief — we tune it as you grow.",
    when: "Week 4 onward · we maintain it",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how" style={{ background: "#F8F9FB", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#6B7280",
            marginBottom: 16,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            The process
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "#111827",
            lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0,
          }}>
            Three steps. Then it runs itself.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: 18,
          overflow: "hidden",
        }} className="how-grid">
          {STEPS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "40px 34px",
                borderRight: i < STEPS.length - 1 ? "1px solid #E5E7EB" : "none",
                position: "relative",
              }}
            >
              <div style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "3.2rem",
                fontWeight: 400,
                color: "rgba(197,145,58,0.18)",
                lineHeight: 1,
                marginBottom: 18,
              }}>
                {s.num}
              </div>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#111827",
                marginBottom: 10,
                lineHeight: 1.2,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "#6B7280",
                lineHeight: 1.65,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                margin: 0,
              }}>
                {s.body}
              </p>
              <div style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: "1px dashed #E5E7EB",
                fontSize: "0.78rem",
                color: "#9CA3AF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}>
                {s.when}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href="#booking"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 24px",
              borderRadius: 100,
              background: "#C5913A",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "0.925rem",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A37630")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C5913A")}
          >
            Start with a free audit
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 740px) {
          .how-grid { grid-template-columns: 1fr !important; }
          .how-grid > div { border-right: none !important; border-bottom: 1px solid #E5E7EB; }
          .how-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
