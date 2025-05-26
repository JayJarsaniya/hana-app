import React, { useEffect } from "react";
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



const Home = ({ homeData }) => {

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/css/master-web-agency.css';
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div cla="font-heading-teko-bold">
      <>
        <div className="has-smooth" id="has_smooth" />
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
                <Skill homeData={homeData}/>
                {/* skill area end  */}
                {/* eterprise area start  */}
                <Eterprise homeData={homeData}/>
                {/* eterprise area end  */}
                {/* work area start  */}
                <Work homeData={homeData}/>
                {/* work area end  */}
                {/* service area start  */}
                <Service homeData={homeData}/>
                {/* service area end  */}
                {/* testimonial area start  */}
                <Testimonials homeData={homeData}/>
                {/* testimonial area end  */}
                {/* team area start  */}
                <Team homeData={homeData}/>
                {/* team area end  */}
                {/* faq area start  */}
                <Faq homeData={homeData}/>
                {/* faq area end  */}
                {/* contact area start  */}
                <Contact homeData={homeData}/>
                {/* contact area end  */}
                {/* blog area start  */}
                <Blog homeData={homeData}/>
                {/* blog area end  */}
                <Cta/>
                <Footer/>
               
              </main>
           
            </div>
          </div>
        </div>
        {/* All JS files */}
      </>
    </div>
  );
};

export default Home;
