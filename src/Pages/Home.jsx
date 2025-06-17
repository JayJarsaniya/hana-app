import React, { useEffect, useState } from "react";
import $ from "jquery";
import Footer from "../Components/Footer";
import Cta from "../Components/Cta";
import Blog from "../Home-Components/Blog";
import Contact from "../Home-Components/Contact";
import Faq from "../Home-Components/Faq";
import Team from "../Home-Components/Team";
import Testimonials from "../Home-Components/Testimonials";
import Service from "../Home-Components/Service";
import Work from "../Home-Components/Work";
import Eterprise from "../Home-Components/Eterprise";
import Skill from "../Home-Components/Skill";
import Feature from "../Home-Components/Feature";
import About from "../Home-Components/About";
import Clieants from "../Home-Components/Clieants";
import Hero from "../Home-Components/Hero";
import Preloader from "../Components/Preloader";
// import '../assets/css/master-web-agency.css'

const Home = () => {
  const [homeData, sethomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("homeData");
    const localTimestamp = localStorage.getItem("homeDataTimestamp");

    const isDataValid = () => {
      if (!localData || !localTimestamp) return false;
      const now = Date.now();
      const storedTime = parseInt(localTimestamp, 10);
      const hoursPassed = (now - storedTime) / (1000 * 60 * 60);
      return hoursPassed < 24;
    };

    if (isDataValid()) {
      try {
        const parsedData = JSON.parse(localData);
        sethomeData(parsedData);
        setLoading(false);
      } catch (e) {
        console.warn("⚠️ Invalid JSON, clearing cache...");
        localStorage.removeItem("homeData");
        localStorage.removeItem("homeDataTimestamp");
        fetchData(); // fallback
      }
    } else {
      fetchData();
    }

    function fetchData() {
      fetch("https://crmapi.conscor.com/api/general/mfind", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dbName: "hanaplateformweb",
          collectionName: "home_page",
          limit: 0,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          sethomeData(data);
          setLoading(false);
          localStorage.setItem("homeData", JSON.stringify(data));
          localStorage.setItem("homeDataTimestamp", Date.now().toString());
          // console.log("📡 Fetched from API and stored");
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
    link.href = "https://cdn.hanaplatform.com/css/master-web-agency.css";
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div cla="font-heading-teko-bold">
        <div id="has_smooth" /> c
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-web-agency">
              {/* overlay switcher close  */}
              <div className="overlay-switcher-close" />
              <main>
                {/* hero area start  */}
                <Hero homeData={homeData} />
                {/* hero area end  */}
                {/* clients area start  */}
                <Clieants homeData={homeData} />
                {/* clients area end  */}
                {/* about area start  */}
                <About homeData={homeData} />
                {/* about area end  */}
                {/* feature area start  */}
                <Feature homeData={homeData} />
                {/* feature area end  */}
                {/* skill area start  */}
                <Skill homeData={homeData} />
                {/* skill area end  */}
                {/* eterprise area start  */}
                <Eterprise homeData={homeData} />
                {/* eterprise area end  */}
                {/* work area start  */}
                <Work homeData={homeData} />
                {/* work area end  */}
                {/* service area start  */}
                <Service homeData={homeData} />
                {/* service area end  */}
                {/* testimonial area start  */}
                <Testimonials homeData={homeData} />
                {/* testimonial area end  */}
                {/* team area start  */}
                <Team homeData={homeData} />
                {/* team area end  */}
                {/* faq area start  */}
                <Faq homeData={homeData} />
                {/* faq area end  */}
                {/* contact area start  */}
                <Contact homeData={homeData} />
                {/* contact area end  */}
                {/* blog area start  */}
                <Blog homeData={homeData} />
                {/* blog area end  */}
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

export default Home;
