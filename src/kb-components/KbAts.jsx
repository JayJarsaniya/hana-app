import React from "react";

const KbAts = ({ data }) => {
  const title = data?.Section5Title || "Who Uses HANARAD ATS?";
  const details = data?.Section5details || [];

  return (
    <section className="kb-ats-area">
      <div className="container">
        <div className="kb-ats-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          <div className="services-wrapper-box">
            <div className="services-wrapper">
              {details.map((item, index) => {
                const delay = 0.2 + index * 0.1;

                return (
                  <div
                    key={index}
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${delay}s`}
                  >
                    <div className="kb-ats-box">
                      <span className="number">{`0${index + 1}`}</span>
                      <div className="content-wrapper">
                        <div className="content">
                          <h2 className="title">{item.Section5Title}</h2>
                          {[1, 2, 3].map((num) => {
                            const desc = item[`Section5Description${num}`];
                            return desc ? (
                              <p
                                key={num}
                                className="text"
                                dangerouslySetInnerHTML={{ __html: desc }}
                              />
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KbAts;
