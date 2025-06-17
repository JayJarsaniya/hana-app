import React from "react";

const Service = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  return (
    <>
      <section className="service-area">
        <div className="container">
          <div className="service-area-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div
                  className="shape-1 wow animate__animated animate__zoomIn"
                  data-wow-delay="0.3s"
                >
                  <img src={homePage?.premiumServiceLogo} alt="image" />
                </div>
                <div
                  className="title-wrapper wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h2 className="section-title">
                    {homePage?.premiumServiceTitleOne}{" "}
                    <span>{homePage?.premiumServiceTitleTwo}</span>{" "}
                    {homePage?.premiumServiceTitleThree}
                  </h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p
                  className="text wow animate__animated animate__fadeIn"
                  data-wow-delay="0.5s"
                >
                  {homePage?.premiumServiceContent}
                </p>
              </div>
            </div>

            {/* Dynamic Services Start */}
            <div className="services-wrapper-box">
              <div className="services-wrapper">
                {homePage?.service?.map((item, index) => (
                  <div
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${0.2 + index * 0.1}s`}
                    key={index}
                  >
                    <div className="service-box">
                      <span className="number">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <div className="content">
                        <h3 className="title">
                          {item?.serviceName?.replace(/<br\s*\/?>/gi, " ")}
                        </h3>
                        <div className="content-last">
                          <p className="text">{item?.serviceContent}</p>
                          <div className="feature-list">
                            <ul>
                              {item?.serviceContentListOne && (
                                <li>+ {item?.serviceContentListOne}</li>
                              )}
                              {item?.serviceContentListTwo && (
                                <li>+ {item?.serviceContentListTwo}</li>
                              )}
                              {item?.serviceContentListThree && (
                                <li>+ {item?.serviceContentListThree}</li>
                              )}
                              {item?.serviceContentListFour && (
                                <li>+ {item?.serviceContentListFour}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="icon">
                        <img
                          className="show-light"
                          src={item?.serviceContentListImage}
                          alt="icon"
                        />
                        <img
                          className="show-dark"
                          src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-36-light.webp"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dynamic Services End */}
          </div>
        </div>
      </section>

      <div
        className="image-wrapper overflow-hidden wow animate__animated animate__fadeInUp"
        data-wow-delay="0.3s"
      >
        <img
          className="w-100"
          data-speed="0.8"
          src={homePage?.serviceImageName}
          alt="gallery image"
        />
      </div>
    </>
  );
};

export default Service;
