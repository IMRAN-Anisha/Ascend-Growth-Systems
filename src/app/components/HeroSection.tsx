import { useState, useEffect } from "react";

const AUDIENCES = ["cafés", "restaurants", "day spas", "gyms & studios", "hair salons", "wellness clinics", "boutique stores", "wine bars"];

const FEED = [
  { icon: "chat", bg: "#7C3AED", title: 'Instagram DM — "Table for 4 Fri?"', sub: "Auto-replied in 8s · table held", badge: "Auto", badgeColor: "#F5F3FF", badgeText: "#7C3AED" },
  { icon: "phone", bg: "#DC2626", title: "Missed call · 11:42 pm", sub: "Texted back instantly · rebooked", badge: "Saved", badgeColor: "#FEF2F2", badgeText: "#DC2626" },
  { icon: "cal", bg: "#0D1528", title: "Online booking confirmed", sub: "Reminder + deposit link sent", badge: "Won", badgeColor: "#F0FDF4", badgeText: "#16A34A" },
  { icon: "star", bg: "#C94B1C", title: "5★ review request sent", sub: "2 days after visit · automated", badge: "Auto", badgeColor: "#FFFBEB", badgeText: "#B45309" },
  { icon: "mail", bg: "#2563EB", title: "Web enquiry — class pack", sub: "Qualified & routed to CRM", badge: "Won", badgeColor: "#F0FDF4", badgeText: "#16A34A" },
];

function FeedIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    chat: "M4 4h16v12H7l-3 3z",
    phone: "M5 4l3 6-2 2a14 14 0 006 6l2-2 6 3",
    cal: "M3 4h18v17H3zM3 9h18M8 2v4M16 2v4",
    star: "M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z",
    mail: "M3 5h18v14H3zM3 7l9 6 9-6",
  };
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[type]} />
    </svg>
  );
}

export function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % AUDIENCES.length);
        setFade(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="hero" style={{
      background: "linear-gradient(160deg, #F8F9FB 0%, #EEF1F6 100%)",
      paddingTop: 140,
      paddingBottom: 80,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle at 70% 20%, rgba(201,75,28,0.06) 0%, transparent 55%), radial-gradient(circle at 15% 80%, rgba(58,90,140,0.05) 0%, transparent 50%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 64,
          alignItems: "center",
        }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#C94B1C",
              background: "rgba(201,75,28,0.12)",
              border: "1px solid rgba(201,75,28,0.25)",
              padding: "6px 13px",
              borderRadius: 100,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: 22,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C94B1C", display: "inline-block" }} />
              Convert · Close · Scale
            </div>

            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "#0E1F33",
              margin: 0,
            }}>
              We help{" "}
              <span style={{
                color: "#C94B1C",
                display: "inline-block",
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}>
                {AUDIENCES[wordIdx]}
              </span>
              <br />fill every slot &<br />keep guests coming back.
            </h1>

            <p style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "#4B5563",
              margin: "24px 0 32px",
              maxWidth: 520,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Reply to every booking, DM and missed call in seconds. Cut no-shows. Turn first-timers into regulars — automated systems that run 24/7 so your team can stay on the floor.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href="#calculator"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 24px",
                  borderRadius: 100,
                  background: "#C94B1C",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#A33A15")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C94B1C")}
              >
                Find your revenue leak
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#booking"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 24px",
                  borderRadius: 100,
                  border: "1.5px solid #D1D5DB",
                  color: "#374151",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#9CA3AF"; e.currentTarget.style.color = "#111827"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#D1D5DB"; e.currentTarget.style.color = "#374151"; }}
              >
                Book free audit
              </a>
            </div>

            <div style={{
              display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
              marginTop: 28,
              fontSize: "0.82rem",
              color: "#9CA3AF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              {["No lock-in contracts", "Live in 2–4 weeks", "Built around your tools"].map((t, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  {i > 0 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#D1D5DB" }} />}
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Live feed */}
          <div className="hero-feed-wrap">
            <div style={{
              background: "#FFFFFF",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.32)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <div style={{
                background: "#0D1528",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Today's service feed
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span style={{
                    width: 7, height: 7, borderRadius: "50%", background: "#4ADE80",
                    animation: "pulse 1.6s infinite",
                    display: "inline-block",
                  }} />
                  Live
                </span>
              </div>
              <div style={{ padding: "4px 12px 16px" }}>
                {FEED.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 13,
                      padding: "12px 8px",
                      borderBottom: i < FEED.length - 1 ? "1px solid #F3F4F6" : "none",
                      animation: `feedRise 0.5s ease forwards`,
                      animationDelay: `${i * 0.12}s`,
                      opacity: 0,
                    }}
                  >
                    <div style={{
                      width: 36, height: 36,
                      borderRadius: 10,
                      background: item.bg,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}>
                      <FeedIcon type={item.icon} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#111827", fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</div>
                      <div style={{ fontSize: "0.78rem", color: "#9CA3AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.sub}</div>
                    </div>
                    <span style={{
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      padding: "4px 9px",
                      borderRadius: 6,
                      background: item.badgeColor,
                      color: item.badgeText,
                      whiteSpace: "nowrap",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes feedRise { to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.7); } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-feed-wrap { max-width: 420px; margin: 0 auto; }
        }
      `}</style>
    </header>
  );
}
