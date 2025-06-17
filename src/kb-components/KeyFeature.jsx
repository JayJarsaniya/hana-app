import React from "react";

const KeyFeature = ({ data }) => {
  const sectionDetails = data?.Section1details || [];

  return (
    <section className="kb-faq-area">
      <div className="container">
        <div className="kb-faq-area-inner section-spacing-top">
          <div className="section-content">
            <div
              className="thumb wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <img
                src={data?.Section1Image}
                className="has_fade_anim"
                data-fade-from="left"
                alt="image"
              />
            </div>
            <div
              className="content-last has_fade_anim wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">{data?.Section1Title}</h2>
                </div>
              </div>

              <div
                className="accordion-wrapper wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
              >
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {sectionDetails.map((item, index) => {
                    const contentItems = [];

                    for (let i = 1; i <= 5; i++) {
                      const subtitle = item[`Section1SubTitle${i}`];
                      const description = item[`Section1Description${i}`];

                      if (subtitle || description.trim() !== "") {
                        contentItems.push(
                          <p key={`desc-${i}`}>
                            {subtitle && <b>{subtitle} :</b>}{" "}
                            <span
                              dangerouslySetInnerHTML={{ __html: description }}
                            />
                          </p>
                        );
                      }
                    }

                    if (contentItems.length === 0) return null;

                    const delay = 0.4 + index * 0.1;

                    return (
                      <div
                        className="accordion-item wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${delay}s`}
                        key={index}
                      >
                        <h2
                          className="title accordion-header"
                          id={`flush-heading${index}`}
                        >
                          <button
                            className={`accordion-button ${
                              index === 0 ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#flush-collapse${index}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`flush-collapse${index}`}
                          >
                            {item.Section1Title || `Feature ${index + 1}`}
                          </button>
                        </h2>
                        <div
                          id={`flush-collapse${index}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          aria-labelledby={`flush-heading${index}`}
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">{contentItems}</div>
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

export default KeyFeature;
