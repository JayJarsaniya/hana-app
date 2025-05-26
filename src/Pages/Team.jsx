import React, { useEffect, useState } from "react";
import "../assets/css/Team.css";
import TeamHero from "../Team-Components/TeamHero";
import TeamSection from "../Team-Components/TeamSection";
import TeamCounter from "../Team-Components/TeamCounter";
import TeamCommunity from "../Team-Components/TeamCommunity";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";

const Team = () => {
  const [teamData, setteamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const data = teamData?.data?.[0]?.sectionData?.["Work Together Section"];

  useEffect(() => {
    console.log("Fetching team_page data...");

    fetch("https://crmapi.conscor.com/api/general/mfind", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dbName: "hanaplateformweb",
        collectionName: "team_page",
        limit: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setteamData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/css/master-team.css";
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className="font-heading-beatricetrial-regular-2">
        <div className="has-smooth" id="has_smooth" />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-corporate-agency">
              <div className="overlay-switcher-close" />
              <main>
                <TeamHero data={data} />
                <TeamSection data={data} />
                <TeamCounter data={data} />
                <TeamCommunity data={data} />
                <Cta />
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
