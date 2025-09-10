import React, { useState, useRef, useEffect } from "react";

export const Locations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // UK cities data with placeholder images (you can replace with actual city images)
  const locations = [
    {
      id: 1,
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Manchester",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Birmingham",
      image:
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Liverpool",
      image:
        "https://images.unsplash.com/photo-1585468274952-66d93161d222?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Leeds",
      image:
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Bristol",
      image:
        "https://images.unsplash.com/photo-1588177830421-34ac45b74504?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Edinburgh",
      image:
        "https://images.unsplash.com/photo-1571457794524-b85db5e3a7da?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Cardiff",
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Newcastle",
      image:
        "https://images.unsplash.com/photo-1625675648650-1c517e2b3be2?w=400&h=300&fit=crop",
    },
    {
      id: 10,
      name: "Glasgow",
      image:
        "https://images.unsplash.com/photo-1570117276076-e47bdcc26bd8?w=400&h=300&fit=crop",
    },
  ];

  const cardsToShow = 3;
  const maxIndex = Math.max(0, locations.length - cardsToShow);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay, maxIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="locations"
      style={{
        padding: "80px 0 100px",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
        }}
      >
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              color: "#111",
              marginBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Our Locations
          </h2>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 500,
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
              letterSpacing: "0.3px",
            }}
          >
            Professional cleaning services across major UK cities. We're here to
            serve you wherever you are.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            padding: "20px 0",
          }}
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Carousel Track */}
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              gap: "24px",
              padding: "0 12px",
            }}
          >
            {locations.map((location, index) => (
              <div
                key={location.id}
                style={{
                  flex: `0 0 calc(${100 / cardsToShow}% - 16px)`,
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.border = "1px solid rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.border = "1px solid rgba(0,0,0,0.1)";
                }}
              >
                {/* City Image */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "220px",
                  }}
                >
                  <img
                    src={location.image}
                    alt={`${location.name} cityscape`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.4))",
                      height: "80px",
                    }}
                  />
                </div>

                {/* City Name */}
                <div style={{ padding: "24px 20px" }}>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 8px 0",
                      textAlign: "center",
                      fontFamily: "Montserrat, sans-serif",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {location.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      margin: 0,
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Professional cleaning services
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "-10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "2px solid #000",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#333",
              transition: "all 0.2s ease",
              zIndex: 2,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              e.currentTarget.style.border = "2px solid #333";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              e.currentTarget.style.border = "2px solid #000";
            }}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "-10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "2px solid #000",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#333",
              transition: "all 0.2s ease",
              zIndex: 2,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              e.currentTarget.style.border = "2px solid #333";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              e.currentTarget.style.border = "2px solid #000";
            }}
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            gap: "12px",
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentIndex === index ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                border: "none",
                background:
                  currentIndex === index
                    ? "linear-gradient(135deg, #ebc22c, #d4a800)"
                    : "rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: currentIndex === index ? 1 : 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #locations .container {
            padding: 0 15px !important;
          }
          #locations h2 {
            font-size: 2.2rem !important;
            margin-bottom: 16px !important;
          }
          #locations p {
            font-size: 1.1rem !important;
          }
        }
        @media (max-width: 640px) {
          #locations [style*="flex: 0 0 calc(33.333"] {
            flex: 0 0 calc(100% - 16px) !important;
          }
        }
      `}</style>
    </section>
  );
};
