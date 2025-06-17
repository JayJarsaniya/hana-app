import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = ({ data }) => {
  const swiperRef = useRef(null);

  const goToPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Add custom styles to prevent button disabling
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .testimonial-button-prev,
      .testimonial-button-next {
        opacity: 1 !important;
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      .swiper-button-disabled-custom {
        opacity: 1 !important;
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="testimonial-area">
      <div className="container">
        <div className="testimonial-area-inner section-spacing">
          <div className="testimonial-wrapper-box">
            <div className="testimonial-wrapper">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                loop={data?.slider?.length > 1}
                loopAdditionalSlides={data?.slider?.length}
                slidesPerView={1}
                spaceBetween={60}
                speed={1800}
                allowTouchMove={true}
                watchOverflow={false}
                navigation={{
                  prevEl: ".testimonial-button-prev",
                  nextEl: ".testimonial-button-next",
                  disabledClass: "swiper-button-disabled-custom",
                }}
                className="testimonial-slider"
              >
                {data?.slider?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
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
                          <p className="text">{item.developerDescription}</p>
                        </div>
                        <div className="author">
                          <div className="meta">
                            <span className="name">{item.developerName}</span>
                            <span className="post">
                              {item.developerDesignation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation Buttons */}
            <div className="slider-nav">
              <button
                className="testimonial-button-prev nav-icon"
                type="button"
                aria-label="Previous slide"
                onClick={goToPrev}
              >
                <img
                  className="show-light"
                  src="https://crowdytheme.com/html/arolax/assets/imgs/icon/angle-left.webp"
                  alt="left"
                />
              </button>
              <button
                className="testimonial-button-next nav-icon"
                type="button"
                aria-label="Next slide"
                onClick={goToNext}
              >
                <img
                  className="show-light"
                  src="https://crowdytheme.com/html/arolax/assets/imgs/icon/angle-right.webp"
                  alt="right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
