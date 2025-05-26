import React, { useState } from "react";

const Blog = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  const [hovered, setHovered] = useState(null);

  const getBackgroundStyle = (index) => {
    const hoverImages = [
      homePage?.writtenByHoverImgOne,
      homePage?.writtenByHoverImgTwo,
      homePage?.writtenByHoverImgThree,
    ];

    if (hovered === index) {
      return {
        color: "white",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hoverImages[index]})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        transition: "0.3s ease-in-out",
      };
    }

    return {
      transition: "0.3s ease-in-out",
    };
  };

  return (
    <section className="blog-area home-blog-area">
      <div className="container">
        <div className="blog-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim wow animate__animated animate__fadeInDown">
                  {homePage?.journalInsightTitle}
                </h2>
              </div>
            </div>

            <div
              className="content-last has_fade_anim wow animate__animated animate__fadeInRight"
              data-fade-from="right"
              data-delay="0.45"
            >
              <div className="text-wrapper">
                <p className="text">{homePage?.journalInsightContent}</p>
              </div>
              <div className="btn-wrapper">
                <a
                  href="#"
                  className="wc-btn wc-btn-underline btn-text-flip"
                >
                  <span data-text="All blog">All blog</span>
                  <img
                    className="show-light"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/icon/arrow-right-half.webp"
                    alt="icon"
                  />
                  <img
                    className="show-dark"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/icon/arrow-right-half-light.webp"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="blogs-wrapper-box">
            <div className="blogs-wrapper">
              {[0, 1, 2].map((index) => {
                const animationClasses = [
                  "animate__fadeInUp",
                  "animate__zoomIn",
                  "animate__fadeInLeft",
                ];

                return (
                  <div
                    key={index}
                    className={`has_fade_anim wow animate__animated ${animationClasses[index]}`}
                    data-fade-from="left"
                    data-delay={`${0.15 + index * 0.15}`}
                  >
                    <a href="#">
                      <article
                        className={`blog blog${index + 1}`}
                        style={getBackgroundStyle(index)}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <h4 className="text-underline text-white">
                          {
                            homePage?.[
                              `writtenByName${["One", "Two", "Three"][index]}`
                            ]
                          }
                        </h4>
                        <div className="thumb"></div>
                        <h2 className="title text-underline">
                          {
                            homePage?.[
                              `writtenByTitle${["One", "Two", "Three"][index]}`
                            ]
                          }
                        </h2>
                        <p className="text">
                          {
                            homePage?.[
                              `writtenByContent${["One", "Two", "Three"][index]}`
                            ]
                          }
                        </p>
                      </article>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
