import React from "react";

const KbWorkflow = ({ data }) => {
  const sectionDetails = data?.Section4details || [];

  return (
    <section className="kb-pricing-area">
      <div className="container">
        <div className="kb-pricing-area-inner section-spacing">
          <div
            className="section-title-wrapper wow animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="title-wrapper">
              <h2 className="section-title has_text_move_anim">
                {data?.Section4Title}
              </h2>
            </div>
          </div>

          <div className="section-header">
            <div
              className="accordion-wrapper has_fade_anim wow animate__animated animate__fadeInUp"
              data-fade-from="left"
              data-wow-delay="0.2s"
            >
              <div
                className="accordion accordion-flush"
                id="accordionFlushWorkflow"
              >
                {sectionDetails.map((item, index) => {
                  const contentItems = [];

                  for (let i = 1; i <= 5; i++) {
                    const subtitle = item[`Section4SubTitle${i}`];
                    const description = item[`Section4Description${i}`];

                    if (description && description.trim() !== "") {
                      contentItems.push(
                        <p key={`desc-${i}`} className="text">
                          {subtitle && <b>{subtitle} :</b>}{" "}
                          <span
                            dangerouslySetInnerHTML={{ __html: description }}
                          />
                        </p>
                      );
                    }
                  }

                  if (contentItems.length === 0) return null;

                  const delay = 0.3 + index * 0.1;

                  return (
                    <div
                      className="accordion-item wow animate__animated animate__fadeInUp"
                      data-wow-delay={`${delay}s`}
                      key={index}
                    >
                      <h2
                        className="accordion-header"
                        id={`flush-heading4-${index}`}
                      >
                        <button
                          className={`accordion-button title ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse4-${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`flush-collapse4-${index}`}
                        >
                          {item.Section4Title || `Workflow ${index + 1}`}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse4-${index}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`flush-heading4-${index}`}
                        data-bs-parent="#accordionFlushWorkflow"
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
    </section>
  );
};

export default KbWorkflow;
