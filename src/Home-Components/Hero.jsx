import React, { useState, useEffect } from "react";
import video from "../assets/HanaWithCorrection.mp4";

const Hero = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoOpen = (e) => {
    e.preventDefault();
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showVideo]);

  return (
    <section className="hero-area">
      <div className="container large">
        <div className="hero-area-inner">
          <div className="area-shape-1 wow animate__animated animate__fadeInDown animate__slowest">
            <img
              className="show-light"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-64.webp"
              alt="shape"
            />
            <img
              className="show-dark"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-64-dark.webp"
              alt="shape"
            />
          </div>

          <div className="section-content">
            <div className="content-first">
              <div className="section-title-wrapper">
                <div className="title-wrapper wow animate__animated animate__fadeInUp animate__slow">
                  <h1 className="section-title has_fade_anim">
                    {homePage?.bannerTitleOne}
                    <span className="marked">
                      {homePage?.bannerTitleTwo}
                    </span>{" "}
                    {homePage?.bannerTitleThree}
                    <span className="rotated">{homePage?.bannerTitleFour}</span>
                    <span className="shape-1 bannerMiniLogo">
                      <img
                        className="show-light has_fade_anim wow animate__animated animate__fadeIn animate__slow"
                        data-fade-offset={0}
                        src={homePage?.bannerMiniLogo}
                        alt="shape"
                      />
                    </span>
                  </h1>
                </div>
              </div>

              <div className="content-bottom">
                <div
                  className="scroll-down has_fade_anim wow animate__animated animate__fadeInUp animate__slow"
                  data-fade-offset={0}
                  data-on-scroll={0}
                  data-delay="0.75"
                >
                  <img
                    className="show-light"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-61.webp"
                    alt="image"
                  />
                  <img
                    className="show-dark"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-61-light.webp"
                    alt="image"
                  />
                </div>

                <div className="text-wrapper">
                  <p
                    className="text has_fade_anim wow animate__animated animate__fadeInRight animate__slow"
                    data-on-scroll={0}
                    data-delay="0.30"
                  >
                    {homePage?.bannerContent}.&nbsp;
                  </p>
                </div>

                <div className="btn-wrapper has_fade_anim wow animate__animated animate__bounceIn animate__slow">
                  <a href="#" className="wc-btn wc-btn-underline btn-text-flip">
                    <span data-text="get started now">get started now</span>
                    <img
                      className="show-light"
                      src="https://crowdytheme.com/html/arolax/assets/imgs/icon/arrow-right-half.webp"
                      alt="icon image"
                    />
                    <img
                      className="show-dark"
                      src="https://crowdytheme.com/html/arolax/assets/imgs/icon/arrow-right-half-light.webp"
                      alt="icon image"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="content-last">
              <div className="thumb-wrapper has_fade_anim wow animate__animated animate__fadeInRight animate__slow">
                <div className="shape-1">
                  <img
                    className="show-light"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-62.webp"
                    alt="shape"
                  />
                  <img
                    className="show-dark"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-62-light.webp"
                    alt="shape"
                  />
                </div>

                <div
                  className="video-btn-box wow animate__animated animate__zoomIn animate__slow"
                  data-wow-delay="0.3s"
                >
                  <div className="video-btn">
                    <button onClick={handleVideoOpen} className="wc-btn-circle">
                      <i className="fa-solid fa-play"></i>
                    </button>
                    <span className="text">
                      Watch <br />
                      Video
                    </span>
                  </div>
                </div>

                <div className="hero-thumb">
                  <div
                    className="thumb-1 wow animate__animated animate__fadeInLeft animate__slow"
                    data-wow-delay="0.3s"
                  >
                    <img src={homePage?.bannerImageOne} alt="image" />
                  </div>
                  <div
                    className="thumb-2 wow animate__animated animate__fadeInRight animate__slow"
                    data-wow-delay="0.6s"
                  >
                    <img src={homePage?.bannerImageTwo} alt="image" />
                  </div>
                </div>
              </div>

              <div
                className="customer-wrapper-box wow animate__animated animate__fadeInUp animate__slow"
                data-wow-delay="0.5s"
              >
                <div className="customer-wrapper">
                  <div className="icon">
                    <img
                      className="show-light"
                      src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-63.webp"
                      alt="shape"
                    />
                    <img
                      className="show-dark"
                      src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-63-light.webp"
                      alt="shape"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      className="show-light"
                      src="https://crowdytheme.com/html/arolax/assets/imgs/client/img-s-3.webp"
                      alt="image"
                    />
                    <img
                      className="show-dark"
                      src="https://crowdytheme.com/html/arolax/assets/imgs/client/img-s-3-light.webp"
                      alt="image"
                    />
                  </div>
                  <p className="text">
                    <span className="text-underline">
                      {homePage?.customersTitleOne}
                    </span>
                    <br />
                    {homePage?.customersTitleTwo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showVideo && (
          <div
            className="video-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10000,
              padding: "40px",
              boxSizing: "border-box",
            }}
            onClick={handleVideoClose}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "900px",
                maxHeight: "80vh",
                backgroundColor: "#000",
                overflow: "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleVideoClose}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: "2rem",
                  cursor: "pointer",
                  zIndex: 10001,
                }}
              >
                &times;
              </button>
              <video
                src={video}
                autoPlay
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
