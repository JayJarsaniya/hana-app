import React from "react";

const Pricing = ({ data }) => {
  return (
    <section className="pricing-area wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="pricing-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title has_fade_anim">
                  {data?.specialTeamTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="pricing-wrapper-box">
            <div className="pricing-wrapper">
              {data?.specialOfferTable?.map((plan, index) => {
                const features = Object.keys(plan)
                  .filter((key) => key.startsWith("specialTeamTableList"))
                  .map((key) => plan[key]);

                return (
                  <div
                    className="pricing-box has_fade_anim wow animate__animated animate__fadeInUp"
                    data-fade-from="left"
                    data-delay={`0.${(index + 1) * 15}`} // delay like 0.15, 0.30...
                    data-wow-delay={`${0.2 + index * 0.15}s`}
                    key={index}
                  >
                    <span className="tag">
                      {plan.specialOfferTableSubTitle}
                    </span>
                    <h3 className="price">{plan.specialOfferTablePrice}</h3>
                    <div className="feature-list">
                      <ul>
                        {features.map((feature, i) => (
                          <li key={i}>
                            <img
                              className="show-light"
                              src="https://crowdytheme.com/html/arolax/assets/imgs/icon/check-2.webp"
                              alt="icon"
                            />
                            <img
                              className="show-dark"
                              src="https://crowdytheme.com/html/arolax/assets/imgs/icon/check-2-light.webp"
                              alt="icon"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="wc-btn-primary btn-text-flip bordered"
                    >
                      <span data-text="Learn More">Learn More</span>
                    </a>
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

export default Pricing;
