import React from "react";

const AppsWhyChoose = ({ data }) => {
  return (
    <section className="process-area2">
      <div className="container">
        <div className="process-area2-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title wow animate__animated animate__fadeInDown"
                  data-wow-delay="0.1s"
                >
                  {data.servicesTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p
                className="text wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                {data.servicesDescription}
              </p>
            </div>
          </div>
          <div className="process-area2-wrapper-box">
            <div className="process-area2-wrapper">
              {data.servicesdetails.map((item, index) => (
                <div
                  key={index}
                  className="process2-box wow animate__animated animate__fadeInLeft"
                  data-wow-duration="0.5s"
                  data-wow-delay={`${0.2 + index * 0.3}s`}
                >
                  <span className="tag"></span>
                  <div className="icon">
                    <img
                      className="show-light"
                      src={item.icon2}
                      alt="service icon"
                    />
                    <h2 className="title">{item.Title2}</h2>
                  </div>
                  <p
                    className="text"
                    dangerouslySetInnerHTML={{ __html: item.description2 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsWhyChoose;
