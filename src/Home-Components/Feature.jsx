import React from "react";

const Feature = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  return (
    <section className="feature-area">
      <div className="container">
        <div className="feature-area-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div
                className="shape-1 wow animate__animated animate__fadeIn"
                data-wow-delay="0.8s"
              >
                <img
                  src={homePage?.DedicatedTeamMainLogo}
                  alt="image"
                />
              </div>
              <div className="title-wrapper">
                <h2 className="section-title wow animate__animated animate__fadeInUp">
                  {homePage?.mainTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                {homePage?.mainContent}
              </p>
            </div>
          </div>

          <div className="features-wrapper-box">
            <div className="features-wrapper">
              <div
                className="feature-box wow animate__animated animate__fadeInLeft"
                data-wow-delay="0.15s"
              >
                <div className="thumb">
                  <img
                    src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-24.webp"
                    alt="feature icon"
                  />
                </div>
                <div className="content">
                  <h3 className="title">{homePage?.teamTitleOne}</h3>
                  <p className="text">{homePage?.teamContentOne}</p>
                </div>
              </div>

              <div
                className="feature-box wow animate__animated animate__fadeInRight"
                data-wow-delay="0.3s"
              >
                <div className="thumb">
                  <img
                    src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-25.webp"
                    alt="feature icon"
                  />
                </div>
                <div className="content">
                  <h3 className="title">{homePage?.teamTitleTwo}</h3>
                  <p className="text">{homePage?.teamContentTwo}</p>
                </div>
              </div>

              <div
                className="feature-box wow animate__animated animate__fadeInLeft"
                data-wow-delay="0.45s"
              >
                <div className="thumb">
                  <img
                    src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-26.webp"
                    alt="feature icon"
                  />
                </div>
                <div className="content">
                  <h3 className="title">{homePage?.teamTitleThree}</h3>
                  <p className="text">{homePage?.teamContentThree}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feature;
