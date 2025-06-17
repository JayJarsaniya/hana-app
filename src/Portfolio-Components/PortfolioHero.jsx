import React from "react";

const PortfolioHero = ({ data }) => {
  return (
    <>
      <section className="portfolio-hero-area">
        <div className="container large">
          <div className="portfolio-hero-area-inner">
            <div className="section-content">
              <div className="content-last">
                <div className="section-title-wrapper">
                  <div
                    className="title-wrapper has_fade_anim wow animate__animated animate__fadeInUp"
                    data-fade-from="bottom"
                    data-fade-offset={50}
                    data-wow-delay="0.2s"
                  >
                    <h1 className="section-title">
                      {data?.bannerTitle}
                    </h1>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p
                    className="text has_text_move_anim wow animate__animated animate__fadeIn"
                    data-wow-delay="0.4s"
                  >
                    {data?.bannerDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="portfolio-image-wrapper">
        <div className="overflow-hidden">
          <img
            className="w-100 has_fade_anim wow animate__animated animate__fadeInUp"
            data-speed="0.8"
            data-fade-from="bottom"
            data-wow-delay="0.6s"
            data-wow-duration="0.75s"
            src={data?.bannerImage}
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
