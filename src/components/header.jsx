import React, { useCallback } from "react";
import iconImg from "../img/icon.png";
import ukFlag from "../img/flag-uk.svg";
// Iridescence background removed

export const Header = (props) => {
  const handleAnimationComplete = () => {};
  return (
    <header
      id="header"
      style={{
        position: "relative",
        overflow: "hidden",
        // Remove nav offset to close the gap
        "--nav-offset": "0px",
        paddingTop: "var(--nav-offset)",
        scrollMarginTop: "90px", // Keep scroll margin for anchor links
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff", // Clean white background
      }}
    >
      <HeaderContent
        data={props.data}
        onAnimationComplete={handleAnimationComplete}
      />
    </header>
  );
};

const HeaderContent = ({ data, onAnimationComplete }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Quote form submitted", Object.fromEntries(formData));
  }, []);

  const fieldBase = {
    width: "100%",
    padding: "18px 26px",
    borderRadius: 46,
    border: "1px solid #d8b43d",
    outline: "none",
    fontSize: 16,
    lineHeight: 1.2,
    fontWeight: 500,
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.04) inset",
  };

  const labelStyle = { position: "absolute", left: -9999, top: -9999 };

  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left Half - Title Text */}
      <div
        style={{
          flex: "1",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          textAlign: "right",
          paddingRight: "100px", // Increased from 60px to move text more to the left
          paddingLeft: "40px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-1px",
            margin: 0,
            color: "#000000", // Black text color
            textShadow: "none", // Remove text shadow
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "24px",
          }}
        >
          The Best Cleaners in the UK!
        </h1>
        <p
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
            fontWeight: 600,
            margin: 0,
            color: "#000000 !important", // Force black text color
            letterSpacing: "0.5px",
            lineHeight: 1.4,
            maxWidth: "500px",
            textShadow: "none", // Remove any shadow
            WebkitTextFillColor: "#000000", // Force black for webkit
            opacity: 1, // Ensure full opacity
          }}
        >
          All your carpet cleaning needs in one place
        </p>
      </div>

      {/* Right Half - Logo with Form Overlay */}
      <div
        style={{
          flex: "1",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.05)",
        }}
      >
        {/* Logo Image - Full opacity and height */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <img
            src={iconImg}
            alt="Cleaning service icon"
            style={{
              height: "100%", // Full height
              width: "auto", // Maintain aspect ratio
              objectFit: "contain",
              filter: "none", // Remove shadow
            }}
          />
        </div>

        {/* Form Overlay */}
        <form
          onSubmit={handleSubmit}
          style={{
            position: "relative",
            zIndex: 2,
            width: "90%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            background:
              "linear-gradient(135deg, rgba(235,194,44,0.25), rgba(235,194,44,0.15))",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            padding: "40px 35px 45px",
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.4)",
            boxShadow: "0 15px 50px -10px rgba(0,0,0,0.4)",
          }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#1d1500",
              margin: "0 0 16px 0",
              textAlign: "center",
              textShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            Get Your Quote
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={labelStyle} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                required
                style={{ ...fieldBase, fontSize: 14, padding: "14px 20px" }}
              />
            </div>

            <div>
              <label style={labelStyle} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{ ...fieldBase, fontSize: 14, padding: "14px 20px" }}
              />
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: "0 0 100px" }}>
                <label style={labelStyle} htmlFor="country">
                  Country
                </label>
                <div
                  style={{
                    ...fieldBase,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    cursor: "default",
                    userSelect: "none",
                    fontSize: 14,
                  }}
                >
                  <img
                    src={ukFlag}
                    alt="UK flag"
                    style={{
                      width: 24,
                      height: 16,
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
                    }}
                  />
                  <span style={{ fontWeight: 600, fontSize: 13 }}>+44</span>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  style={{ ...fieldBase, fontSize: 14, padding: "14px 20px" }}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle} htmlFor="type">
                Type of Cleaning
              </label>
              <select
                id="type"
                name="type"
                defaultValue=""
                required
                style={{
                  ...fieldBase,
                  color: "#444",
                  fontSize: 14,
                  padding: "14px 20px",
                }}
              >
                <option value="" disabled>
                  Type of Cleaning
                </option>
                <option>Office Deep Clean</option>
                <option>Carpet & Upholstery</option>
                <option>Post-Construction</option>
                <option>Disinfection Service</option>
                <option>Floor Care & Buffing</option>
              </select>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle} htmlFor="rooms">
                  No of Room
                </label>
                <select
                  id="rooms"
                  name="rooms"
                  defaultValue=""
                  style={{
                    ...fieldBase,
                    color: "#444",
                    fontSize: 14,
                    padding: "14px 20px",
                  }}
                >
                  <option value="" disabled>
                    No of Room
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle} htmlFor="baths">
                  No of Bathroom
                </label>
                <select
                  id="baths"
                  name="baths"
                  defaultValue=""
                  style={{
                    ...fieldBase,
                    color: "#444",
                    fontSize: 14,
                    padding: "14px 20px",
                  }}
                >
                  <option value="" disabled>
                    No of Bathroom
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 8,
              flexDirection: "column",
            }}
          >
            <button
              type="submit"
              style={{
                border: "1px solid #d8b43d",
                background: "linear-gradient(145deg,#ebc22c,#d4a800)",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: 1,
                fontSize: 15,
                padding: "18px 32px",
                borderRadius: 90,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              GET A QUOTE
            </button>
            <a
              href="tel:8338666161"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                color: "#111",
                background: "rgba(255,255,255,0.85)",
                border: "1px solid #111",
                borderRadius: 90,
                padding: "18px 32px",
              }}
            >
              833-866-6161
            </a>
          </div>

          {data && (
            <p
              style={{
                margin: "8px 4px 0",
                fontSize: 12,
                opacity: 0.65,
                textAlign: "center",
              }}
            >
              {data.paragraph}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

// Mobile responsive styles for the new split layout
if (
  typeof document !== "undefined" &&
  !document.getElementById("header-mobile-styles")
) {
  const styleEl = document.createElement("style");
  styleEl.id = "header-mobile-styles";
  styleEl.textContent = `
    @media (max-width: 1024px) {
      #header > div { flex-direction: column !important; }
      #header > div > div:first-child { 
        padding: 40px 20px !important; 
        text-align: center !important; 
        align-items: center !important;
      }
      #header > div > div:first-child h1 { 
        text-align: center !important; 
        margin-bottom: 16px !important;
      }
      #header > div > div:last-child form {
        width: 95% !important;
        max-width: 450px !important;
        padding: 30px 25px 35px !important;
      }
    }
    @media (max-width: 768px) {
      #header { height: auto !important; min-height: 100vh !important; }
      #header > div > div:first-child { padding: 30px 15px !important; }
      #header > div > div:first-child h1 { font-size: clamp(2rem, 7vw, 3rem) !important; }
      #header > div > div:last-child form {
        padding: 25px 20px 30px !important;
        gap: 14px !important;
      }
      #header > div > div:last-child form input,
      #header > div > div:last-child form select {
        padding: 12px 18px !important;
        font-size: 13px !important;
      }
      #header > div > div:last-child form button {
        padding: 16px 28px !important;
        font-size: 14px !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
