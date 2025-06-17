import React, { useId } from "react";

const KbDemo = ({ data }) => {
  const idPrefix = useId();
  const details = data?.Section6details || [];

  return (
    <section className="kb-pricing-area kb-demo-area">
      <div className="container">
        <div className="kb-pricing-area-inner section-spacing">
          <div className="section-title-wrapper">
            <div className="title-wrapper">
              <h2 className="section-title wow animate__animated animate__fadeInUp has_text_move_anim" data-wow-delay="0.1s">
                {data?.Section6Title}
              </h2>
            </div>
          </div>

          <div className="section-header">
            <div
              className="accordion-wrapper wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="accordion accordion-flush" id={`${idPrefix}-accordionFlushDemo`}>
                {details.map((item, idx) => {
                  const headingId = `${idPrefix}-flush-heading${idx}`;
                  const collapseId = `${idPrefix}-flush-collapse${idx}`;
                  const delay = 0.3 + idx * 0.1;

                  const descriptions = [];
                  for (let i = 1; i <= 5; i++) {
                    const subTitle = item[`Section6SubTitle${i}`];
                    const description = item[`Section6Description${i}`];

                    if (subTitle || description) {
                      const htmlContent = `${subTitle ? `<strong>${subTitle}:</strong> ` : ""}${description || ""}`;
                      descriptions.push(
                        <p
                          key={i}
                          className="text"
                          dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                      );
                    }
                  }

                  return (
                    <div
                      className="accordion-item wow animate__animated animate__fadeInUp"
                      data-wow-delay={`${delay}s`}
                      key={idx}
                    >
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className={`accordion-button ${idx !== 0 ? "collapsed" : ""} title`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={idx === 0 ? "true" : "false"}
                          aria-controls={collapseId}
                        >
                          {item.Section6Title || `Item ${idx + 1}`}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                        aria-labelledby={headingId}
                        data-bs-parent={`#${idPrefix}-accordionFlushDemo`}
                      >
                        <div className="accordion-body">
                          {descriptions.length > 0 ? descriptions : (
                            <p className="text">No description available.</p>
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
    </section>
  );
};

export default KbDemo;
