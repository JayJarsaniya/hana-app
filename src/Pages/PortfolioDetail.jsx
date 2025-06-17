import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access the passed state
import axios from "axios";

import PortfolioHero from "../Portfolio-Components/PortfolioHero";
import PortfolioAbout from "../Portfolio-Components/PortfolioAbout";
import PortfolioOverview from "../Portfolio-Components/PortfolioOverview";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";
import "../assets/css/Portfolio.css";
import PortfolioProblem from "../Portfolio-Components/PortfolioProblem";
import PortfolioSolution from "../Portfolio-Components/PortfolioSolution";
import PortfolioResult from "../Portfolio-Components/PortfolioResult";

const PortfolioDetail = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Access the location to get the state

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  useEffect(() => {
    const id = location.state?.id; // Get the _id from the state

    if (!id) {
      setLoading(false);
      return;
    }

    // Define cache keys and duration
    const cacheKey = `portfolio_detail_data_${id}`; // Unique key for each portfolio item
    const cacheTimestampKey = `portfolio_detail_timestamp_${id}`;
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 hours

    const now = Date.now();
    const cached = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    // Check if cached data exists and is still fresh
    if (cached && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      setPortfolioData(JSON.parse(cached));
      setLoading(false);
    } else {
      const fetchPortfolioData = async () => {
        try {
          const response = await axios.post(
            "https://crmapi.conscor.com/api/general/mfind",
            {
              dbName: "hanaplateformweb",
              collectionName: "portfolio_page",
              query: { _id: id }, // Query for the specific project by _id
              limit: 1,
            }
          );

          if (response.data?.success && response.data?.data?.length > 0) {
            const projectData = response.data.data[0].sectionData?.portfolio;
            const formattedProjectData = {
              ...projectData,
              IndustryList:
                projectData.IndustryList?.map((industry) =>
                  industry === "Artificial Inelligence"
                    ? "Artificial Intelligence"
                    : industry
                ) || [],
            };
            setPortfolioData(formattedProjectData);

            // Store the fetched data and timestamp in local storage
            localStorage.setItem(cacheKey, JSON.stringify(formattedProjectData));
            localStorage.setItem(cacheTimestampKey, now);

          } else {
            setPortfolioData(null); // Clear data if not found
          }
        } catch (error) {
          setPortfolioData(null); // Clear data on error
        } finally {
          setLoading(false);
        }
      };

      fetchPortfolioData();
    }
  }, [location.state?.id]); // Re-run effect if the ID changes

  return (
    <>
      {loading && <Preloader />}
      <div className="font-heading-beatricetrial-regular-2">
        <div id="has_smooth" />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-corporate-agency">
              <div className="overlay-switcher-close" />
              <main className="portfolio-main">
                {portfolioData ? (
                  <>
                    <PortfolioHero data={portfolioData} />
                    <PortfolioAbout data={portfolioData} />
                    <PortfolioOverview data={portfolioData} />
                    <PortfolioProblem data={portfolioData} />
                    <PortfolioSolution data={portfolioData} />
                    <PortfolioResult data={portfolioData} />
                  </>
                ) : (
                  !loading && <p>No project data found.</p>
                )}
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

export default PortfolioDetail;