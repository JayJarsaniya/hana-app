import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import Preloader from "../Components/Preloader";
import Footer from "../Components/Footer";
import Cta from "../Components/Cta";

import KbHero from "../kb-components/KbHero";
import KbIntroduction from "../kb-components/KbIntroduction";
import KeyFeature from "../kb-components/KeyFeature";
import KbTechnologies from "../kb-components/KbTechnologies";
import KbModules from "../kb-components/KbModules";
import Kbbenefits from "../kb-components/Kbbenefits";
import KbWorkflow from "../kb-components/KbWorkflow";
import KbPricing from "../kb-components/KbPricing";
import KbAts from "../kb-components/KbAts";
import KbDemo from "../kb-components/KbDemo";
import KbConclusion from "../kb-components/KbConclusion";

import "../assets/css/KnowledgeBase.css";

const KbSinglepage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { id } = location.state || {};
  const [kbData, setKbData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cacheKey = "knowledgebase_data";
    const timestampKey = "knowledgebase_timestamp";
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 hours
    const now = Date.now();

    const cached = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(timestampKey);

    if (cached && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      const allItems = JSON.parse(cached);
      const matchedItem = allItems.find((item) => item._id === id);
      const knowledge = matchedItem?.sectionData?.Knowledgebase || null;
      setKbData(knowledge);

      document.title = knowledge?.title
        ? `${knowledge.title} | HANA Knowledge Base`
        : "HANA Knowledge Base";

      setLoading(false);
    } else {
      axios
        .post("https://crmapi.conscor.com/api/general/mfind", {
          dbName: "hanaplateformweb",
          collectionName: "knowledgebase",
          limit: 0,
        })
        .then((res) => {
          const allItems = res.data?.data || [];
          const matchedItem = allItems.find((item) => item._id === id);
          const knowledge = matchedItem?.sectionData?.Knowledgebase || null;
          setKbData(knowledge);

          localStorage.setItem(cacheKey, JSON.stringify(allItems));
          localStorage.setItem(timestampKey, now);

          document.title = knowledge?.title
            ? `${knowledge.title} | HANA Knowledge Base`
            : "HANA Knowledge Base";

          setLoading(false);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setLoading(false);
        });
    }
  }, [location.pathname, id]);

  return (
    <>
      {loading && <Preloader />}

      <div className="font-heading-beatricetrial-regular-2">
        <div id="has_smooth" />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-corporate-agency">
              <div className="overlay-switcher-close" />
              <main className="kb-main">
                {kbData?.Bannercheckbox && <KbHero data={kbData} />}
                {kbData?.Introductioncheckbox && <KbIntroduction data={kbData} />}
                {kbData?.Section1checkbox && <KeyFeature data={kbData} />}
                {kbData?.Section3checkbox && <Kbbenefits data={kbData} />}
                {kbData?.Section2checkbox && <KbModules data={kbData} />}
                {kbData?.Technologycheckbox && <KbTechnologies data={kbData} />}
                {kbData?.Section4checkbox && <KbWorkflow data={kbData} />}
                {kbData?.Plancheckbox && <KbPricing data={kbData} />}
                {kbData?.Section5checkbox && <KbAts data={kbData} />}
                {kbData?.Section6checkbox && <KbDemo data={kbData} />}
                {kbData?.Conclusioncheckbox && <KbConclusion data={kbData} />}
              </main>
              <Cta />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KbSinglepage;
