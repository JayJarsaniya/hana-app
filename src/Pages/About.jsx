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
  const [aboutData, setaboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const data = aboutData?.data?.[0]?.sectionData?.["Arolax Section"];

  useEffect(() => {
    
    console.log("Fetching team_page data...");

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
        console.log("API Response:", data);
        setaboutData(data);
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
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/css/master-about.css";
    document.head.appendChild(link);

    // Cleanup on unmount
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
        <div className="has-smooth" id="has_smooth" />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-corporate-agency">
              {/* overlay switcher close  */}
              <div className="overlay-switcher-close" />
              <main>
                {/* hero area start  */}
                <Hero data={data} />
                {/* hero area end  */}
                {/* counter area start  */}
                <Counter data={data} />
                {/* counter area end  */}
                {/* awards area start  */}
                <Awards data={data} />
                {/* awards area end  */}
                {/* about area start  */}
                <Aboutus data={data} />
                {/* about area end  */}
                {/* testimonial area start  */}
                <Testimonials data={data} />
                {/* testimonial area end  */}
                {/* faq area start  */}
                <Faq data={data} />
                {/* faq area end  */}
                {/* team area start  */}
                <Team data={data} />
                {/* team area end  */}
                {/* pricing area start  */}
                <Pricing data={data} />
                {/* pricing area end  */}
                {/* contact area start  */}
                <Contact data={data} />
                {/* contact area end  */}
                {/* client area start  */}
                <Client data={data} />
                {/* client area end  */}
                <Cta />
                <Footer />
              </main>
            </div>
          </div>
        </div>
        {/* All JS files */}
      </div>
    </>
  );
};

export default About;
