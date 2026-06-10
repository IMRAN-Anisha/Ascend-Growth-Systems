import { useEffect, useRef } from "react";

const TOOLS_COL1 = [
  ["Square", "square", "#3E4348"],
  ["Stripe", "stripe", "#635BFF"],
  ["Shopify", "shopify", "#96BF48"],
  ["Mailchimp", "mailchimp", "#FFE01B"],
  ["Klaviyo", "klaviyo", "#222222"],
  ["Instagram", "instagram", "#E4405F"],
  ["WhatsApp", "whatsapp", "#25D366"],
  ["Gmail", "gmail", "#EA4335"],
  ["Google Calendar", "googlecalendar", "#4285F4"],
];

const TOOLS_COL2 = [
  ["Google Maps", "googlemaps", "#4285F4"],
  ["Xero", "xero", "#13B5EA"],
  ["QuickBooks", "quickbooks", "#2CA01C"],
  ["Slack", "slack", "#4A154B"],
  ["Zapier", "zapier", "#FF4F00"],
  ["Calendly", "calendly", "#006BFF"],
  ["Twilio", "twilio", "#F22F46"],
  ["TikTok", "tiktok", "#010101"],
  ["Trustpilot", "trustpilot", "#00B67A"],
];

const TOOL_PILLS = ["Square", "Toast", "Stripe", "OpenTable", "Mindbody", "Fresha", "Shopify", "Mailchimp", "Instagram", "WhatsApp", "Xero", "+ more"];

function LogoTile({ name, slug, hex }: { name: string; slug: string; hex: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const fbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const url = `https://cdn.simpleicons.org/${slug}`;
    img.src = url;
    img.onerror = () => {
      if (img && fbRef.current) {
        img.style.display = "none";
        fbRef.current.style.display = "grid";
      }
    };
  }, [slug]);

  const isLight = ["FFE01B", "96BF48"].includes(hex);

  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E5E7EB",
      borderRadius: 14,
      aspectRatio: "1",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      transition: "transform 0.18s, box-shadow 0.18s",
    }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "scale(1.06)"; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "scale(1)"; el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; }}
      title={name}
    >
      <img
        ref={imgRef}
        alt={name}
        loading="lazy"
        width={40}
        height={40}
        style={{ objectFit: "contain" }}
      />
      <div
        ref={fbRef}
        style={{
          display: "none",
          width: 40, height: 40,
          borderRadius: 10,
          background: "#" + hex,
          placeItems: "center",
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontWeight: 400,
          fontSize: "1.2rem",
          color: isLight ? "#2a1c06" : "#FFFFFF",
        }}
      >
        {name[0]}
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  return (
    <section style={{ background: "#FFFFFF", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="integrations-grid">
          <div>
            <span style={{
              display: "inline-block",
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#6B7280",
              marginBottom: 16,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Integrations
            </span>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontWeight: 400, color: "#111827",
              lineHeight: 1.06, letterSpacing: "-0.02em", margin: "0 0 16px",
            }}>
              Works with the tools your venue already runs on.
            </h2>
            <p style={{
              fontSize: "1rem",
              color: "#6B7280",
              lineHeight: 1.65,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              margin: "0 0 24px",
              maxWidth: 440,
            }}>
              No new software to learn and no rip-and-replace. We connect to your POS, booking platform, socials, payments and accounting — and let them keep doing their job.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {TOOL_PILLS.map((t) => (
                <span key={t} style={{
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  background: "#F8F9FB",
                  border: "1px solid #E5E7EB",
                  borderRadius: 100,
                  padding: "5px 12px",
                  color: "#374151",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#booking"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px",
                borderRadius: 100,
                border: "1.5px solid #E5E7EB",
                color: "#374151",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0D1528"; e.currentTarget.style.color = "#0D1528"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#374151"; }}
            >
              See the full stack
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Scrolling logo columns */}
          <div style={{
            position: "relative",
            height: 400,
            overflow: "hidden",
            WebkitMaskImage: "linear-gradient(180deg, transparent, #000 10%, #000 90%, transparent)",
            maskImage: "linear-gradient(180deg, transparent, #000 10%, #000 90%, transparent)",
          }}>
            <div style={{ display: "flex", gap: 14, height: "100%" }}>
              {[TOOLS_COL1, TOOLS_COL2].map((col, ci) => (
                <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{
                    display: "flex", flexDirection: "column", gap: 14,
                    animation: `scrollUp ${ci === 0 ? 22 : 28}s linear infinite`,
                    animationDirection: ci === 1 ? "reverse" : "normal",
                  }}>
                    {[...col, ...col].map(([name, slug, hex], i) => (
                      <LogoTile key={`${ci}-${i}`} name={name as string} slug={slug as string} hex={hex as string} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @media (max-width: 860px) { .integrations-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
