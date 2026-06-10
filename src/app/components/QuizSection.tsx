import { useState } from "react";

const BASE = 0.3;
const QUESTIONS = [
  {
    q: "How fast do you typically reply to a new enquiry?",
    opts: [
      ["Instantly — within a minute", 100],
      ["5 to 30 minutes", 80],
      ["1 to 3 hours", 55],
      ["3 to 24 hours", 28],
      ["Next day or later", 10],
    ],
  },
  {
    q: "After someone enquires or cancels, how do you follow up?",
    opts: [
      ["Systematic, automated sequence", 100],
      ["A few manual touches", 70],
      ["Usually just once", 42],
      ["Rarely follow up", 12],
    ],
  },
  {
    q: "What share of calls / DMs do you miss or answer late?",
    opts: [
      ["Almost none (0–5%)", 100],
      ["Some (5–15%)", 78],
      ["A fair bit (15–30%)", 55],
      ["Quite a lot (30–50%)", 28],
      ["Over half", 10],
    ],
  },
  {
    q: "Do you have automated reminders & confirmations to cut no-shows?",
    opts: [
      ["Yes — fully automated", 100],
      ["Partly automated", 68],
      ["All done manually", 40],
      ["No reminders at all", 16],
    ],
  },
  {
    q: "How well do you bring past guests back (reviews, win-backs, VIP)?",
    opts: [
      ["Consistently, automatically", 100],
      ["Now and then", 66],
      ["Rarely", 38],
      ["Never", 12],
    ],
  },
];

function getCategory(s: number): [string, string, number] {
  if (s >= 85) return ["Leak-proof venue", "#16A34A", 0.05];
  if (s >= 65) return ["Growing — minor leaks", "#C5913A", 0.16];
  if (s >= 42) return ["Leaking revenue", "#DC2626", 0.32];
  return ["Critical leak", "#DC2626", 0.5];
}

function fmt(n: number) { return "$" + Math.round(n).toLocaleString("en-AU"); }

