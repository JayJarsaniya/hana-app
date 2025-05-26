import React from "react";

const AppsAiDriven = ({ data }) => {
  return (
    <section className="feature-area3">
      <div className="container">
        <div className="feature-area3-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title wow animate__animated animate__fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  {data.aiDrivenTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div
              className="feature-thumb wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={`${0.3 + (1 + data.aiDrivendetails.length) * 0.1}s`}
            >
              <div className="thumb">
                <img src={data.aiDrivenImage} alt="image" />
              </div>
            </div>
            <div className="features-wrapper-box">
              <div className="features-wrapper">
                <div
                  className="feature-box wow animate__animated animate__fadeInLeft"
                  data-wow-duration="1.8s"
                  data-wow-delay="0.3s"
                >
                  <div className="content">
                    <h3 className="title">
                      {data.aiDrivenSubTitle}
                    </h3>
                  </div>
                </div>
                {data.aiDrivendetails.map((item, index) => (
                  <div
                    key={index}
                    className="feature-box wow animate__animated animate__fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay={`${0.1 + index * 0.1}s`}
                  >
                    <div className="content">
                      <p className="text">{item.description4}</p>
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

export default AppsAiDriven;
