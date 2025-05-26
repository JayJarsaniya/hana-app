import React from "react";

const Hero = ({ data }) => {
  return (
    <section className="hero-area">
      <div className="container large">
        <div className="hero-area-inner">
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h1 className="section-title large has_fade_anim wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  {data?.arolaxTitle}
                </h1>
              </div>
            </div>
            <div className="content-last">
              <div
                className="subtitle-wrapper has_fade_anim wow animate__animated animate__fadeInRight"
                data-fade-from="right"
                data-wow-delay="0.3s"
              >
                <span className="section-subtitle has-right-line">
                  {data?.arolaxSubTitle}
                </span>
              </div>
              <div className="text-wrapper">
                <p
                  className="text has_fade_anim wow animate__animated animate__fadeInLeft"
                  data-fade-from="left"
                  data-wow-delay="0.5s"
                >
                  {data?.arolaxContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
