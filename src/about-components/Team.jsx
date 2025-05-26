import React from "react";

const Team = ({ data }) => {
  return (
    <section className="team-area home-team-area">
      <div className="container">
        <div className="team-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title has_fade_anim wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {data?.qualityTeamTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p
                className="text has_fade_anim wow animate__animated animate__fadeIn"
                data-wow-delay="0.3s"
                dangerouslySetInnerHTML={{
                  __html: data?.qualityTeamDescription,
                }}
              />
            </div>
          </div>
          <div className="team-wrapper-box">
            <div className="team-wrapper">
              {data?.qualityTeamTable?.map((member, index) => (
                <div
                    className="team-box wow animate__animated animate__fadeInUp"
                    key={member.skillId}
                  >
                
                  <a href="#">
                    <div className="thumb">
                      <img src={member.qualityTeamTableImage} alt="team icon" />
                    </div>
                    <div className="content">
                      <h3 className="title">{member.qualityTeamTableName}</h3>
                      <p className="text">{member.qualityTeamTableTitle}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
