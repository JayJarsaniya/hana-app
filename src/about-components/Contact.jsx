import React from "react";

const Contact = ({ data }) => {
  return (
    <section className="contact-area wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="contact-area-inner section-spacing">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-73.webp"
              alt="shape"
            />
          </div>
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title has_fade_anim">
                  {data?.experienceTitle}
                </h2>
              </div>
            </div>
            <div className="btn-wrapper has_fade_anim wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              <a
                href="#"
                className="wc-btn-underline btn-text-flip"
              >
                <span data-text="Let’s get in touch">
                  Let’s get in touch
                </span>
                <img
                  src="https://crowdytheme.com/html/arolax/assets/imgs/icon/arrow-right-half-light.webp"
                  alt="icon image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
