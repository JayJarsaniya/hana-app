import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

const AppsBildYourApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cacheKey = "apps_bya_data";
    const cacheTimestampKey = "apps_bya_timestamp";
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 hours
    const now = Date.now();

    const cachedData = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    if (cachedData && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      setApps(JSON.parse(cachedData));
      setLoading(false);
    } else {
      axios
        .post("https://crmapi.conscor.com/api/general/mfind", {
          dbName: "hanaplateformweb",
          collectionName: "appspage",
          limit: 5,
        })
        .then((res) => {
          const rawApps = res.data?.data || [];
          const formattedApps = rawApps
            .map((item) => ({
              ...item.sectionData?.hanaapps,
              id: item._id,
            }))
            .filter((app) => app)
            .slice(0, 5);
          setApps(formattedApps);
          localStorage.setItem(cacheKey, JSON.stringify(formattedApps));
          localStorage.setItem(cacheTimestampKey, now);
          setLoading(false);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="large">
      <section className="service-area3">
        <div className="service-area3-inner section-spacing">
          <div className="bg">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-54.webp"
              alt="bg shape"
            />
          </div>
          <div className="container">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title has_text_move_anim">
                    Build Your App in a Week
                  </h2>
                  <p className="text">
                    The apps are available on Mac, iPhone, iPad, and Android
                  </p>
                </div>
              </div>
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="services-wrapper-box">
                <div className="services-wrapper">
                  {apps.map((app, index) => (
                    <div
                      className="has_fade_anim wow animate__animated animate__fadeInUp"
                      data-wow-delay={`${0.1 + index * 0.15}s`}
                      key={app.id}
                    >
                      <Link
                        to={`/apps/${slugify(app.title)}`}
                        state={{ id: app.id }}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <div className="service-box3">
                          <h3 className="number">
                            {String(index + 1).padStart(2, "0")}
                          </h3>
                          <div className="thumb">
                            <img
                              src={app.image || "/placeholder.jpg"}
                              alt={app.title}
                            />
                          </div>
                          <div className="content">
                            <h3 className="title">{app.title}</h3>
                            <p className="text">{app.description}</p>
                            <span className="wc-btn wc-btn-circle">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppsBildYourApp;
