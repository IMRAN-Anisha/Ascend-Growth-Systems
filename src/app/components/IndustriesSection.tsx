import { useEffect, useRef } from "react";

const INDUSTRIES = [
  { name: "Day Spas", photoId: "1540555700478-4be289fbecef", color: "#4A7C6F" },
  { name: "Gyms & Studios", photoId: "1571902943202-507ec2618e8f", color: "#2D5FA0" },
  { name: "Cafés", photoId: "1554118811-1e0d58224f24", color: "#7A5C2A" },
  { name: "Restaurants", photoId: "1517248135467-4c7edcad34c4", color: "#6B3A2A" },
  { name: "Hair & Beauty", photoId: "1560066984-138dadb4c035", color: "#6A3F7A" },
  { name: "Boutique Stores", photoId: "1441986300917-64674bd600d8", color: "#3A6458" },
];

export function IndustriesSection() {
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    INDUSTRIES.forEach((ind, i) => {
      const url = `https://images.unsplash.com/photo-${ind.photoId}?auto=format&fit=crop&w=500&q=75`;
      const img = new Image();
      img.onload = () => {
        if (imgRefs.current[i]) {
          imgRefs.current[i]!.style.backgroundImage = `url("${url}")`;
        }
      };
      img.src = url;
    });
  }, []);

  return (
    <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 52px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#6B7280",
            marginBottom: 16,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Built for hospitality & local service
          </span>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "#111827",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: "0 0 14px",
          }}>
            One system. Every kind of front desk.
          </h2>
          <p style={{
            fontSize: "1rem",
            color: "#6B7280",
            lineHeight: 1.6,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            margin: 0,
          }}>
            Whether guests book a table, a class, a treatment or just walk in — the leak is the same, and so is the fix.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 14,
        }} className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "3 / 4",
                cursor: "default",
              }}
            >
              <div
                ref={(el) => { imgRefs.current[i] = el; }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(160deg, ${ind.color}, #0D1528)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.4s ease",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.72) 100%)",
              }} />
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "12px 14px",
                color: "#FFFFFF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}>
                {ind.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .ind-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 520px) { .ind-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
