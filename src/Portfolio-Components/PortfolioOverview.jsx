import React from "react";

const PortfolioOverview = ({ data }) => {
  return (
    <section className="portfolio-feature-area">
      <div className="container">
        <div className="portfolio-feature-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title wow animate__animated animate__fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  {data?.overviewTitle}
                </h2>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="features-wrapper-box">
              <div className="features-wrapper">
                {data?.overviewDetails?.map((item,index) => (
                  <div key={index}
                    className="feature-box wow animate__animated animate__fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div className="content">
                      <p className="text">{item.overviewDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;
