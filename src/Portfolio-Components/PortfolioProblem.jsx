import React from "react";

const PortfolioProblem = ({ data }) => {
  const problemImage = data?.ProblemImage || "";
  const problemTitle = data?.ProblemTitle || "The Problem";
  const problemDescription = data?.ProblemDescription || "";
  const problemDetails = data?.ProblemDetails || [];
  const uniqueIdPrefix = data?.ProblemIdPrefix || "problem"; 

  return (
    <section className="portfolio-faq-area">
      <div className="container">
        <div className="portfolio-faq-area-inner section-spacing-top">
          <div className="section-content">
            <div
              className="thumb wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                src={problemImage}
                className="has_fade_anim"
                data-fade-from="left"
                alt="Problem Illustration"
              />
            </div>
            <div
              className="content-last has_fade_anim wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">{problemTitle}</h2>
                </div>
              </div>

              {problemDescription && (
                <p className="problem-overall-description mb-4 pt-3">
                  {problemDescription}
                </p>
              )}

              <div
                className="accordion-wrapper wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
              >
                <div
                  className="accordion accordion-flush"
                  id={`${uniqueIdPrefix}-accordion`}
                >
                  {problemDetails.map((item, index) => {
                    const delay = 0.4 + index * 0.1;
                    const itemId = `${uniqueIdPrefix}-item-${index}`;

                    return (
                      <div
                        className="accordion-item wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${delay}s`}
                        key={itemId}
                      >
                        <h2
                          className="title accordion-header"
                          id={`${itemId}-heading`}
                        >
                          <button
                            className={`accordion-button ${
                              index === 0 ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${itemId}-collapse`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`${itemId}-collapse`}
                          >
                            {item.ProblemTitle2 || `Problem ${index + 1}`}
                          </button>
                        </h2>
                        <div
                          id={`${itemId}-collapse`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          aria-labelledby={`${itemId}-heading`}
                          data-bs-parent={`#${uniqueIdPrefix}-accordion`}
                        >
                          <div className="accordion-body">
                            {item.ProblemDescription2 && (
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item.ProblemDescription2,
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProblem;
