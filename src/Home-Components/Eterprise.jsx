import React from "react";

const Eterprise = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  const IMAGE_BASE_URL = "https://crmapi.conscor.com/v1/app1319959169072";
  const getImageUrl = (path) => {
    if (!path) return "";
    return path.startsWith("http") ? path : `${IMAGE_BASE_URL}${path}`;
  };

  return (
    <div className="enterprise-area">
      <div className="px-5">
        <div className="enterprise-area-inner section-spacing">
          <div className="section-header">
            <div className="text-wrapper">
              <p className="text wow animate__animated animate__fadeInUp">
                {homePage?.TechnologyMainTitle}
              </p>
            </div>
          </div>
          <div className="expertise-wrapper-box">
            <div className="expertise-wrapper">
              {homePage?.technologyTable?.map((item, index) => (
                <div
                  className={`expertise-box wow animate__animated ${
                    index % 2 === 0 ? "animate__fadeInRight" : "animate__fadeInLeft"
                  }`}
                  data-wow-delay={`${index * 0.2}s`}
                  key={index}
                >
                  <div className="icon">
                    <img
                      className="show-light"
                      src={getImageUrl(item.technologyImage)}
                      alt={item.technologyTitle}
                    />
                    <img
                      className="show-dark"
                      src={getImageUrl(item.technologyImage)}
                      alt={item.technologyTitle}
                    />
                  </div>
                  <p className="name">{item.technologyTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eterprise;
