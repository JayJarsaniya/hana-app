import { useEffect, useState } from "react";
import "./App.css";
import "animate.css";
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
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import KnowledgeBase from "./Pages/KnowledgeBase";
import KbSinglepage from "./Pages/KbSinglepage";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetail from "./Pages/PortfolioDetail";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    let scriptsToLoad = [];

    const scriptUrls = [
      "https://cdn.hanaplatform.com/js/jquery-3.6.0.min.js",
      "https://cdn.hanaplatform.com/js/bootstrap.bundle.min.js",
      "https://cdn.hanaplatform.com/js/jquery.magnific-popup.min.js",
      "https://cdn.hanaplatform.com/js/swiper-bundle.min.js",
      "https://cdn.hanaplatform.com/js/counter.js",
      "https://cdn.hanaplatform.com/js/progressbar.js",
      "https://cdn.hanaplatform.com/js/ScrollSmoother.min.js",
      "https://cdn.hanaplatform.com/js/ScrollTrigger.min.js",
      "https://cdn.hanaplatform.com/js/gsap.min.js",
      "https://cdn.hanaplatform.com/js/ScrollToPlugin.min.js",
      "https://cdn.hanaplatform.com/js/SplitText.min.js",
      "https://cdn.hanaplatform.com/js/jquery.meanmenu.min.js",
      "https://cdn.hanaplatform.com/js/main.js",
      "https://cdn.hanaplatform.com/js/error-handling.js",
      "https://cdn.hanaplatform.com/js/offcanvas.js",
      "https://cdn.hanaplatform.com/js/spring-slider.js",
    ];

    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = () => {
          console.warn("Failed to load script:", url);
          resolve();
        };
        document.body.appendChild(script);
        scriptsToLoad.push(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        for (const url of scriptUrls) {
          await loadScript(url);
        }
      } catch (err) {
        console.error("Script load error:", err);
      } finally {
        setScriptsLoaded(true);
      }
    };

    const loadFromCacheOrAPI = async () => {
      const cachedData = localStorage.getItem("homeData");
      const cachedTimestamp = localStorage.getItem("homeDataTimestamp");

      const isValid = () => {
        if (!cachedData || !cachedTimestamp) return false;
        const now = Date.now();
        const storedTime = parseInt(cachedTimestamp, 10);
        return now - storedTime < 1000 * 60 * 60 * 24; // 24 hrs
      };

      if (isValid()) {
        setHomeData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        fetch("https://crmapi.conscor.com/api/general/mfind", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dbName: "hanaplateformweb",
            collectionName: "home_page",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setHomeData(data);
            setLoading(false);
            localStorage.setItem("homeData", JSON.stringify(data));
            localStorage.setItem("homeDataTimestamp", Date.now().toString());
          })
          .catch((err) => {
            console.error("API error:", err);
            setLoading(false);
          });
      }
    };

    loadAllScripts();
    loadFromCacheOrAPI();

    return () => {
      scriptsToLoad.forEach((script) => {
        if (script?.parentNode) {
          script.parentNode.removeChild(script);
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:slug" element={<SingleAppPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/kb" element={<KnowledgeBase />} />
          <Route path="/kb/:slug" element={<KbSinglepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="//portfolio/:slug" element={<PortfolioDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
