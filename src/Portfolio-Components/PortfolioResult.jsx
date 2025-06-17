import React from "react";

const PortfolioResult = ({ data }) => {
  const ResultTitle = data?.ResultTitle || "The Result";
  const ResultDetails = data?.ResultDetails || [];

  return (
    <section className="portfolio-faq-area">
      <div className="container">
        <div className="portfolio-faq-area-inner section-spacing">
          <div className="section-content">
            <div
              className="thumb wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                src={data?.ResultImage}
                className="has_fade_anim"
                data-fade-from="left"
                alt="Result Illustration"
              />
            </div>
            <div
              className="content-last has_fade_anim wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">{ResultTitle}</h2>
                </div>
              </div>

              <div className="result-description-wrapper pt-3">
                {ResultDetails.map((item, index) => (
                  <p
                    key={index}
                    className="result-description mb-4"
                    dangerouslySetInnerHTML={{
                      __html: item.ResultDescription2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioResult;
