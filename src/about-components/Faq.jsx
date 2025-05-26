import React from "react";

const Faq = ({ data }) => {
  return (
    <section className="faq-area wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="faq-area-inner section-spacing-bottom">
          <div className="section-content">
            <div className="thumb wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
              <img src={data?.directionLeftVideo} alt="" />
              <a
                href="#"
                className="wc-btn wc-btn-circle video-popup pos-center"
              >
                <i className="fa-solid fa-play" />
              </a>
            </div>
            <div className="content-last wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title has_fade_anim">
                    {data?.directionRightTitle}
                  </h2>
                </div>
              </div>
              <div className="accordion-wrapper has_fade_anim">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        {data?.directionRightSubTitleOne}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {data?.directionRightDescriptionOne}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        {data?.directionRightSubTitleTwo}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {data?.directionRightDescriptionTwo}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        {data?.directionRightSubTitleThree}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {data?.directionRightDescriptionThree}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
