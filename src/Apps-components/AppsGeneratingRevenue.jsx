import React from "react";

const AppsGeneratingRevenue = ({ data }) => {
  return (
    <section className="service-area4">
      <div className="container">
        <div className="service-area4-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title wow animate__animated animate__fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  {data.revenueTitle}
                </h2>
              </div>
            </div>
            <div
              className="text-wrapper wow animate__animated animate__fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.45s"
            >
              <p className="text">{data.revenueDescription}</p>
            </div>
          </div>
          <div className="services-wrapper-box">
            <div className="services-wrapper">
              {data.revenuedetails.map((item, index) => (
                <div
                  key={index}
                  className="wow animate__animated animate__fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay={`${0.1 + index * 0.1}s`}
                >
                  <div className="service-box4">
                    <span className="number">{item.number6}</span>
                    <div className="content-wrapper">
                      <div className="content">
                        <h2 className="title">{item.Title6}</h2>
                        <p className="text">{item.description6}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsGeneratingRevenue;
