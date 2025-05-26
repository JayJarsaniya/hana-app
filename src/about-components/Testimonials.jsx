import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = ({ data }) => {
  useEffect(() => {
    new Swiper(".testimonial-slider", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 60,
      speed: 1800,
      navigation: {
        prevEl: ".testimonial-button-prev",
        nextEl: ".testimonial-button-next",
      },
    });
  }, []);

  return (
    <div className="testimonial-area wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
      <div className="container">
        <div className="testimonial-area-inner section-spacing">
          <div className="testimonial-wrapper-box">
            <div className="testimonial-wrapper wow animate__animated animate__fadeInRight" data-wow-delay="0.4s">
              <div className="swiper testimonial-slider">
                <div className="swiper-wrapper">
                  {data?.slider?.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="testimonial-item wow animate__animated animate__fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`}>
                        <div className="content">
                          <div className="icon">
                            <img
                              className="quote-icon show-light"
                              src="https://crowdytheme.com/html/arolax/assets/imgs/icon/quote-5.webp"
                              alt="Quote Icon"
                            />
                            <img
                              className="quote-icon show-dark"
                              src="https://crowdytheme.com/html/arolax/assets/imgs/icon/quote-5-light.webp"
                              alt="Quote Icon"
                            />
                          </div>
                          <div className="text-wrapper">
                            <p className="text">
                              {item.developerDescription}
                            </p>
                          </div>
                          <div className="author">
                            <div className="meta">
                              <span className="name">{item.developerName}</span>
                              <span className="post">{item.developerDesignation}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="slider-nav wow animate__animated animate__fadeInLeft" data-wow-delay="0.6s">
              <div className="testimonial-button-prev nav-icon">
                <img
                  className="show-light"
                  src="https://crowdytheme.com/html/arolax/assets/imgs/icon/angle-left.webp"
                  alt="icon"
                />
                <img
                  className="show-dark"
                  src="https://crowdytheme.com/html/arolax/assets/imgs/icon/angle-left-light.webp"
                  alt="icon"
                />
              </div>
              <div className="testimonial-button-next nav-icon">
                <img
                  className="show-light"
                  src="https://crowdytheme.com/html/arolax/assets/imgs/icon/angle-right.webp"
                  alt="icon"
                />
                <img
                  className="show-dark"
                  src="https://crowdytheme.com/html/arolax/assets/imgs/icon/angle-right-light.webp"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
