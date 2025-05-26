import React from "react";

const Team = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  return (
    <section className="team-area home-team-area">
      <div className="container">
        <div className="team-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {homePage?.skillTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p
                className="text-center wow animate__animated animate__fadeIn"
                data-wow-delay="0.3s"
              >
                {homePage?.skillContent}
              </p>
            </div>
          </div>

          <div className="team-wrapper-box">
            <div className="team-wrapper">
              {homePage?.skill?.map((member, index) => {
                const delay = 0.2 + index * 0.15;
                return (
                  <div
                    className="team-box wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${delay}s`}
                    key={index}
                  >
                    <a href="#">
                      <div className="thumb">
                        <img src={member?.skillTeamImage} alt="team icon" />
                      </div>
                      <div className="content">
                        <h3 className={`title ${index === 3 ? "text-white" : ""}`}>
                          {member?.skillTeamName}
                        </h3>
                        <p className="text">{member?.skillTeamDesignation}</p>
                      </div>
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

export default Team;
