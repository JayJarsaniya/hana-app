import React, { useEffect } from "react";

const AppsText = () => {
  useEffect(() => {
    const el = document.querySelector(".text-slider-active");
    let swiperInstance;
    if (el) {
      swiperInstance = new Swiper(el, {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 30,
        speed: 10000,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
        },
      });
    }
    return () => {
      if (swiperInstance) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <div className="container large has_fade_anim">
      <div className="text-slider">
        <div className="swiper text-slider-active">
          <div className="swiper-wrapper">
            {[...Array(5)].map((_, i) => (
              <div className="swiper-slide" key={i}>
                <div className="text-slider-item">
                  <h2 className="title">
                    Available now for all 
                    android and ios device
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsText;
