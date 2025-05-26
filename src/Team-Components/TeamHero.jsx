import React from "react";

const TeamHero = ({ data }) => {
  return (
    <>
      <section className="hero-area">
        <div className="container large">
          <div className="hero-area-inner">
            <div className="section-content">
              <div
                className="btn-wrapper has_fade_anim wow animate__animated animate__fadeInLeft"
                data-wow-delay="0.1s"
                data-fade-from="left"
              >
                <a href="#" className="wc-btn wc-btn-underline team-hero-left-content text">
                  {data?.workTogetherLeftContent}
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
              <div className="content-last">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h1
                      className="section-title large has_text_move_anim wow animate__animated animate__fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      {data?.workTogetherRightTitle}
                    </h1>
                  </div>
                </div>
                <div
                  className="text-wrapper wow animate__animated animate__fadeInLeft"
                  data-wow-delay="0.5s"
                  data-fade-from="left"
                >
                  <p className="text">{data?.workTogetherRightContent}</p>
                </div>
                <div
                  className="fun-fact has_fade_anim wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.7s"
                  data-fade-from="bottom"
                >
                  <span className="number wc-counter title">
                    {data?.workTogetherCountNumberOne}
                    {data?.workTogetherCountNumberTwo}
                  </span>
                  <p className="text">{data?.workTogetherSubTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="image-wrapper">
        <div className="container large">
          <div className="p-relative">
            <div
              className="experience has_fade_anim wow animate__animated animate__fadeInDown"
              data-wow-delay="0.9s"
              data-fade-from="top"
              data-ease="bounce"
            >
              <h2 className="number wc-counter title">
                {data?.expertiseEmployeesCountNumber}
                {data?.expertiseEmployeesCountNumberTwo}
              </h2>
              <h2 className="text">
                {data?.expertiseEmployeesTitle?.replace(/<br\s*\/?>/gi, " ")}
              </h2>
            </div>
          </div>
        </div>
        <img
          className="w-100 has_fade_anim wow animate__animated animate__fadeIn"
          data-wow-delay="1.1s"
          data-on-scroll={0}
          src={data?.expertiseEmployeesImage}
          alt="image"
        />
      </div>
    </>
  );
};

export default TeamHero;
