import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/knowledgebase.css";
import axios from "axios";
import Preloader from "../Components/Preloader";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import video from "../assets/kb-video.mp4";

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

const KnowledgeBase = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cacheKey = "kb_page_data";
    const cacheTimestampKey = "kb_page_timestamp";
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 hours

    const now = Date.now();
    const cached = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    if (cached && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      setEntries(JSON.parse(cached));
      setLoading(false);
    } else {
      axios
        .post("https://crmapi.conscor.com/api/general/mfind", {
          dbName: "hanaplateformweb",
          collectionName: "knowledgebase",
          limit: 0,
        })
        .then((res) => {
          const result = res.data?.data;
          setEntries(result);
          localStorage.setItem(cacheKey, JSON.stringify(result));
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
    <>
      {loading && <Preloader />}
      <div className="font-heading-beatricetrial-regular-2">
        <div id="has_smooth" />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-corporate-agency">
              <div className="overlay-switcher-close" />
              <main>
                <section className="kb-main-services-area">
                  <div className="container">
                    <div className="kb-main-services-area-inner">
                      <div className="section-header wow animate_animated animate_fadeInDown">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title apps-section-title has_text_move_anim">
                              Explore Our Topics
                            </h2>
                          </div>
                          <div className="text-wrapper">
                            <p className="text has_fade_anim">
                              Explore useful knowledge base entries for our
                              platform.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="services-wrapper-box">
                        <div className="services-wrapper">
                          {entries.map((item, index) => {
                            const title =
                              item?.sectionData?.Knowledgebase?.title;
                            const description =
                              item?.sectionData?.Knowledgebase?.description ||
                              "No description available.";
                            const id = item._id;
                            const slug = slugify(title);

                            if (!title) return null;

                            return (
                              <div
                                key={id}
                                className="has_fade_anim has_line_anim wow animate__animated animate__fadeInLeft"
                                data-wow-delay={`${index * 0.15}s`}
                                data-fade-from="bottom"
                              >
                                <Link to={slug} state={{ id }}>
                                  <div className="kb-main-service-box">
                                    <div className="bg-box">
                                      <video
                                        src={video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                      />
                                      <div className="bg-box-overlay" />
                                    </div>
                                    <h3 className="title">{title}</h3>
                                    <div className="content">
                                      <p className="text">{description}</p>
                                    </div>
                                    <span className="arrow-btn wc-btn-circle">
                                      <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
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

export default KnowledgeBase;
