import React from "react";
import img2 from '../assets/test1.png'

const KbHero = ({data}) => {
  return (
    <section className="kb-hero-area wow animate__animated animate__fadeInDown animate__slow">
      <div className="container">
        <div className="kb-hero-area-inner2">
          <div className="section-content">
            {/* <div
              className="image-wrapper wow animate__animated animate__zoomIn animate__delay-1s"
              data-wow-duration="1.2s"
            >
              <img src={img2} alt="" />
            </div> */}
            <div className="section-title-wrapper">
              <div
                className="title-wrapper wow animate__animated animate__bounceInLeft animate__delay-1s"
                data-wow-duration="1.5s"
              >
                <h1 className="section-title large has_text_move_anim">
                 {data?.bannerTitle}
                </h1>
              </div>
            </div>
            <div
              className="text-wrapper wow animate__animated animate__fadeInUp animate__delay-2s"
              data-wow-duration="1.5s"
            >
              <p className="text has_fade_anim">
               {data?.bannerDescription}
              </p>
            </div>
            <div
              className="icon has_fade_anim wow animate__animated animate__pulse animate__infinite"
              data-on-scroll={0}
              data-wow-duration="3s"
            >
              <img
                className="show-light"
                src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-82.webp"
                alt="image"
              />
            </div>
          </div>
          <div
            className="thumb wow animate__animated animate__fadeInRight animate__delay-1s"
            data-wow-duration="1.5s"
          >
            <img
              src={data?.bannerImage}
              className="has_fade_anim"
              data-fade-offset={0}
              data-delay="0.45"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KbHero;
