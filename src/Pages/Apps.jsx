import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRating from "../Apps-components/StarRating";
import "../assets/css/allapss.scss";
import axios from "axios";
import Preloader from "../Components/Preloader";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("https://crmapi.conscor.com/api/general/mfind", {
        dbName: "hanaplateformweb",
        collectionName: "appspage",
        limit: 0,
      })
      .then((res) => {
        const result = res.data?.data;
        setApps(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <div className="font-heading-beatricetrial-regular-2">
        <div className="has-smooth" id="has_smooth" />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-corporate-agency">
              <div className="overlay-switcher-close" />
              <main>
                <section className="works-area apps-work-area">
                  <div className="container">
                    <div className="works-area-inner section-spacing-bottom">
                      <div className="section-header wow animate__animated animate__fadeInDown">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title apps-section-title has_text_move_anim">
                              Build Your App in a Week
                            </h2>
                          </div>
                          <div className="text-wrapper">
                            <p className="text has_fade_anim">
                              We create amazing mobile & desktop Apps. Most of
                              our apps are available on Windows, Linux, Mac,
                              iPhone, iPad, and Android.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="works-wrapper-box">
                        <div className="works-wrapper">
                          {Object.entries(
                            apps.reduce((acc, item) => {
                              const app = item.sectionData?.hanaapps;
                              if (!app) return acc;
                              const category = app.category || "Uncategorized";
                              if (!acc[category]) acc[category] = [];
                              acc[category].push({ ...app, id: item._id });
                              return acc;
                            }, {})
                          ).map(([category, appsInCategory]) => (
                            <div key={category} className="category-section">
                              <h2 className="category-title title wow animate__animated animate__fadeInLeft">
                                {category}
                              </h2>
                              <div className="works-wrapper2">
                                {appsInCategory.map((app, index) => {
                                  const slug = slugify(app.title);
                                  return (
                                    <div
                                      className="has_fade_anim wow animate__animated animate__fadeInLeft"
                                      key={app.id}
                                      data-fade-from={
                                        index % 2 === 0 ? "left" : "right"
                                      }
                                      data-delay={`0.${index + 1}5`}
                                      data-wow-delay={`0.${index + 1}5s`}
                                      data-wow-iteration="1"
                                      style={{ animationDuration: "0.6s" }}
                                    >
                                      <Link
                                        to={slug}
                                        state={{ id: app.id }}
                                        style={{
                                          display: "block",
                                          margin: "10px 0",
                                        }}
                                      >
                                        <div className="work-box hover-animate">
                                          <div className="thumb">
                                            <img
                                              src={app.image}
                                              alt={app.title}
                                            />
                                          </div>
                                          <div className="content">
                                            <h2 className="title">
                                              {app.title}
                                            </h2>
                                            <StarRating
                                              rating={parseFloat(app.rating)}
                                            />
                                          </div>
                                          <div className="meta">
                                            <p className="tag">
                                              {app.description}
                                            </p>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className="btn-wrapper has_fade_anim wow animate__animated animate__pulse"
                        data-wow-delay="0.8s"
                        style={{ animationDuration: "1.5s" }}
                      >
                        
                      </div>
                    </div>
                  </div>
                </section>
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

export default Apps;
