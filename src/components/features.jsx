import React from "react";

// Refactored: replaces awkward horizontal drag carousel with a clean, responsive, animated feature grid.
// - Auto responsive columns (1 / 2 / 4)
// - Glass / soft card styling consistent with rest of site
// - Light entrance animation & hover lift
// - Accessible semantic structure
export const Features = ({ data }) => {
  const features = data || [];

  return (
    <section
      id="features"
      style={{
        width: "100%",
        background: "transparent",
        padding: "90px 0 110px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 70 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 54,
              fontWeight: 900,
              letterSpacing: -0.5,
              background: "linear-gradient(90deg,#2d2100,#6a5200)",
              WebkitBackgroundClip: "text",
              color: "#2d2100",
            }}
          >
            Features
          </h2>
          <p
            style={{
              margin: "20px auto 0",
              maxWidth: 780,
              fontSize: 19,
              lineHeight: 1.55,
              fontWeight: 500,
              color: "#3b2d00",
              opacity: 0.92,
            }}
          >
            Why homes, offices and managing agents across the UK trust our
            process.
          </p>
        </header>
        <div
          style={{
            display: "grid",
            gap: 34,
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          }}
        >
          {features.map((f, i) => (
            <article
              key={f.title + i}
              style={{
                position: "relative",
                background:
                  "linear-gradient(145deg,rgba(255,255,255,0.85),rgba(255,254,238,0.78))",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,214,0,0.35)",
                boxShadow:
                  "0 8px 26px -6px rgba(0,0,0,0.15), 0 2px 8px -2px rgba(0,0,0,0.08)",
                borderRadius: 28,
                padding: "44px 34px 48px",
                overflow: "hidden",
                transition:
                  "transform .55s cubic-bezier(.16,.84,.24,1), box-shadow .55s, background .6s",
                animation: `featFade .8s ease ${(i * 90) / 1000}s both`,
              }}
              tabIndex={0}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 28% 18%,rgba(255,230,115,0.55),transparent 60%)",
                  opacity: 0.6,
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 26,
                  fontSize: 38,
                  color: "#2d2100",
                  background:
                    "linear-gradient(135deg,#ffe259,#f7d000 55%,#fff6c4)",
                  boxShadow:
                    "0 6px 22px -6px rgba(255,214,0,.55), 0 0 0 1px rgba(255,225,90,0.5)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {f.icon && <i className={f.icon} style={{ fontSize: 34 }} />}
              </div>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: 0.4,
                  color: "#2d2100",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 16.5,
                  lineHeight: 1.55,
                  fontWeight: 500,
                  color: "#3f3100",
                  opacity: 0.95,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {f.text}
              </p>
            </article>
          ))}
          {features.length === 0 && (
            <div style={{ fontSize: 16, opacity: 0.6 }}>Loading features…</div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes featFade { from {opacity:0; transform:translateY(28px) scale(.96);} to {opacity:1; transform:translateY(0) scale(1);} }
        #features article:focus-visible { outline: 3px solid #ffd600; outline-offset: 3px; }
        #features article:hover { transform: translateY(-10px); box-shadow:0 18px 34px -10px rgba(0,0,0,0.28),0 4px 10px -2px rgba(0,0,0,0.18); }
        @media (min-width: 1200px) { #features h2 { font-size:58px; } }
        @media (max-width: 720px) {
          #features h2 { font-size:42px; }
          #features header p { font-size:18px; }
        }
        @media (max-width: 520px) {
          #features h2 { font-size:38px; }
        }
      `}</style>
    </section>
  );
};
