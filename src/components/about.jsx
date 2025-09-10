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
        padding: "60px 0 70px",
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
        className="about-shell"
        style={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(235,194,44,0.20), rgba(235,194,44,0.10))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: 40,
          boxShadow: "0 8px 40px -8px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,255,255,0.35)",
          padding: "0 14px 0 0",
          display: "flex",
          alignItems: "stretch",
          minHeight: 360,
          overflow: "hidden",
        }}
      >
        <div
          className="about-image-wrap"
          style={{
            flex: "0 0 38%",
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
              width: "clamp(160px,40vw,260px)",
              height: "auto",
              borderRadius: 28,
              boxShadow: "0 8px 32px -6px rgba(0,0,0,0.18)",
              background: "#fff",
              padding: 14,
              objectFit: "contain",
            }}
          />
        </div>
        <div
          className="about-content"
          style={{
            flex: 1,
            padding: "40px clamp(1.25rem,3vw,46px) 42px",
            color: "#222",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.95rem,3.2vw,2.5rem)",
              margin: "0 0 4px",
              letterSpacing: "-0.5px",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem,1.1rem,1.15rem)",
              margin: "0 0 20px",
              lineHeight: 1.6,
              maxWidth: 920,
            }}
          >
            {props.data ? props.data.paragraph : "loading..."}
          </p>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.35rem,2.2vw,1.6rem)",
              margin: "4px 0 10px",
            }}
          >
            Why Choose Us?
          </h3>
          <div className="about-lists" style={{ display: "flex", gap: 32 }}>
            <ul
              style={{
                flex: 1,
                fontSize: 16,
                paddingLeft: 18,
                margin: 0,
                listStyle: "disc",
              }}
            >
              {props.data
                ? props.data.Why.map((d, i) => (
                    <li key={`${d}-${i}`} style={{ marginBottom: 8 }}>
                      {d}
                    </li>
                  ))
                : "loading"}
            </ul>
            <ul
              style={{
                flex: 1,
                fontSize: 16,
                paddingLeft: 18,
                margin: 0,
                listStyle: "disc",
              }}
            >
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
      <style>{`
        /* Responsive adjustments for About section */
        @media (max-width: 1080px) {
          #about .about-shell { flex-direction: column; padding: 0 0 10px; }
          #about .about-image-wrap { padding: 34px 34px 0; flex: 0 0 auto; }
          #about .about-content { padding: 18px clamp(1rem,5vw,2.1rem) 44px; }
        }
        @media (max-width: 780px) {
          #about { padding: 48px 0 64px; }
          #about .about-shell { border-radius: 34px; }
          #about .about-image-wrap { padding: 28px 28px 0; }
          #about .about-content { padding: 26px clamp(1rem,6vw,1.75rem) 40px; }
          #about .about-lists { flex-direction: column; gap: 14px; }
          #about .about-content h2 { font-size: clamp(1.9rem,7.2vw,2.35rem); }
          #about .about-content h3 { font-size: clamp(1.2rem,5.5vw,1.45rem); }
          #about .about-content p { font-size: 0.98rem; }
        }
        @media (max-width: 520px) {
          #about { padding: 44px 0 60px; }
          #about .about-shell { border-radius: 30px; }
          #about .about-image-wrap img { width: clamp(150px,60vw,220px); padding: 12px; }
          #about .about-content { padding: 24px 20px 38px; }
          #about .about-lists ul { font-size: 15px; }
          #about .about-content p { line-height: 1.55; }
        }
        @media (hover:none) and (pointer:coarse) {
          /* Hide the custom cursor glow on touch devices */
          #about div[style*='pointer-events: none'][style*='width: 120px'] { display:none !important; }
        }
      `}</style>
    </div>
  );
};
