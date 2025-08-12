import React from "react";

export const Services = (props) => {
  const services = props.data || [];

  // Simple placeholder SVG icons (no external libraries) used if d.icon is missing
  const fallbackIcons = [
    // Vacuum cleaner
    <svg viewBox="0 0 64 64" width={48} height={48} aria-hidden="true">
      <path
        d="M18 42V26a10 10 0 0 1 20 0v16"
        fill="none"
        stroke="#222"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="12"
        y="42"
        width="32"
        height="12"
        rx="6"
        fill="rgba(255,255,255,0.6)"
        stroke="#222"
        strokeWidth="2"
      />
      <path
        d="M38 30h10v10M48 40v8"
        fill="none"
        stroke="#222"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>,
    // Spray bottle
    <svg viewBox="0 0 64 64" width={48} height={48} aria-hidden="true">
      <path
        d="M30 10h10l4 6v6H26v-6z"
        fill="rgba(255,255,255,0.6)"
        stroke="#222"
        strokeWidth="2"
      />
      <path
        d="M26 22h18l2 6-4 22a6 6 0 0 1-6 5h-2a6 6 0 0 1-6-5l-4-22z"
        fill="none"
        stroke="#222"
        strokeWidth="3"
      />
      <circle cx="40" cy="14" r="2" fill="#222" />
    </svg>,
    // Window squeegee
    <svg viewBox="0 0 64 64" width={48} height={48} aria-hidden="true">
      <path
        d="M10 18h44l-4 8H14z"
        fill="rgba(255,255,255,0.6)"
        stroke="#222"
        strokeWidth="2"
      />
      <path
        d="M32 26v22M28 48h8"
        stroke="#222"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>,
    // Broom
    <svg viewBox="0 0 64 64" width={48} height={48} aria-hidden="true">
      <path
        d="M42 6l-4 4 6 6 4-4z"
        fill="rgba(255,255,255,0.6)"
        stroke="#222"
        strokeWidth="2"
      />
      <path
        d="M30 18l6-6 10 10-6 6z"
        fill="none"
        stroke="#222"
        strokeWidth="3"
      />
      <path
        d="M30 18L14 50l8 4 12-24 10 10-4 8 8 4 6-12z"
        fill="none"
        stroke="#222"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return (
    <div
      id="services"
      className="text-center"
      style={{
        background: "transparent",
        position: "relative",
        padding: "60px 0",
      }}
    >
      <div
        className="container"
        style={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(235,194,44,0.20), rgba(235,194,44,0.10))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: 40,
          padding: "50px 42px 56px",
          boxShadow: "0 8px 40px -8px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,255,255,0.35)",
        }}
      >
        <div className="section-title" style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: -1,
              marginBottom: 16,
              color: "#222",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              maxWidth: 720,
              margin: "0 auto",
              fontSize: 18,
              lineHeight: 1.55,
              color: "#333",
            }}
          >
            Tailored professional cleaning solutions delivered with precision,
            consistency, and a sparkle that elevates every space.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 32,
          }}
        >
          {services.length ? (
            services.map((d, i) => {
              const iconContent = d.icon ? (
                <i
                  className={d.icon}
                  style={{ fontSize: 48, color: "#222" }}
                  aria-hidden="true"
                ></i>
              ) : (
                fallbackIcons[i % fallbackIcons.length]
              );
              return (
                <div
                  key={`${d.name || "service"}-${i}`}
                  style={{
                    position: "relative",
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.6)",
                    borderRadius: 28,
                    padding: "30px 26px 34px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    boxShadow: "0 4px 20px -4px rgba(0,0,0,0.15)",
                    transition:
                      "transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, background .3s",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px -10px rgba(0,0,0,0.28)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px -4px rgba(0,0,0,0.15)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.55)";
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 24,
                      background: "linear-gradient(135deg,#ebc22c,#f1d86e)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 18px -4px rgba(235,194,44,0.65)",
                    }}
                    aria-hidden="true"
                  >
                    {iconContent}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        margin: "8px 0 10px",
                        color: "#222",
                      }}
                    >
                      {d.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 15.5,
                        lineHeight: 1.55,
                        margin: 0,
                        color: "#333",
                      }}
                    >
                      {d.text}
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 60%)",
                      mixBlendMode: "overlay",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              );
            })
          ) : (
            <div style={{ gridColumn: "1 / -1", opacity: 0.6 }}>
              Loading services...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
