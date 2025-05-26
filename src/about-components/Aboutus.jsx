import React from "react";

const About = ({ data }) => {

  return (
     <section className="about-area container-hd">
      <div className="about-area-inner">
        <div className="thumb wow animate__animated animate__fadeInLeft">
          <img src={data?.agencyLeftImage} alt="gallery image" />
        </div>

        <div className="section-content">
          <div className="bg wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
            <img src={data?.agencyRightImage} alt="image" />
          </div>

          <div className="section-title-wrapper">
            <div className="title-wrapper">
              <h2
                className="section-title wow animate__animated animate__fadeInUp"
                dangerouslySetInnerHTML={{ __html: data?.agencyRightTitle }}
              />
            </div>
          </div>

          <div className="text-wrapper">
            <p className="text wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
              {data?.agencyRightDescription}
            </p>
          </div>

          <div className="btn-wrapper wow animate__animated animate__bounceIn" data-wow-delay="0.4s">
            <a href="#" className="wc-btn wc-btn-primary btn-text-flip">
              <span data-text="Learn More">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
