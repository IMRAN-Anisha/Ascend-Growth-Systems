const FEATURES = [
  {
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 3",
    label: "20 minutes",
    sub: "straight to the point",
    bg: "#F8F9FB",
    color: "#374151",
  },
  {
    icon: "M5 13l4 4L19 7",
    label: "No obligation",
    sub: "free, no pitch trap",
    bg: "#FFFBEB",
    color: "#B45309",
  },
  {
    icon: "M3 17l6-6 4 4 7-7M14 7h7v7",
    label: "Real numbers",
    sub: "your actual leak",
    bg: "#FEF2F2",
    color: "#DC2626",
  },
];

export function BookingSection() {
  return (
    <section id="booking" style={{ background: "linear-gradient(155deg, #0E1F33 0%, #162040 100%)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 48px" }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "#FFFFFF",
            lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 14px",
          }}>
            Ready to stop the leak?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.52)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0 }}>
            Book a free 20-minute audit. We'll time your current response, map where bookings slip away, and show you exactly what to fix first.
          </p>
        </div>

        <div style={{
          maxWidth: 740,
          margin: "0 auto",
          background: "#FFFFFF",
          borderRadius: 20,
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          padding: "40px 40px 36px",
          textAlign: "center",
        }}>
          <div style={{
            width: 68, height: 68,
            borderRadius: 18,
            background: "#F8F9FB",
            border: "1.5px solid #E5E7EB",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 20px",
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0E1F33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1.8rem",
            fontWeight: 400,
            color: "#111827",
            marginBottom: 8,
          }}>
            Book your free audit call
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#9CA3AF", marginBottom: 24, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            We'll walk through your current set-up and find the quick wins.
          </p>

          {/* Calendly embed */}
          <div style={{ marginBottom: 30 }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/ascendrealtysystems/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: 320, height: 630 }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="book-feats">
            {FEATURES.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", textAlign: "left" }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 10,
                  background: f.bg,
                  border: "1px solid #E5E7EB",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#111827", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{f.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "#9CA3AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) { .book-feats { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
