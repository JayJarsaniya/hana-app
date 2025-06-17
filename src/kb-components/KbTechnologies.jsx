import React from "react";

const KbTechnologies = ({ data }) => {
  
  return (
    <section className="kb-enterprise-area">
      <div className="px-5">
        <div className="kb-enterprise-area-inner section-spacing">
          <div className="section-header">
            <div className="text-wrapper">
              <p className="text wow animate__animated animate__fadeInUp">
                {data?.TechnologysTitle}
              </p>
            </div>
          </div>
          <div className="kb-expertise-wrapper-box">
            <div className="kb-expertise-wrapper">
              {data?.Technologysdetails?.map((item, index) => (
                <div
                  className={`kb-expertise-box wow animate__animated ${
                    index % 2 === 0
                      ? "animate__fadeInRight"
                      : "animate__fadeInLeft"
                  }`}
                  data-wow-delay={`${index * 0.2}s`}
                  key={index}
                >
                  <div className="icon">
                    <img
                      className="show-light"
                      src={item.TechnologysIcon}
                      alt={item.TechnologysTitle1}
                    />
                    <img
                      className="show-dark"
                      src={item.TechnologysIcon}
                      alt={item.TechnologysTitle1}
                    />
                  </div>
                  <p className="name">{item.TechnologysTitle1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KbTechnologies;
