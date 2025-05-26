import React from "react";

const TeamCounter = ({ data }) => {
  return (
    <div className="counter-area">
      <div className="counter-area-inner">
        <div
          className="thumb has_fade_anim wow animate__animated animate__fadeIn"
          data-wow-delay="0.1s"
        >
          <img src={data?.satisfiedMainImage} alt="image" />
        </div>
        <div className="counter-wrapper-box">
          <div className="counter-wrapper">
            <div
              className="thumb overflow-hidden has_fade_anim wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.3s"
            >
              <img
                src={data?.satisfiedLeftImageOne}
                data-speed="0.9"
                alt="image"
              />
            </div>
            <div
              className="counter-box has_fade_anim wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <h2 className="text">{data?.satisfiedBackgroundImageTitleOne}</h2>
              <h2 className="number wc-counter">
                {data?.satisfiedBackgroundImageCountOne}
                {data?.satisfiedBackgroundImageCountTwo}
              </h2>
            </div>
            <div
              className="counter-box dark has_fade_anim wow animate__animated animate__fadeInUp"
              data-wow-delay="0.7s"
            >
              <h2 className="text">{data?.satisfiedBackgroundImageTitleTwo}</h2>
              <h2 className="number wc-counter">
                {data?.satisfiedBackgroundImageCountFour}
              </h2>
            </div>
            <div
              className="thumb overflow-hidden has_fade_anim wow animate__animated animate__fadeInRight"
              data-wow-delay="0.3s"
            >
              <img
                src={data?.satisfiedLeftImageTwo}
                data-speed="0.9"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCounter;
