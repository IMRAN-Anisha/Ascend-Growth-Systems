import { useState } from "react";

const FAQS = [
  ["How long does it take to go live?", "Usually 2–4 weeks from the audit to a fully running system. We work in stages, so you typically see the first wins — like instant replies and missed-call text-backs — within the first week."],
  ["Will it work with my POS and booking system?", "Yes. We connect to the tools hospitality actually uses — Square, Toast, Stripe, OpenTable, Mindbody, Fresha, Shopify and the big CRMs — and build around your workflow instead of forcing you to switch."],
  ["Do I need to be techy to run it?", "Not at all. We build and maintain everything, then train your team on a couple of simple screens. Most venues are comfortable in under 30 minutes — the system does the work in the background."],
  ["What happens to enquiries that come in after hours?", "They get an instant, on-brand reply that answers the basics and holds their interest. Hot ones can ping an on-call manager, and everything is queued and confirmed first thing the next morning."],
  ["How does it cut no-shows?", "Automated confirmations, well-timed reminders, optional deposits, and a waitlist that fills cancelled slots. Most venues see a meaningful drop within the first few weeks."],
  ["What does it cost?", "It depends on your size and which systems you need. Most venues recover the cost within the first couple of months. On the free audit we estimate your current leak and show what you stand to gain — the maths usually makes the decision easy."],
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 60 }} className="faq-grid">
          {/* Aside */}
          <div>
            <span style={{
              display: "inline-block",
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#6B7280",
              marginBottom: 16,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              FAQs
            </span>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400, color: "#111827",
              lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 14px",
            }}>
              Questions,<br />answered.
            </h2>
            <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: "0 0 28px" }}>
              Everything owners ask before they get started.
            </p>
            <div style={{
              background: "#0E1F33",
              borderRadius: 16,
              padding: "28px 28px 32px",
            }}>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", marginBottom: 18, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Still not sure if it fits your venue?
              </p>
              <a
                href="#booking"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 22px",
                  borderRadius: 100,
                  background: "#C5913A",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#A37630")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C5913A")}
              >
                Ask us on the call
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div>
            {FAQS.map(([q, a], i) => (
              <div key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "22px 4px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    cursor: "pointer",
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "#111827",
                    lineHeight: 1.3,
                  }}
                >
                  <span>{q}</span>
                  <div style={{
                    width: 26, height: 26,
                    borderRadius: "50%",
                    border: "1.5px solid #E5E7EB",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    background: open === i ? "#0E1F33" : "#FFFFFF",
                    borderColor: open === i ? "#0E1F33" : "#E5E7EB",
                    transition: "all 0.2s",
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={open === i ? "#FFFFFF" : "#6B7280"} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                <div style={{
                  maxHeight: open === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}>
                  <p style={{
                    padding: "0 4px 22px",
                    fontSize: "0.9rem",
                    color: "#6B7280",
                    lineHeight: 1.65,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    margin: 0,
                  }}>
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
