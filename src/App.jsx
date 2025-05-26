import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Preloader from "./Components/Preloader";
import SrollToTop from "./Components/SrollToTop";
import Cursor from "./Components/Cursor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Team from "./Pages/Team";
import Apps from "./Pages/Apps";
import SingleAppPage from "./Pages/SingleAppPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppsBildYourApp from "./Apps-components/AppsBildYourApp";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);


  

  useEffect(() => {
    // Load external scripts
    const scriptUrls = [
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/jquery-3.6.0.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/bootstrap.bundle.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/jquery.magnific-popup.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/swiper-bundle.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/counter.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/progressbar.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/ScrollSmoother.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/ScrollTrigger.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/gsap.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/ScrollToPlugin.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/SplitText.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/jquery.meanmenu.min.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/backToTop.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/main.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/error-handling.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/offcanvas.js",
      "https://cdn.jsdelivr.net/gh/JayJarsaniya/js-css/js/spring-slider.js",
    ];

    scriptUrls.forEach((url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    });

    // Fetch data from the API
    fetch("https://crmapi.conscor.com/api/general/mfind", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dbName: "hanaplateformweb",
        collectionName: "home_page",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setHomeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });

    // Clean up scripts on unmount
    return () => {
      scriptUrls.forEach((url) => {
        const script = document.querySelector(`script[src="${url}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <BrowserRouter>
        <Header homeData={homeData} />
        <SrollToTop />
        <Cursor />
        <Routes>
          <Route path="/" element={<Home homeData={homeData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:slug" element={<SingleAppPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
