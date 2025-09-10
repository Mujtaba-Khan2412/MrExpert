import React, { useMemo } from "react";
import Masonry from "../blocks/Components/Masonry/Masonry";

// Replaces the old static bootstrap grid with animated Masonry layout
export const Gallery = (props) => {
  const items = useMemo(() => {
    if (!props.data) return [];
    const heightPattern = [400, 300, 500, 450, 350, 550];
    return props.data.map((d, i) => ({
      id: `${i}`,
      img: d.largeImage || d.smallImage,
      url: d.largeImage || d.smallImage,
      height: heightPattern[i % heightPattern.length],
    }));
  }, [props.data]);

  return (
    <div
      id="portfolio"
      className="text-center"
      style={{
        background: "transparent",
        height: "100vh",
        paddingTop: "90px", // Space for navbar
        paddingBottom: "40px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1690px", // Increased from default container width (usually ~1200px)
          width: "130%", // 30% wider than normal
        }}
      >
        <div
          className="section-title"
          style={{ marginBottom: 32, flexShrink: 0 }}
        >
          <h2
            style={{
              fontSize: 52,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              color: "#111",
              marginBottom: 18,
            }}
          >
            Gallery
          </h2>
          <p
            style={{
              maxWidth: 820,
              margin: "0 auto",
              fontSize: 20,
              lineHeight: 1.6,
              fontWeight: 500,
              color: "#222",
              letterSpacing: 0.2,
            }}
          >
            A showcase of our recent work and transformations — crisp results,
            refreshed spaces, and the professional finish clients trust.
          </p>
        </div>
        <div style={{ flex: 1, overflow: "auto", paddingBottom: "20px" }}>
          {items.length ? (
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};
