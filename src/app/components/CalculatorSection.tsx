import { useState, useCallback } from "react";

const RESP_MULT: Record<string, number> = { instant: 1.0, "5min": 0.9, "1hr": 0.72, "3hr": 0.52, sameday: 0.32 };
const FOLLOW_MULT: Record<string, number> = { strong: 1.0, average: 0.74, poor: 0.5 };
const BASE = 0.3;

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString("en-AU");
}

export function CalculatorSection() {
  const [enq, setEnq] = useState(45);
  const [spend, setSpend] = useState(95);
  const [speed, setSpeed] = useState("3hr");
  const [follow, setFollow] = useState("average");

  const calc = useCallback(() => {
    const e = Math.max(0, enq);
    const v = Math.max(0, spend);
    const actual = BASE * (RESP_MULT[speed] ?? 0.52) * (FOLLOW_MULT[follow] ?? 0.74);
    const ideal = e * BASE;
    const act = e * actual;
    const lost = Math.max(0, ideal - act);
    const mo = lost * v * 4.33;
    const yr = lost * v * 52;
    const eff = ideal > 0 ? Math.round((act / ideal) * 100) : 100;
    return { mo, yr, lost, eff, extra: lost.toFixed(1) };
  }, [enq, spend, speed, follow]);

  const { mo, yr, lost, eff } = calc();

  return (
    <section id="calculator" style={{ background: "#F8F9FB", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#DC2626",
            background: "rgba(220,38,38,0.07)",
            border: "1px solid rgba(220,38,38,0.15)",
            padding: "5px 12px", borderRadius: 100,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: 18,
          }}>
            Revenue leak calculator
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "#111827",
            lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 14px",
          }}>
            What's leaking out of your week?
          </h2>
          <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0 }}>
            Adjust the numbers to your venue. We'll print a live estimate of what slow replies and weak follow-up are likely costing you.
          </p>
        </div>

        <div style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: 18,
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          padding: 40,
          maxWidth: 960,
          margin: "0 auto",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="calc-inputs">
            {[
              {
                id: "enq", label: "Enquiries & new leads per week",
                note: "Calls, DMs, walk-ins, web & booking-site enquiries combined.",
                type: "number", value: enq, min: 1,
                onChange: (v: string) => setEnq(Math.max(0, parseInt(v) || 0)),
                isSelect: false,
              },
              {
                id: "spend", label: "Average value per booking ($)",
                note: "A cover, a treatment, a class pack, an average sale.",
                type: "number", value: spend, min: 0,
                onChange: (v: string) => setSpend(Math.max(0, parseInt(v) || 0)),
                isSelect: false,
              },
            ].map((f) => (
              <div key={f.id}>
                <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 8, color: "#374151", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  min={f.min}
                  value={f.value}
                  onChange={(e) => f.onChange(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1.5px solid #E5E7EB",
                    borderRadius: 10,
                    fontSize: "1rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#111827",
                    background: "#FAFAFA",
                    outline: "none",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C5913A")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                />
                <p style={{ fontSize: "0.78rem", color: "#9CA3AF", marginTop: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{f.note}</p>
              </div>
            ))}

            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 8, color: "#374151", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                How fast do you reply?
              </label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                style={{
                  width: "100%", padding: "12px 14px", border: "1.5px solid #E5E7EB", borderRadius: 10,
                  fontSize: "1rem", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#111827",
                  background: "#FAFAFA", outline: "none",
                }}
              >
                <option value="instant">Instantly (automated)</option>
                <option value="5min">Within 5 minutes</option>
                <option value="1hr">Within an hour</option>
                <option value="3hr">Within a few hours</option>
                <option value="sameday">Same day or next day</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 8, color: "#374151", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Follow-up & rebooking
              </label>
              <select
                value={follow}
                onChange={(e) => setFollow(e.target.value)}
                style={{
                  width: "100%", padding: "12px 14px", border: "1.5px solid #E5E7EB", borderRadius: 10,
                  fontSize: "1rem", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#111827",
                  background: "#FAFAFA", outline: "none",
                }}
              >
                <option value="strong">Strong — systematic & automated</option>
                <option value="average">Average — when we remember</option>
                <option value="poor">Poor — rarely follow up</option>
              </select>
            </div>
          </div>

          {/* Docket */}
          <div style={{
            marginTop: 30,
            border: "1.5px solid #E5E7EB",
            borderRadius: 14,
            overflow: "hidden",
          }}>
            <div style={{
              background: "#0D1528",
              padding: "16px 24px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 3h16v18l-3-2-2 2-3-2-3 2-2-2-3 2zM8 8h8M8 12h8M8 16h5" />
              </svg>
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Revenue docket — estimated
                </div>
                <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", color: "#FFFFFF", marginTop: 2 }}>
                  Your weekly leak, itemised
                </div>
              </div>
            </div>

            <div style={{ padding: "28px 24px 30px" }}>
              {/* Big number */}
              <div style={{
                textAlign: "center",
                padding: "22px 20px",
                background: "rgba(220,38,38,0.04)",
                border: "1px solid rgba(220,38,38,0.1)",
                borderRadius: 12,
                marginBottom: 20,
              }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#DC2626", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Likely walking out the door — per month
                </div>
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(3rem, 8vw, 4.5rem)",
                  fontWeight: 400,
                  color: "#DC2626",
                  lineHeight: 1,
                  margin: "8px 0 4px",
                }}>
                  {fmt(mo)}
                </div>
                <div style={{ fontSize: "0.82rem", color: "#9CA3AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  range {fmt(mo * 0.7)} – {fmt(mo * 1.3)}
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 18 }} className="stat-grid">
                {[
                  { n: lost.toFixed(1), l: "lost bookings / week", bad: true },
                  { n: `${eff}%`, l: "operating at potential", bad: false },
                  { n: `$${Math.round(yr / 1000)}K`, l: "recoverable / year", good: true },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "#FAFAFA",
                    border: "1px solid #E5E7EB",
                    borderRadius: 12,
                    padding: "16px 12px",
                    textAlign: "center",
                  }}>
                    <div style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "1.8rem",
                      color: s.bad ? "#DC2626" : s.good ? "#16A34A" : "#111827",
                      lineHeight: 1,
                    }}>
                      {s.n}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#9CA3AF", marginTop: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: "14px 18px",
                background: "rgba(197,145,58,0.07)",
                border: "1px solid rgba(197,145,58,0.15)",
                borderRadius: 10,
                textAlign: "center",
                fontSize: "0.9rem",
                color: "#374151",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: 20,
              }}>
                You could be winning <strong style={{ color: "#C5913A" }}>{lost.toFixed(1)}</strong> more bookings a week with instant replies and systematic follow-up.
              </div>

              <div style={{ textAlign: "center" }}>
                <a
                  href="#booking"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "13px 24px",
                    borderRadius: 100,
                    background: "#0D1528",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "0.925rem",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#162040")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0D1528")}
                >
                  Plug this leak — book a free audit
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#9CA3AF", marginTop: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Estimate only — assumes a healthy booking rate on properly handled enquiries. Your real number comes out of the free audit.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .calc-inputs { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
