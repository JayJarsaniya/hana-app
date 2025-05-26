import React from "react";
import img1 from "../wp-content/uploads/2025/02/service.png";

const AppsTechnologies = ({ data }) => {
  return (
    <section className="service-area">
      <div className="container">
        <div className="service-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title wow animate__animated animate__fadeInDown image-title"
                  data-wow-delay="0.3s"
                >
                  {data?.technologiesTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p
                className="text wow animate__animated animate__fadeInUp image-text"
                data-wow-delay="0.6s"
              >
                {data?.technologiesDescription}
              </p>
            </div>
          </div>
          <img
            className="wow animate__animated animate__fadeIn"
            data-wow-delay="0.9s"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AppsTechnologies;
