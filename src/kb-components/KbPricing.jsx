import React from "react";

const KbPricing = ({ data }) => {
  const pricingDetails = data?.Pricingdetails || [];

  return (
    <section className="kb-result-area">
      <div className="container">
        <div className="kb-result-area-inner">
          <div className="results-wrapper-box has_fade_anim wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div className="results-wrapper">
              {pricingDetails.map((plan, index) => {
                const delay = 0.2 + index * 0.1;

                return (
                  <div
                    className="result-box wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${delay}s`}
                    key={index}
                  >
                    <h4 className="title mb-3">{plan.PlanTitle}</h4>
                    <span className="number">
                      ${plan.PlanPrice.toLocaleString()}{" "}
                      <span className="kb-result-area-span">
                        ({plan.PayingTerms})
                      </span>
                    </span>
                    <p className="text">{plan.PlanDescription}</p>
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

export default KbPricing;
