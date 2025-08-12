import logo from "../img/icon.png";
import React from "react";
const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  // Track scroll to hide/show and switch styles
  const [atTop, setAtTop] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setAtTop(y < 8);
      const goingDown = y > lastY.current + 4;
      const goingUp = y < lastY.current - 4;
      if (goingDown) setHidden(true);
      else if (goingUp) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 200,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        padding: atTop ? 0 : "24px",
        transform: hidden ? "translateY(-110%)" : "translateY(0)",
        transition: "transform .45s ease, padding .35s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          background: atTop
            ? "linear-gradient(135deg, rgba(20,20,28,0.92), rgba(26,26,34,0.9))"
            : "linear-gradient(135deg, rgba(20,20,28,0.78), rgba(26,26,34,0.72))",
          boxShadow:
            "0 4px 24px -6px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
          borderRadius: atTop ? 0 : 40,
          padding: atTop ? "18px 28px" : "20px 56px 20px 40px",
          backdropFilter: "blur(22px) saturate(180%)",
          WebkitBackdropFilter: "blur(22px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.16)",
          pointerEvents: "auto",
          minWidth: 320,
          maxWidth: atTop ? "100%" : 1320,
          width: "100%",
          transition:
            "border-radius .35s ease, max-width .35s ease, padding .35s ease, background .35s ease",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        <img
          src="/img/icon.png"
          alt="Logo"
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            marginRight: 10,
            background: "#fff",
            boxShadow: "0 4px 12px -4px rgba(0,0,0,0.4)",
          }}
        />
        <a
          href="#header"
          style={{
            color: "#fff",
            fontSize: "1.55rem",
            fontWeight: 800,
            textDecoration: "none",
            letterSpacing: ".03em",
            marginRight: 8,
            padding: "0 8px",
            borderRadius: 24,
            transition: "background 0.35s, color 0.35s",
            userSelect: "none",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: "bold",
          }}
        >
          Mr Expert Cleaner
        </a>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                padding: "10px 22px 11px",
                borderRadius: 28,
                transition:
                  "background 0.35s, color 0.35s, box-shadow 0.35s, transform 0.4s cubic-bezier(.4,2,.55,1.3)",
                margin: "2px 2px",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                boxShadow: "0 2px 10px -4px rgba(0,0,0,0.35)",
                fontWeight: 600,
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(155deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08))";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow =
                  "0 6px 22px -6px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px -4px rgba(0,0,0,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
