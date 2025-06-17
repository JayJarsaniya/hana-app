import React, { useEffect, useRef } from "react";

const Work = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;
  const swiperInstancesRef = useRef([]);

  useEffect(() => {
    // Destroy previous Swiper instances
    swiperInstancesRef.current.forEach((swiper) => {
      if (swiper?.destroy) swiper.destroy(true, true);
    });
    swiperInstancesRef.current = [];

    const initSwipers = () => {
      const sliders = document.querySelectorAll(".work-slider-active");

      sliders.forEach((slider) => {
        const wrapper = slider.querySelector(".swiper-wrapper");

        // Only init Swiper if .swiper-wrapper exists and has slides
        if (wrapper && wrapper.children.length > 0) {
          const swiper = new Swiper(slider, {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 10,
            speed: 3000,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },
            reverseDirection: slider.getAttribute("dir") === "rtl",
          });
          swiperInstancesRef.current.push(swiper);
        }
      });
    };

    const timeoutId = setTimeout(initSwipers, 100);
    return () => clearTimeout(timeoutId);
  }, [homePage?.caseStudy]);

  useEffect(() => {
    return () => {
      swiperInstancesRef.current.forEach((swiper) => {
        if (swiper?.destroy) swiper.destroy(true, true);
      });
    };
  }, []);

  const isVideoFile = (url) => {
    const videoExt = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
    return url && videoExt.some((ext) => url.toLowerCase().includes(ext));
  };

  const renderWorkSlides = (start, end) => {
    return homePage?.caseStudy?.slice(start, end).map((item, i) => {
      const isVideo = isVideoFile(item.projectImage);
      return (
        <div className="swiper-slide" key={`work-${start}-${i}`}>
          <a href="#">
            <div
              className="work-box wow animate__animated animate__fadeInUp"
              data-wow-delay={`${i * 0.2}s`}
            >
              <div className="thumb">
                {isVideo ? (
                  <video
                    src={item.projectImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={() =>
                      swiperInstancesRef.current.forEach((s) => s?.update?.())
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={item.projectImage}
                    alt="project"
                    onLoad={() =>
                      swiperInstancesRef.current.forEach((s) => s?.update?.())
                    }
                  />
                )}
              </div>
              <div className="content">
                <div className="icon">
                  <img
                    src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-69.webp"
                    alt="icon"
                  />
                </div>
                <h3 className="title">{item.projectTitle}</h3>
                <span className="meta">{item.projectContent}</span>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <div className="work-area work-area-2">
      <div className="container-hd">
        <div className="work-area-inner">
          <div className="works-wrapper-box">
            <div className="works-wrapper">
              {/* Slider 1: Left to Right */}
              <div className="swiper work-slider-active">
                <div className="swiper-wrapper">
                  {renderWorkSlides(0, 5)}
                </div>
              </div>

              {/* Slider 2: Right to Left */}
              <div className="swiper work-slider-active" dir="rtl">
                <div className="swiper-wrapper">
                  {renderWorkSlides(5, 10)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