export function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [phase, setPhase] = useState<"quiz" | "result" | "done">("quiz");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const select = (idx: number) => setAnswers((a) => ({ ...a, [step]: idx }));
  const back = () => { if (step > 0) setStep((s) => s - 1); };
  const next = () => {
    if (answers[step] === undefined) return;
    if (step < QUESTIONS.length - 1) setStep((s) => s + 1);
    else setPhase("result");
  };

  const score = () => {
    let t = 0;
    QUESTIONS.forEach((q, i) => { t += (q.opts[answers[i]]?.[1] as number) ?? 0; });
    return Math.round(t / QUESTIONS.length);
  };

  const submit = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setEmailErr(true); return; }
    setPhase("done");
  };

  if (phase === "done") {
    return (
      <section id="quiz" style={{ background: "#0E1F33", padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <QuizHeader />
          <div style={{ maxWidth: 680, margin: "0 auto", background: "#FFFFFF", borderRadius: 18, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
            <div style={{ padding: "60px 40px", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#F0FDF4", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.9rem", fontWeight: 400, color: "#111827", marginBottom: 10 }}>
                Your report is on its way
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#6B7280", maxWidth: 360, margin: "0 auto 6px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                We've sent your full Revenue Leak Report to <strong style={{ color: "#111827" }}>{email}</strong>.
              </p>
              <p style={{ fontSize: "0.875rem", color: "#9CA3AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Want to walk through it live?{" "}
                <a href="#booking" style={{ color: "#C5913A", fontWeight: 600 }}>Book your free audit →</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (phase === "result") {
    const s = score();
    const [cat, catColor, mult] = getCategory(s);
    const loss = Math.round(45 * BASE * mult * 95 * 4.33);
    const circ = 2 * Math.PI * 56;
    const offset = circ * (1 - s / 100);

    return (
      <section id="quiz" style={{ background: "#0E1F33", padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <QuizHeader />
          <div style={{ maxWidth: 680, margin: "0 auto", background: "#FFFFFF", borderRadius: 18, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
            <div style={{ height: 5, background: "#F3F4F6" }}><div style={{ height: "100%", background: "linear-gradient(90deg, #0E1F33, #C5913A)", width: "100%", transition: "width 0.4s" }} /></div>
            <div style={{ padding: "36px 40px" }}>
              {/* Gauge */}
              <div style={{ textAlign: "center", marginBottom: 22 }}>
                <svg width="130" height="130" viewBox="0 0 130 130">
                  <circle cx="65" cy="65" r="56" fill="none" stroke="#F3F4F6" strokeWidth="11" />
                  <circle cx="65" cy="65" r="56" fill="none" stroke={catColor} strokeWidth="11"
                    strokeLinecap="round"
                    strokeDasharray={circ}
                    strokeDashoffset={offset}
                    transform="rotate(-90 65 65)"
                    style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.2,1,0.3,1)" }}
                  />
                  <text x="65" y="72" textAnchor="middle" fill={catColor}
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, fontWeight: 400 }}
                  >{s}</text>
                </svg>
                <div style={{ display: "inline-block", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, background: catColor + "18", color: catColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {cat}
                </div>
              </div>

              <div style={{ textAlign: "center", padding: "18px 20px", background: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.12)", borderRadius: 12, marginBottom: 22 }}>
                <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2.8rem", fontWeight: 400, color: "#DC2626", lineHeight: 1 }}>
                  {fmt(loss)}
                </div>
                <div style={{ fontSize: "0.84rem", color: "#9CA3AF", marginTop: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  estimated revenue leaking out per month
                </div>
              </div>

              <p style={{ textAlign: "center", marginBottom: 10, fontSize: "0.9rem", color: "#374151", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Want the full breakdown — channel by channel — emailed to you?
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <input
                  type="email"
                  placeholder="you@yourvenue.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailErr(false); }}
                  style={{
                    flex: 1,
                    padding: "13px 16px",
                    border: `1.5px solid ${emailErr ? "#DC2626" : "#E5E7EB"}`,
                    borderRadius: 10,
                    fontSize: "1rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    outline: "none",
                  }}
                />
                <button
                  onClick={submit}
                  style={{
                    padding: "13px 20px",
                    borderRadius: 10,
                    background: "#0E1F33",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  Email my report
                </button>
              </div>
              {emailErr && <p style={{ color: "#DC2626", fontSize: "0.82rem", marginTop: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Please enter a valid email.</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const q = QUESTIONS[step];
  const progress = (step / QUESTIONS.length) * 100;

  return (
    <section id="quiz" style={{ background: "#0E1F33", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <QuizHeader />
        <div style={{ maxWidth: 680, margin: "0 auto", background: "#FFFFFF", borderRadius: 18, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
          <div style={{ height: 5, background: "#F3F4F6" }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg, #0E1F33, #C5913A)", width: `${progress}%`, transition: "width 0.4s" }} />
          </div>
          <div style={{ padding: "34px 36px" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 10 }}>
              Question {step + 1} of {QUESTIONS.length}
            </div>
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "#111827", marginBottom: 22, lineHeight: 1.3 }}>
              {q.q}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {q.opts.map((opt, i) => {
                const sel = answers[step] === i;
                return (
                  <div
                    key={i}
                    onClick={() => select(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: 13,
                      padding: "14px 16px",
                      border: `1.5px solid ${sel ? "#0E1F33" : "#E5E7EB"}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      background: sel ? "#F8F9FB" : "#FFFFFF",
                      transition: "all 0.14s",
                    }}
                    onMouseEnter={(e) => { if (!sel) (e.currentTarget as HTMLDivElement).style.borderColor = "#D1D5DB"; }}
                    onMouseLeave={(e) => { if (!sel) (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB"; }}
                  >
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      border: `2px solid ${sel ? "#0E1F33" : "#D1D5DB"}`,
                      display: "grid", placeItems: "center", flexShrink: 0,
                    }}>
                      {sel && <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#0E1F33" }} />}
                    </div>
                    <span style={{ fontWeight: 500, fontSize: "0.925rem", color: "#374151", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {opt[0] as string}
                    </span>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={back}
                style={{
                  background: "none", border: "none", color: step === 0 ? "transparent" : "#9CA3AF",
                  fontWeight: 600, fontSize: "0.875rem", cursor: step === 0 ? "default" : "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  pointerEvents: step === 0 ? "none" : "auto",
                }}
              >
                ← Back
              </button>
              <button
                onClick={next}
                disabled={answers[step] === undefined}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 22px",
                  borderRadius: 100,
                  background: answers[step] !== undefined ? "#0E1F33" : "#F3F4F6",
                  color: answers[step] !== undefined ? "#FFFFFF" : "#9CA3AF",
                  fontWeight: 600, fontSize: "0.9rem", border: "none",
                  cursor: answers[step] !== undefined ? "pointer" : "default",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "background 0.15s",
                }}
              >
                {step === QUESTIONS.length - 1 ? "See my result" : "Next"}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuizHeader() {
  return (
    <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 40px" }}>
      <span style={{
        display: "inline-block",
        fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
        textTransform: "uppercase", color: "#C5913A",
        background: "rgba(197,145,58,0.12)",
        border: "1px solid rgba(197,145,58,0.2)",
        padding: "5px 12px", borderRadius: 100,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        marginBottom: 16,
      }}>
        Free 60-second assessment
      </span>
      <h2 style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 400, color: "#FFFFFF",
        lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 12px",
      }}>
        How leak-proof is your venue?
      </h2>
      <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0 }}>
        Answer five quick questions and get a personalised score, category and estimated monthly leak — instantly.
      </p>
    </div>
  );
}
