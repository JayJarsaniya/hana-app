import React, { useEffect, useRef } from "react";

const Clieants = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;
  const swiperInstancesRef = useRef({});

  useEffect(() => {
    // Destroy any existing Swiper instances before reinitializing
    Object.values(swiperInstancesRef.current).forEach((swiper) => {
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    });
    swiperInstancesRef.current = {};

    const initSwipers = () => {
      // Client slider
      const clientWrapper = document.querySelector(
        ".client-slider-active .swiper-wrapper"
      );
      if (clientWrapper && clientWrapper.children.length > 0) {
        swiperInstancesRef.current.clientSlider = new Swiper(
          ".client-slider-active",
          {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 130,
            speed: 3000,
            autoplay: {
              delay: 1,
              disableOnInteraction: false,
            },
          }
        );
      }

      // Work slider
      const workWrapper = document.querySelector(
        ".work-slider-active .swiper-wrapper"
      );
      if (workWrapper && workWrapper.children.length > 0) {
        swiperInstancesRef.current.workSlider = new Swiper(
          ".work-slider-active",
          {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 10,
            speed: 3000,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },
          }
        );
      }

      // Testimonial slider
      const testimonialWrapper = document.querySelector(
        ".testimonial-slider-active .swiper-wrapper"
      );
      if (testimonialWrapper && testimonialWrapper.children.length > 0) {
        swiperInstancesRef.current.testimonialSlider = new Swiper(
          ".testimonial-slider-active",
          {
            effect: "cards",
            grabCursor: true,
            perSlideOffset: 50,
            rotate: false,
            perSlideRotate: 10,
            navigation: {
              prevEl: ".testimonial-button-prev",
              nextEl: ".testimonial-button-next",
            },
          }
        );
      }
    };

    const timeoutId = setTimeout(initSwipers, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [homePage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(swiperInstancesRef.current).forEach((swiper) => {
        if (swiper && swiper.destroy) {
          swiper.destroy(true, true);
        }
      });
    };
  }, []);

  return (
    <div className="container-hd">
      <div className="clients-area">
        <div className="container">
          <div className="clients-area-inner">
            <div className="shape-1">
              <img
                src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-65.webp"
                alt="shape"
              />
            </div>
            <div className="client-slider has_fade_anim">
              <div className="swiper client-slider-active">
                <div className="swiper-wrapper">
                  {[
                    "SwiperImageOne",
                    "SwiperImageTwo",
                    "SwiperImageThree",
                    "SwiperImageFour",
                    "SwiperImageFive",
                    "SwiperImageSix",
                    "SwiperImageSeven",
                    "SwiperImageEight",
                    "SwiperImageNine",
                    "SwiperImageTen",
                  ].map((key, index) =>
                    homePage?.[key] ? (
                      <div
                        key={key}
                        className="swiper-slide wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${index * 0.1}s`}
                      >
                        <div className="client-box">
                          <img
                            src={homePage[key]}
                            alt="client image"
                            height={40}
                            onLoad={() => {
                              // Optional: update Swiper layout after image load
                              if (
                                swiperInstancesRef.current.clientSlider &&
                                swiperInstancesRef.current.clientSlider.update
                              ) {
                                swiperInstancesRef.current.clientSlider.update();
                              }
                            }}
                          />
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clieants;
