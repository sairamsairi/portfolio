import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { SiLeetcode } from "react-icons/si";

function Github() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const resp = await fetch(
          "https://leetcode-stats-api.herokuapp.com/sairamnetha"
        );
        const data = await resp.json();
        if (data.status === "error") throw new Error("Profile not found");
        setProfile(data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch LeetCode data");
      }
    }
    fetchProfile();
  }, []);

  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  if (!profile)
    return <p style={{ textAlign: "center" }}>Loading profile...</p>;

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      {/* GitHub Calendar */}
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <h2 className="project-heading" style={{ color: "#c084f5" }}>
          Days I <strong>Code on GitHub</strong>
        </h2>
        <GitHubCalendar
          username="sairamsairi"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={14}
        />
      </Row>

      {/* LeetCode Stats */}
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          background: "#1a1a2e",
          color: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ color: "#c084f5", marginBottom: "15px" }}>
          LeetCode Stats
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <p>
            <strong style={{ color: "#c084f5" }}>Ranking:</strong>{" "}
            {profile.ranking}
          </p>
          <p>
            <strong style={{ color: "#c084f5" }}>Total Solved:</strong>{" "}
            {profile.totalSolved} / {profile.totalQuestions}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="https://leetcode.com/sairamnetha/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              backgroundColor: "#c084f5",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border: "none", // Reset border in case it acted like a button before
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <SiLeetcode size={20} />
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
