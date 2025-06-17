import React from "react";

const Kbbenefits = ({ data }) => {
  return (
    <section className="service-area2 kb-service-area">
      <div className="container">
        <div className="service-area2-inner section-spacing-bottom">
          {/* Background shapes */}
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-10.webp"
              alt="shape"
            />
          </div>
          <div className="shape-2">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-9.webp"
              alt="shape"
            />
          </div>
          <div className="shape-3">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-12.webp"
              alt="shape"
            />
          </div>
          <div className="shape-4">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-11.webp"
              alt="shape"
            />
          </div>

          {/* Section Title */}
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  {data?.Section3Title}
                </h2>
              </div>
            </div>
          </div>

          {/* Benefit Items */}
          <div className="services-wrapper-box">
            <div className="services-wrapper">
              {data?.Section3details?.map((item, index) => (
                <div
                  key={index}
                  className="service-box2 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.15s"
                >
                  <div className="content">
                    <h2 className="section-title">{item.Section3Title}</h2>
                    <p
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: item.Section3Description,
                      }}
                    />
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

export default Kbbenefits;
