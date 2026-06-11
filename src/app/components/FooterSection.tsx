import logoImg from "../../imports/logo.png";

export function FooterSection() {
  return (
    <footer style={{ background: "#091525", color: "#9CA3AF", padding: "64px 0 30px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Main links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1.4fr", gap: 40, marginBottom: 48 }} className="foot-grid">
          <div>
            {/* Logo + text */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <img
                src={logoImg}
                alt="Ascend Growth Systems"
                style={{ height: 40, width: "auto", objectFit: "contain", display: "block" }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: 3 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#C94B1C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ASCEND
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.52rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  GROWTH SYSTEMS
                </span>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.34)", maxWidth: 300, lineHeight: 1.65, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: "0 0 20px" }}>
              Convert · Close · Scale. We engineer the lead capture, no-show defence and follow-up systems that grow your revenue — so your team can focus on your clients.
            </p>
            {/* LinkedIn only */}
            <a
              href="https://www.linkedin.com/company/ascend-growth-systems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: 36, height: 36,
                borderRadius: 9,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "inline-grid",
                placeItems: "center",
                color: "rgba(255,255,255,0.4)",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#C94B1C"; e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.borderColor = "#C94B1C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </a>
          </div>

          <div>
            <h4 style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
              Systems
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {["Instant Reply Engine", "No-Show Defence", "Regulars Engine", "Live Dashboard"].map((l) => (
                <li key={l}>
                  <a href="#solution" style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.38)", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {[["#problem", "The problem"], ["#how", "How it works"], ["#calculator", "Calculator"], ["#faq", "FAQ"]].map(([href, label]) => (
                <li key={label}>
                  <a href={href} style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.38)", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
              Get in touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="mailto:info.ascendgrowthsystems@gmail.com" style={{ display: "flex", gap: 9, alignItems: "center", fontSize: "0.88rem", color: "rgba(255,255,255,0.38)", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C94B1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                info.ascendgrowthsystems@gmail.com
              </a>
              <div style={{ display: "flex", gap: 9, alignItems: "center", fontSize: "0.88rem", color: "rgba(255,255,255,0.38)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C94B1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                Based in Sydney, NSW
              </div>
            </div>
            <a
              href="#booking"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                marginTop: 18,
                padding: "10px 18px",
                borderRadius: 100,
                background: "#C94B1C",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.85rem",
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#A33A15")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C94B1C")}
            >
              Book free audit
            </a>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 14,
          fontSize: "0.82rem",
          color: "rgba(255,255,255,0.22)",
          flexWrap: "wrap",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          <p style={{ margin: 0 }}>© 2026 Ascend Growth Systems. All rights reserved.</p>
          <div style={{ display: "flex", gap: 22 }}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" style={{ color: "rgba(255,255,255,0.28)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .foot-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .foot-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
