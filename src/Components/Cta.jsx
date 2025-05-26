import React from "react";

const Cta = () => {
  return (
    <section className="cta-area">
      <div className="container">
        <div className="cta-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has_fade_anim wow animate__animated animate__fadeInDown">
                  🖐️ Hello
                  <img
                    className="show-light"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-6.webp"
                    alt="image"
                  />
                  <img
                    className="show-dark"
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-6-light.webp"
                    alt="image"
                  />
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_fade_anim wow animate__animated animate__fadeInUp">
                  Let’s Talk with us
                </h2>
              </div>
            </div>
            <div className="btn-wrapper has_fade_anim wow animate__animated animate__fadeIn">
              <a
                href="mailto:hello@example.com"
                className="wc-btn wc-btn-underline"
              >
                mail@hanaplatform.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
