import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import AppsHeroSection from "../Apps-components/AppsHeroSection";
import "../assets/css/Apps.css";
import AppsFeatures from "../Apps-components/AppsFeatures";
import AppSlider from "../Apps-components/AppSlider";
import AppsWhyChoose from "../Apps-components/AppsWhyChoose";
import AppsWhoCanUse from "../Apps-components/AppsWhoCanUse";
import AppsAiDriven from "../Apps-components/AppsAiDriven";
import AppsCounter from "../Apps-components/AppsCounter";
import AppsGeneratingRevenue from "../Apps-components/AppsGeneratingRevenue";
import AppsService from "../Apps-components/AppsService";
import AppsBildYourApp from "../Apps-components/AppsBildYourApp";
import AppsTechnologies from "../Apps-components/AppsTechnologies";
import Footer from "../Components/Footer";
import Cta from "../Components/Cta";
import AppsText from "../Apps-components/AppsText";
import Preloader from "../Components/Preloader";

const SingleAppPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { id } = location.state || {};
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on path change
    setLoading(true);

    axios
      .post("https://crmapi.conscor.com/api/general/mfind", {
        dbName: "hanaplateformweb",
        collectionName: "appspage",
        limit: 0,
      })
      .then((res) => {
        const allApps = res.data?.data || [];
        const singleApp = allApps.find((item) => item._id === id);
        const app = singleApp?.sectionData?.hanaapps || null;
        setAppData(app);

        if (app?.title) {
          document.title = `${app.title} | HANA Apps`;
        } else {
          document.title = "HANA Apps";
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [location.pathname, id]);

  return (
    <>
      {loading && <Preloader />}

      {!loading && (
        <div className="font-heading-beatricetrial-regular-2">
          <div className="has-smooth" id="has_smooth" />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="body-wrapper body-corporate-agency">
                <div className="overlay-switcher-close" />
                <main>
                  {appData?.bannercheckbox && <AppsHeroSection data={appData} />}
                  {appData?.benefitscheckbox && <AppsFeatures data={appData} />}
                  {appData?.slidercheckbox && <AppSlider data={appData} />}
                  {appData?.servicescheckbox && <AppsWhyChoose data={appData} />}
                  {appData?.whoCanUsecheckbox && <AppsWhoCanUse data={appData} />}
                  {appData?.aiDrivencheckbox && <AppsAiDriven data={appData} />}
                  {appData?.countercheckbox && <AppsCounter data={appData} />}
                  {appData?.revenuecheckbox && (
                    <AppsGeneratingRevenue data={appData} />
                  )}
                  <AppsService data={appData} />
                  <AppsTechnologies data={appData} />
                  <AppsBildYourApp />
                  <AppsText />
                  <Cta />
                  <Footer />
                </main>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleAppPage;
