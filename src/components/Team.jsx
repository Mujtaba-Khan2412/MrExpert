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
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            alignItems: "start",
            justifyItems: "center",
            margin: "0 auto",
            maxWidth: 1320,
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
