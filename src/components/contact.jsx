import React from "react";

export const Contact = (props) => {
  const info = props.data || {};
  const line = (label, value, href) => (
    <div
      style={{
        padding: "18px 20px",
        borderRadius: 18,
        background: "rgba(255,255,255,0.9)",
        boxShadow: "0 8px 28px -10px rgba(0,0,0,0.2)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.6 }}>{label}</div>
      {href ? (
        <a
          href={href}
          style={{
            textDecoration: "none",
            color: "#1a1a1a",
            fontWeight: 700,
            letterSpacing: 0.2,
          }}
        >
          {value}
        </a>
      ) : (
        <div style={{ color: "#1a1a1a", fontWeight: 700 }}>{value}</div>
      )}
    </div>
  );

  return (
    <section
      id="contact"
      style={{ padding: "90px 0 110px", background: "transparent" }}
    >
      <div
        className="container"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 46,
            fontWeight: 900,
            letterSpacing: -0.3,
            color: "#111",
            marginBottom: 22,
          }}
        >
          Contact
        </h2>
        <p
          style={{
            margin: "0 auto 34px",
            maxWidth: 680,
            fontSize: 18,
            lineHeight: 1.6,
            color: "#222",
            opacity: 0.9,
          }}
        >
          We’d love to help. Reach us directly or request a call back.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
            alignItems: "stretch",
            justifyItems: "center",
          }}
        >
          {line(
            "Address",
            info.address || "Unit 12, Riverside Park, Leeds, LS2 7AB"
          )}
          {line(
            "Phone",
            info.phone || "+44 113 555 0198",
            `tel:${(info.phone || "+44 113 555 0198").replace(/\s+/g, "")}`
          )}
          {line(
            "Email",
            info.email || "hello@mrexpertclean.co.uk",
            `mailto:${info.email || "hello@mrexpertclean.co.uk"}`
          )}
        </div>

        {(info.facebook || info.twitter || info.youtube) && (
          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 14,
              justifyContent: "center",
            }}
          >
            {info.facebook && (
              <a
                href={info.facebook}
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 700 }}
              >
                Facebook
              </a>
            )}
            {info.twitter && (
              <a
                href={info.twitter}
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 700 }}
              >
                Twitter
              </a>
            )}
            {info.youtube && (
              <a
                href={info.youtube}
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 700 }}
              >
                YouTube
              </a>
            )}
          </div>
        )}
      </div>

      <div id="footer" style={{ marginTop: 36 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ margin: 0, opacity: 0.7 }}>&copy; 2025 Onekode.</p>
        </div>
      </div>
    </section>
  );
};
