import React from "react";

const TeamSection = ({ data }) => {
  const teamList = data?.BringingTable || [];

  return (
    <section className="team-area">
      <div className="container">
        <div className="team-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title section-title2 has_text_move_anim wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {data?.bringingTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper team-text wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s">
              <p className="text has_fade_anim">{data?.bringingContent}</p>
            </div>
          </div>

          <div className="team-wrapper-box">
            <div className="team-wrapper">
              {teamList.map((member, index) => (
                <div
                  className="team-box has_fade_anim wow animate__animated animate__fadeInUp"
                  data-wow-delay={`${0.15 + (index % 4) * 0.15}s`}
                  key={index}
                >
                  <a href="#">
                    <div className="thumb">
                      <img
                        src={member.bringingTableImage}
                        alt={member.bringingTableName}
                      />
                    </div>
                    <div className="content">
                      <h3 className="title team-title2">{member.bringingTableName}</h3>
                      <p className="text">{member.bringingTableSubTitle}</p>
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

export default TeamSection;
