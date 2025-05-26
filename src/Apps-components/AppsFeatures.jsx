import React from "react";

const AppsFeatures = ({ data }) => {
  return (
    <>
      {/* features area start  */}
      <section
        className="features-area2 wow animate__animated animate__fadeInUp"
        data-wow-duration="0.8s"
      >
        <div className="container">
          <div className="features-area2-inner section-spacing-top">
            <div className="section-header">
              <div
                className="section-title-wrapper wow animate__animated animate__fadeInLeft"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                <div className="title-wrapper">
                  <h2
                    className="section-title has_text_move_anim"
                    dangerouslySetInnerHTML={{ __html: data.benefitsTitle }}
                  />
                </div>
              </div>
              <div
                className="text-wrapper wow animate__animated animate__fadeInRight"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <p className="text has_fade_anim">{data.benefitsDescription}</p>
              </div>
            </div>
            <div className="features-wrapper-box">
              <div className="features-wrapper">
                {data.benefitsdetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="feature-box has_fade_anim wow animate__animated animate__fadeInUp"
                    data-wow-duration="0.7s"
                    data-wow-delay={`${0.15 * idx + 0.3}s`} // staggered delay for each feature box
                    data-fade-from="bottom"
                  >
                    <div className="thumb">
                      <img
                        className="show-light"
                        src={item.icon1}
                        alt="feature icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">{item.Title1}</h3>
                      <p className="text">{item.description1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features area end  */}
    </>
  );
};

export default AppsFeatures;
