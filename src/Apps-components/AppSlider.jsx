import React, { useEffect } from "react";

const AppSlider = ({ data }) => {
  useEffect(() => {
    if (".portfolio-slider") {
      const sliderEl = document.querySelector(".portfolio-slider");

      createSpringSlider(sliderEl, {
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
          prevEl: ".portfolio-button-prev",
          nextEl: ".portfolio-button-next",
        },
        pagination: {
          el: ".portfolio-pagination",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        },
      });
    }

    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      <section className="portfolio-area">
        <div className="container">
          <div className="portfolio-area-inner">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2
                    className="section-title wow animate__animated animate__fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    {data.sliderTitle}
                  </h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p
                  className="text wow animate__animated animate__fadeInUp"
                  style={{ color: "rgb(185, 185, 185)" }}
                  data-wow-duration="2.2s"
                  data-wow-delay="0.6s"
                >
                  {data.sliderDescription}
                </p>
              </div>
            </div>
            <div
              className="portfolio-slider wow animate__animated animate__fadeInLeft"
              data-wow-duration="2.5s"
              data-wow-delay="0.8s"
            >
              <div className="swiper">
                <div className="swiper-wrapper">
                  {data.sliderdetails.map((item, index) => (
                    <div
                      className="swiper-slide wow animate__animated animate__zoomIn"
                      key={index}
                      data-wow-duration="1s"
                      data-wow-delay={`${0.1 + index * 0.2}s`}
                    >
                      <img src={item.sliderImages} alt={`slide-${index}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="slider-nav overflow-hidden">
                <div
                  className="portfolio-button-prev nav-icon wow animate__animated animate__fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  <i className="fa-solid fa-angle-left" />
                  Prev
                </div>
                <div
                  className="portfolio-button-next nav-icon wow animate__animated animate__fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  Next
                  <i className="fa-solid fa-angle-right" />
                </div>
              </div>
              <div
                className="portfolio-pagination wow animate__animated animate__fadeInUp"
                data-wow-duration="2.2s"
                data-wow-delay="1.2s"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppSlider;
