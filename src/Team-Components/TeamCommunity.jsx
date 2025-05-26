import React from "react";

const TeamCommunity = ({ data }) => {
  return (
    <section className="community-area">
      <div className="container">
        <div className="community-area-inner section-spacing">
          <div className="section-content">
            <div className="section-title-wrapper has_fade_anim wow animate__animated animate__fadeInDown" data-wow-delay="0.1s">
              <div className="title-wrapper">
                <h2 className="section-title">
                  {data?.futureTitle}{" "}
                </h2>
              </div>
            </div>
            <div className="text-wrapper has_fade_anim wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s">
              <p className="text">
                {data?.futureContent}
              </p>
            </div>
            <div className="gallery-wrapper-box">
              <div className="gallery-wrapper has_fade_anim wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                <div className="">
                  <div className="thumb">
                    <img
                      src={data?.futureImageOne}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="thumb">
                    <img
                      src={data?.futureImageTwo}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="thumb">
                    <img
                      src={data?.futureImageThree}
                      alt="image"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src={data?.futureImageFour}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCommunity;
