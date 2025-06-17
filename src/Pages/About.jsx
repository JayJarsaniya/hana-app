import React, { useEffect, useState } from "react";
import Hero from "../about-components/Hero";
import Counter from "../about-components/Counter";
import Awards from "../about-components/Awards";
import Aboutus from "../about-components/Aboutus";
import Testimonials from "../about-components/Testimonials";
import Faq from "../about-components/Faq";
import Team from "../about-components/Team";
import Pricing from "../about-components/Pricing";
import Contact from "../about-components/Contact";
import Client from "../about-components/Client";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = aboutData?.data?.[0]?.sectionData?.["Arolax Section"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cacheKey = "about_page_data";
    const cacheTimestampKey = "about_page_timestamp";
    const cacheDuration = 1000 * 60 * 60 * 24;

    const now = Date.now();
    const cached = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    if (cached && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      setAboutData(JSON.parse(cached));
      setLoading(false);
    } else {
      fetch("https://crmapi.conscor.com/api/general/mfind", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dbName: "hanaplateformweb",
          collectionName: "about_page",
          limit: 0,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAboutData(data);
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
    link.href = "https://cdn.hanaplatform.com/css/About-Page-Main.css";
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
                <Hero data={data} />
                <Counter data={data} />
                <Awards data={data} />
                <Aboutus data={data} />
                <Testimonials data={data} />
                <Faq data={data} />
                <Team data={data} />
                <Pricing data={data} />
                <Contact data={data} />
                <Client data={data} />
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

export default About;
