import React from "react";

const About = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  return (
    <section className="about-area home-about-area">
      <div className="container">
        <div className="about-area-inner section-spacing">
          <div className="shape-1 wow animate__animated animate__fadeInDown" data-wow-offset="0">
            <img
              className="show-light"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-66.webp"
              alt="shape"
            />
            <img
              className="show-dark"
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-66-light.webp"
              alt="shape"
            />
          </div>

          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle wow animate__animated animate__fadeInLeft">
                  {homePage?.smallTitle}
                </span>
              </div>
              <div className="title-wrapper wow animate__animated animate__fadeInUp">
                <h2 className="section-title">
                  {homePage?.titleOne} <span>{homePage?.titleTwo}</span> {homePage?.titleThree}
                </h2>
              </div>
            </div>

            <div className="content-bottom">
              <div
                className="clients-wrapper wow animate__animated animate__fadeInLeft"
                data-wow-offset="100"
              >
                <div className="thumb">
                  <img
                    className="show-light"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/client/img-s-4.webp"
                    alt="client"
                  />
                  <img
                    className="show-dark"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/client/img-s-4-dark.webp"
                    alt="client"
                  />
                </div>
                <div className="info">
                  <h3 className="number">{homePage?.clientsCount}</h3>
                  <p className="text">{homePage?.clientsTitle}</p>
                </div>
              </div>

              <div className="info-wrapper">
                <div className="text-wrapper">
                  <p className="text wow animate__animated animate__fadeInRight">
                    {homePage?.HaveBrilliantContent}
                  </p>
                </div>
                <div
                  className="btn-wrapper wow animate__animated animate__bounceIn"
                  data-wow-offset="100"
                >
                  <div className="btn-wrapper btn-move">
                    <a
                      href="#"
                      className="wc-btn wc-btn-circle btn-hover-bgchange btn-item"
                    >
                      Explore Us
                      <br />
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-gallery-wrapper">
            <div className="thumb-1 wow animate__animated animate__fadeInLeft">
              <img src={homePage?.leftImage} alt="gallery" />
            </div>

            <div className="thumb-2">
              <img
                src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-71.webp"
                className="wow animate__animated animate__fadeInRight"
                data-wow-offset="50"
                data-wow-delay="0.3s"
                alt="gallery"
              />
              <div
                className="about-service-box wow animate__animated animate__fadeInUp"
                data-wow-offset="0"
                data-wow-delay="0.6s"
              >
                <div className="thumb">
                  <img
                    className="show-light"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-67.webp"
                    alt="shape"
                  />
                  <img
                    className="show-dark"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-67-light.webp"
                    alt="shape"
                  />
                </div>
                <p className="text">{homePage?.rightImgContent}</p>
                <div className="counts">
                  <span className="number">{homePage?.rightImgTitleOne}</span>
                  <span className="x">x</span>
                  <span className="text">{homePage?.rightImgTitleTwo}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
