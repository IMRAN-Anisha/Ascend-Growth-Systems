import { useState, useEffect } from "react";
import logoImg from "../../imports/logo.png";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#problem", label: "The leak" },
    { href: "#calculator", label: "Calculator" },
    { href: "#solution", label: "Systems" },
    { href: "#how", label: "How it works" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        transition: "box-shadow 0.25s",
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 1px 0 #E5E7EB" : "0 1px 0 rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img
              src={logoImg}
              alt="Ascend Growth Systems"
              style={{ height: 40, width: "auto", objectFit: "contain", display: "block" }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: 3 }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "0.95rem",
                color: "#C94B1C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                ASCEND
              </span>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.52rem",
                color: "#3A5A8C",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>
                GROWTH SYSTEMS
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop-links">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.15s",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0D1528")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="nav-ctas">
            <a
              href="#calculator"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "9px 18px",
                borderRadius: 100,
                border: "1.5px solid #E5E7EB",
                color: "#374151",
                textDecoration: "none",
                transition: "all 0.15s",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#9CA3AF"; e.currentTarget.style.color = "#111827"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#374151"; }}
            >
              Find your leak
            </a>
            <a
              href="#booking"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "9px 18px",
                borderRadius: 100,
                background: "#C94B1C",
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "all 0.15s",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#A33A15")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C94B1C")}
            >
              Book free audit
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                padding: 8,
                cursor: "pointer",
              }}
              className="nav-menu-btn"
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {menuOpen ? (
                  <path d="M4 4L18 18M18 4L4 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M3 6H19M3 11H19M3 16H19" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#FFFFFF",
          borderTop: "1px solid #E5E7EB",
          padding: "8px 24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 4px",
                borderBottom: "1px solid #F3F4F6",
                color: "#374151",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 14,
              padding: "13px 20px",
              borderRadius: 100,
              background: "#C94B1C",
              color: "#FFFFFF",
              fontWeight: 600,
              textAlign: "center",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Book free audit
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop-links { display: none !important; }
          .nav-ctas a:first-child { display: none !important; }
          .nav-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
