import React, { useCallback } from "react";
import iconImg from "../img/icon.png";
import ukFlag from "../img/flag-uk.svg";
import Iridescence from "../blocks/Backgrounds/Iridescence/Iridescence";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";

export const Header = (props) => {
  const handleAnimationComplete = () => {};
  return (
    <header
      id="header"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Iridescence
          color={[0.5, 0.5, 0]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
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
        maxWidth: 1500,
        margin: "0 auto",
        padding: "0 clamp(1rem,4vw,3rem)",
        display: "flex",
        gap: 64,
        alignItems: "stretch",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          flex: "1 1 560px",
          maxWidth: 760,
          display: "flex",
          flexDirection: "column",
          gap: 26,
          background:
            "linear-gradient(135deg, rgba(235,194,44,0.20), rgba(235,194,44,0.10))",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          padding: "42px 48px 48px",
          borderRadius: 52,
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            marginBottom: 8,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextPressure
              text="UK's Number 1 Cleaners!"
              alpha={false}
              stroke={true}
              width={false}
              weight={true}
              italic={true}
              textColor="#a86d04"
              strokeColor="#f1c226"
              minFontSize={32}
              shrinkWrap={true}
              fixedFontSize={48}
              singleLine={true}
            />
          </div>
          <p
            style={{
              fontSize: "clamp(1.05rem,1.55vw,1.35rem)",
              fontWeight: 600,
              margin: "20px 0 8px",
              color: "#222",
              letterSpacing: 0.3,
              textAlign: "center",
              width: "100%",
            }}
          >
            All your carpet cleaning needs in one place
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={labelStyle} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Name"
              required
              style={{ ...fieldBase, fontSize: 15 }}
            />
          </div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 300px" }}>
              <label style={labelStyle} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{ ...fieldBase, fontSize: 15 }}
              />
            </div>
            <div style={{ flex: "1 1 260px", display: "flex", gap: 12 }}>
              <div style={{ position: "relative", flex: "0 0 120px" }}>
                <label style={labelStyle} htmlFor="country">
                  Country
                </label>
                <div
                  style={{
                    ...fieldBase,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 20px",
                    cursor: "default",
                    userSelect: "none",
                  }}
                >
                  <img
                    src={ukFlag}
                    alt="UK flag"
                    style={{
                      width: 30,
                      height: 20,
                      objectFit: "cover",
                      borderRadius: 3,
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
                    }}
                  />
                  <span style={{ fontWeight: 600, letterSpacing: 0.5 }}>
                    +44
                  </span>
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
                  style={{ ...fieldBase, fontSize: 15 }}
                />
              </div>
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
              style={{ ...fieldBase, color: "#444", fontSize: 15 }}
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
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 220px" }}>
              <label style={labelStyle} htmlFor="rooms">
                No of Room
              </label>
              <select
                id="rooms"
                name="rooms"
                defaultValue=""
                style={{ ...fieldBase, color: "#444", fontSize: 15 }}
              >
                <option value="" disabled>
                  No of Room
                </option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: "1 1 220px" }}>
              <label style={labelStyle} htmlFor="baths">
                No of Bathroom
              </label>
              <select
                id="baths"
                name="baths"
                defaultValue=""
                style={{ ...fieldBase, color: "#444", fontSize: 15 }}
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
          style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 8 }}
        >
          <button
            type="submit"
            style={{
              flex: "1 1 320px",
              border: "1px solid #d8b43d",
              background: "linear-gradient(145deg,#ebc22c,#d4a800)",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: 16,
              padding: "24px 38px",
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
              flex: "1 1 240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 18,
              color: "#111",
              background: "rgba(255,255,255,0.85)",
              border: "1px solid #111",
              borderRadius: 90,
              padding: "24px 38px",
            }}
          >
            833-866-6161
          </a>
        </div>
        {data && (
          <p style={{ margin: "8px 4px 0", fontSize: 14, opacity: 0.65 }}>
            {data.paragraph}
          </p>
        )}
      </form>
      <div
        style={{
          flex: "1 1 480px",
          maxWidth: 620,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          minHeight: 420,
          background:
            "linear-gradient(135deg, rgba(235,194,44,0.22), rgba(235,194,44,0.10))",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderRadius: 52,
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.25)",
          overflow: "hidden",
          padding: 40,
        }}
      >
        <img
          src={iconImg}
          alt="Cleaning service icon"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.35))",
          }}
        />
      </div>
    </div>
  );
};
// End of file
