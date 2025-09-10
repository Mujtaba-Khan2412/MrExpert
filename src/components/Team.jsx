import React from "react";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";

export const Team = ({ data }) => {
  const team = data || [];
  return (
    <section
      id="team"
      className="team-section"
      style={{ padding: "110px 0 130px" }}
    >
      <div className="container">
        <style>{`
          /* Force center cards on mobile with text-align fallback */
          @media (max-width: 768px) {
            #team .container {
              text-align: center !important;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            #team .team-grid {
              display: block !important;
              text-align: center !important;
            }
            #team .team-grid > * {
              display: inline-block !important;
              margin: 24px auto !important;
              text-align: left !important;
            }
          }
        `}</style>
        <div
          className="section-title"
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <h2 style={{ margin: 0 }}>Meet the Team</h2>
          <p style={{ opacity: 0.8, marginTop: 16 }}>
            Our passionate professionals bringing excellence to every service.
          </p>
        </div>
        <div
          className="team-grid"
          style={{
            display: "grid",
            gap: "56px 48px",
            /* Use fixed max column width so single column centers instead of stretching full width */
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 320px))",
            alignItems: "start",
            justifyItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: 1320,
            width: "100%",
            placeContent: "center",
          }}
        >
          {team.length === 0 && (
            <div style={{ textAlign: "center" }}>Loading...</div>
          )}
          {team.map((member, idx) => (
            <ProfileCard
              key={member.name + idx}
              avatarUrl={member.img}
              miniAvatarUrl={member.img}
              name={member.name}
              title={member.job}
              handle={member.name.toLowerCase().replace(/\s+/g, "")}
              status="Online"
              contactText="Contact"
              onContactClick={() => console.log("Contact", member.name)}
              className="team-profile-card"
              showBehindGradient={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
