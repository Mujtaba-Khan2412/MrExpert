import React, { useEffect, useRef } from "react";
import cleanerImg from "../img/cleaner.png"; // image resides in src/img

export const About = (props) => {
  const aboutRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const about = aboutRef.current;
    const cursor = cursorRef.current;
    if (!about || !cursor) return;

    const handleMouseMove = (e) => {
      const rect = about.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor.style.opacity = 1;
    };
    const handleMouseLeave = () => {
      cursor.style.opacity = 0;
    };
    about.addEventListener("mousemove", handleMouseMove);
    about.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      about.removeEventListener("mousemove", handleMouseMove);
      about.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "40px 0",
        background: "transparent",
      }}
    >
      {/* Custom cursor glow */}
      <div
        ref={cursorRef}
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          boxShadow: "0 0 32px 8px #fff",
          filter: "blur(2px)",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.2s",
          zIndex: 2,
        }}
      ></div>
      <div
        className="container"
        style={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(235,194,44,0.20), rgba(235,194,44,0.10))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: 40,
          boxShadow: "0 8px 40px -8px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,255,255,0.35)",
          padding: 0,
          display: "flex",
          alignItems: "center",
          minHeight: 360,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 320,
            padding: 24,
          }}
        >
          <img
            src={cleanerImg}
            alt="Professional cleaner"
            style={{
              width: 220,
              height: "auto",
              borderRadius: 24,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
              background: "#fff",
              padding: 12,
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            flex: 2,
            padding: 32,
            color: "#222",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 12,
              color: "#222",
            }}
          >
            About Us
          </h2>
          <p style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.6 }}>
            {props.data ? props.data.paragraph : "loading..."}
          </p>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 24,
              marginBottom: 10,
              color: "#222",
            }}
          >
            Why Choose Us?
          </h3>
          <div style={{ display: "flex", gap: 32 }}>
            <ul style={{ flex: 1, fontSize: 16, paddingLeft: 18, margin: 0 }}>
              {props.data
                ? props.data.Why.map((d, i) => (
                    <li key={`${d}-${i}`} style={{ marginBottom: 8 }}>
                      {d}
                    </li>
                  ))
                : "loading"}
            </ul>
            <ul style={{ flex: 1, fontSize: 16, paddingLeft: 18, margin: 0 }}>
              {props.data
                ? props.data.Why2.map((d, i) => (
                    <li key={`${d}-${i}`} style={{ marginBottom: 8 }}>
                      {d}
                    </li>
                  ))
                : "loading"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
