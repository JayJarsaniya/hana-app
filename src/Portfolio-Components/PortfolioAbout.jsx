import React from "react";

const PortfolioAbout = ({ data }) => {
  
  return (
    <section className="portfolio-about-area">
      <div className="container large">
        <div className="portfolio-about-area-inner">
          <div className="section-content">
            <div className="about-title-section pe-5">
              <div className="section-title wow animate__animated animate__fadeInUp">
                <h2>{data?.AboutTitle}</h2>
              </div>
              <div className="text wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                <p>
                  Industry :
                  {data?.IndustryList?.map((item, index) => (
                    <span key={index} className="ms-1">
                      {item}
                      {index !== data.IndustryList.length - 1 && " | "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="text wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                <p>
                  Solution :
                  {data?.SolutionList?.map((item, index) => (
                    <span key={index} className="ms-1">
                      {item}
                      {index !== data.SolutionList.length - 1 && " | "}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="about-details-section">
              <h3 className="title wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                Services
              </h3>
              <div className="about-services wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                {data?.serviceDetails?.map((item, index) => (
                  <span key={index}> {item.servicesTitle}</span>
                ))}
              </div>

              <h3 className="title wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                Technologies
              </h3>
              <div className="about-services wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                {data?.TechnologiesList?.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAbout;
