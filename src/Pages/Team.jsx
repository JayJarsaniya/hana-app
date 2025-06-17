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
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const data = teamData?.data?.[0]?.sectionData?.["Work Together Section"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cacheKey = "team_page_data";
    const cacheTimestampKey = "team_page_timestamp";
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 hours

    const now = Date.now();
    const cached = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    if (cached && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      setTeamData(JSON.parse(cached));
      setLoading(false);
    } else {
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
          setTeamData(data);
          localStorage.setItem(cacheKey, JSON.stringify(data));
          localStorage.setItem(cacheTimestampKey, now);
          setLoading(false);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.hanaplatform.com/css/Team-Page-Main.css";
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className="font-heading-beatricetrial-regular-2">
        <div id="has_smooth" />
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
