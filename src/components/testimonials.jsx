import React from "react";

export const Testimonials = ({ data }) => {
  const testimonials = data || [];
  // Even grid layout (no rotation / overlap)
  const cardBaseStyle = {
    width: "100%",
    padding: "34px 40px 80px 40px",
    borderRadius: 20,
    background: "#fff",
    boxShadow: "0 8px 28px -6px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    fontSize: 17,
    lineHeight: 1.55,
    fontWeight: 500,
    color: "#1d1d21",
    letterSpacing: 0.2,
    minHeight: 260,
  };

  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 0 240px",
        position: "relative",
        background: "transparent",
      }}
    >
      <div
        className="container"
        style={{ position: "relative", maxWidth: 1280 }}
      >
        <div className="section-title text-center" style={{ marginBottom: 90 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 50,
              fontWeight: 900,
              letterSpacing: "-0.5px",
              color: "#111",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              maxWidth: 780,
              margin: "18px auto 0",
              fontSize: 19,
              lineHeight: 1.55,
              fontWeight: 500,
              color: "#222",
            }}
          >
            Genuine feedback from spaces we've revived and refreshed.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 1180,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 38,
              alignItems: "stretch",
            }}
          >
            {testimonials.length === 0 && (
              <div
                style={{
                  ...cardBaseStyle,
                  margin: "0 auto",
                }}
              >
                <div style={{ fontSize: 42, lineHeight: 1, opacity: 0.2 }}>
                  ❝
                </div>
                <p style={{ margin: 0 }}>Loading testimonials...</p>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    opacity: 0.7,
                  }}
                >
                  Please wait
                </div>
              </div>
            )}
            {testimonials.slice(0, 6).map((t, idx) => (
              <div key={t.name + idx} style={{ ...cardBaseStyle }}>
                <div
                  style={{
                    fontSize: 42,
                    lineHeight: 1,
                    opacity: 0.18,
                    position: "absolute",
                    top: 18,
                    left: 28,
                  }}
                >
                  ❝
                </div>
                <p style={{ margin: 0, position: "relative" }}>
                  {t.text.replace(/^"|"$/g, "")}
                </p>
                <div
                  style={{
                    marginTop: 18,
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 0.3,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: 16,
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 4px 18px -4px rgba(0,0,0,0.3)",
                    border: "3px solid #fff",
                    background: "#eee",
                  }}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
