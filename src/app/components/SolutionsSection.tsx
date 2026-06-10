const SOLUTIONS = [
  {
    num: "01",
    tag: "Never miss a lead",
    title: "Instant Reply Engine",
    desc: "Every enquiry — call, DM, form or walk-in — gets an instant, on-brand reply, qualified and booked.",
    features: ["Auto-reply in under 60 seconds", "Missed-call text-back", "Smart routing to the right person"],
  },
  {
    num: "02",
    tag: "Protect the calendar",
    title: "No-Show Defence",
    desc: "Confirmations, reminders, deposits and waitlist fill so empty slots get rebooked, not written off.",
    features: ["SMS + email reminder sequences", "Deposit & confirmation links", "Auto-rebook cancellations"],
  },
  {
    num: "03",
    tag: "Bring them back",
    title: "Regulars Engine",
    desc: "Post-visit follow-ups, review requests and win-back campaigns that turn one visit into a habit.",
    features: ["Timed review requests (+stars)", "Win-back & VIP offers", "Birthday & lapsed-guest nudges"],
  },
  {
    num: "04",
    tag: "See everything",
    title: "Live Dashboard",
    desc: "Connects your POS, booking, socials and payments into one view your whole team can read.",
    features: ["Every channel in one place", "Response & no-show metrics", "Daily service brief"],
  },
];

export function SolutionsSection() {
  return (
    <section id="solution" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 52px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#6B7280",
            marginBottom: 16,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            The systems
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "#111827",
            lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 14px",
          }}>
            What we take off your plate
          </h2>
          <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0 }}>
            Four engineered systems that catch every lead, kill no-shows, and bring guests back — quietly, in the background.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="sol-grid">
          {SOLUTIONS.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #E5E7EB",
                borderRadius: 16,
                padding: "28px 26px 30px",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "2.2rem",
                fontWeight: 400,
                color: "#C5913A",
                lineHeight: 1,
                marginBottom: 16,
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#9CA3AF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: 8,
              }}>
                {s.tag}
              </div>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#111827",
                marginBottom: 10,
                lineHeight: 1.3,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: "0.875rem",
                color: "#6B7280",
                lineHeight: 1.6,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                margin: "0 0 18px",
              }}>
                {s.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {s.features.map((f, fi) => (
                  <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: "0.84rem", color: "#374151", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5913A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .sol-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 520px) { .sol-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
