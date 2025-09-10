import React from "react";
const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [atTop, setAtTop] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setAtTop(y < 8);
      const goingDown = y > lastY.current + 4;
      const goingUp = y < lastY.current - 4;
      if (!open) {
        if (goingDown) setHidden(true);
        else if (goingUp) setHidden(false);
      }
      lastY.current = y;
    };
    const onResize = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const linkBase = {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
    textDecoration: "none",
    padding: "10px 22px 11px",
    borderRadius: 28,
    transition:
      "background 0.35s, color 0.35s, box-shadow 0.35s, transform 0.4s cubic-bezier(.4,2,.55,1.3)",
    margin: "2px 2px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    boxShadow: "0 2px 10px -4px rgba(0,0,0,0.35)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "inline-block",
  };

  return (
    <>
      {/* Floating Contact Module */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 150,
          background:
            "linear-gradient(135deg, rgba(20,20,28,0.92), rgba(26,26,34,0.88))",
          borderRadius: "20px",
          padding: "16px 18px",
          backdropFilter: "blur(16px) saturate(160%)",
          WebkitBackdropFilter: "blur(16px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 8px 32px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          fontFamily: "Montserrat, sans-serif",
          minWidth: "56px",
        }}
      >
        {/* Social Media Icons */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <a
            href="mailto:mrexpertcarpetcleaning@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #ea4335, #c5221f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 12px -4px rgba(234,67,53,0.4)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px -4px rgba(234,67,53,0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px -4px rgba(234,67,53,0.4)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.492-1.667 1.205-2.09L12 9.545l10.795-6.178A1.636 1.636 0 0 1 24 5.457z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/mrexpertcarpet?igsh=MXU3emJwNzdyZnE3dg=="
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #e4405f, #c13584, #833ab4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 12px -4px rgba(228,64,95,0.4)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px -4px rgba(228,64,95,0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px -4px rgba(228,64,95,0.4)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/1GzTBBsodx/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #1877f2, #166fe5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 12px -4px rgba(24,119,242,0.4)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px -4px rgba(24,119,242,0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px -4px rgba(24,119,242,0.4)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        {/* Phone Number */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #10b981, #059669)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "16px",
              boxShadow: "0 4px 12px -4px rgba(16,185,129,0.4)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <a
            href="tel:+1234567890"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#10b981";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#fff";
            }}
          >
            +44 7920 366062
          </a>
        </div>
      </div>

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
          padding: atTop ? 0 : "18px",
          transform: hidden ? "translateY(-110%)" : "translateY(0)",
          transition: "transform .45s ease, padding .35s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 14 : 48,
            background: atTop
              ? "linear-gradient(135deg, rgba(20,20,28,0.92), rgba(26,26,34,0.9))"
              : "linear-gradient(135deg, rgba(20,20,28,0.78), rgba(26,26,34,0.72))",
            boxShadow:
              "0 4px 24px -6px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
            borderRadius: atTop ? 0 : 40,
            padding: isMobile
              ? atTop
                ? "12px 14px"
                : "12px 18px"
              : atTop
              ? "18px 28px"
              : "20px 56px 20px 40px",
            backdropFilter: "blur(22px) saturate(180%)",
            WebkitBackdropFilter: "blur(22px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.16)",
            pointerEvents: "auto",
            minWidth: 320,
            maxWidth: atTop ? "100%" : 1320,
            width: "100%",
            transition:
              "border-radius .35s ease, max-width .35s ease, padding .35s ease, background .35s ease, gap .35s ease",
            fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flex: "0 0 auto",
            }}
          >
            <img
              src="/img/icon.png"
              alt="Logo"
              style={{
                width: isMobile ? 38 : 44,
                height: isMobile ? 38 : 44,
                borderRadius: 12,
                background: "#fff",
                boxShadow: "0 4px 12px -4px rgba(0,0,0,0.4)",
              }}
            />
            <a
              href="#header"
              style={{
                color: "#fff",
                fontSize: isMobile ? "1.18rem" : "1.55rem",
                fontWeight: 800,
                textDecoration: "none",
                letterSpacing: ".02em",
                padding: isMobile ? "2px 4px" : "0 8px",
                borderRadius: 20,
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              Mr Expert Cleaner
            </a>
          </div>
          {!isMobile && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={linkBase}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(155deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08))";
                    e.currentTarget.style.boxShadow =
                      "0 6px 22px -6px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px -4px rgba(0,0,0,0.35)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          {isMobile && (
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              style={{
                background:
                  "linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                width: 46,
                height: 46,
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 20,
                marginLeft: "auto",
                boxShadow: "0 4px 16px -4px rgba(0,0,0,0.5)",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 21,
                  height: 13,
                  position: "relative",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      height: 2.6,
                      borderRadius: 2,
                      background: "#fff",
                      top: i === 0 ? 0 : i === 1 ? 5 : 10,
                      transformOrigin: "center",
                      transition: "transform .45s ease, opacity .35s ease",
                      transform:
                        open && i === 0
                          ? "translateY(5px) rotate(45deg)"
                          : open && i === 2
                          ? "translateY(-5px) rotate(-45deg)"
                          : "none",
                      opacity: open && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </span>
            </button>
          )}
          {isMobile && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                padding: open ? "12px 12px 18px" : 0,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                overflow: "hidden",
                maxHeight: open ? 420 : 0,
                transition:
                  "max-height .55s cubic-bezier(.46,.08,.26,.98), padding .4s ease",
                background:
                  "linear-gradient(140deg,rgba(20,20,28,0.95),rgba(26,26,34,0.9))",
                border: open
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(255,255,255,0.05)",
                borderRadius: 32,
                boxShadow: open
                  ? "0 18px 42px -12px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.08)"
                  : "0 6px 18px -8px rgba(0,0,0,0.5)",
                backdropFilter: "blur(26px) saturate(180%)",
                WebkitBackdropFilter: "blur(26px) saturate(180%)",
                marginTop: 12,
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* hide scrollbar visually */}
              <style>{`@media (max-width:900px){ nav div[style*='position: relative'] > div[style*='position: absolute']::-webkit-scrollbar{display:none;} }`}</style>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    ...linkBase,
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.05rem",
                    padding: "12px 16px 13px",
                    margin: 0,
                    background:
                      "linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))",
                    boxShadow: "0 2px 8px -4px rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              {open && (
                <div
                  style={{
                    marginTop: 10,
                    padding: "10px 14px 6px",
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    opacity: 0.55,
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  Navigate
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
