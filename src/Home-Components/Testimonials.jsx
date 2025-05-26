import React from "react";

const Testimonials = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  return (
    <section className="testimonial-area home-testimonial-area">
      <div className="container">
        <div className="testimonial-area-inner section-spacing">
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2
                  className="section-title wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {homePage?.trustedClientsTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p
                className="text wow animate__animated animate__fadeIn"
                data-wow-delay="0.3s"
              >
                {homePage?.trustedClientsContent}
              </p>
            </div>
            <div
              className="btn-wrapper wow animate__animated animate__bounceInUp"
              data-wow-delay="0.4s"
            >
              <div className="btn-wrapper btn-move">
                <a
                  href="#"
                  className="wc-btn wc-btn-circle btn-hover-bgchange btn-item"
                >
                  Explore Us <br />
                  More
                </a>
              </div>
            </div>
          </div>

          <div className="testimonial-wrapper-box">
            <div className="testimonial-wrapper">
              <div
                className="swiper testimonial-slider-active wow animate__animated animate__fadeInRight"
                data-wow-delay="0.5s"
              >
                <div className="swiper-wrapper">
                  {/* Testimonial 1 */}
                  <div className="swiper-slide">
                    <div className="testimonial-box">
                      <div className="content">
                        <span className="rating">
                          <img
                            src={homePage?.ratingImageOne}
                            alt="icon"
                          />
                        </span>
                        <p className="text">
                          {homePage?.clientFeedBackOne?.substring(0, 180)}...
                        </p>
                        <div className="icon">
                          <img
                            src="https://crowdytheme.com/html/arolax/assets/imgs/icon/quote-9.webp"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="author">
                        <div className="avatar">
                          <img
                            src={homePage?.clientImageOne}
                            alt="image"
                          />
                        </div>
                        <div>
                          <h2 className="name">{homePage?.clientNameOne}</h2>
                          <span className="meta-title">
                            {homePage?.clientDesignationOne}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="swiper-slide">
                    <div className="testimonial-box">
                      <div className="content">
                        <span className="rating">
                          <img
                            src={homePage?.ratingImageTwo}
                            alt="icon"
                          />
                        </span>
                        <p className="text">{homePage?.clientFeedBackTwo}</p>
                        <div className="icon">
                          <img
                            src="https://crowdytheme.com/html/arolax/assets/imgs/icon/quote-9.webp"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="author">
                        <div className="avatar">
                          <img
                            src={homePage?.clientImageTwo}
                            alt="image"
                          />
                        </div>
                        <div>
                          <h2 className="name">{homePage?.clientNameTwo}</h2>
                          <span className="meta-title">
                            {homePage?.clientDesignationTwo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="slider-nav wow animate__animated animate__fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="testimonial-button-prev nav-icon">
                  <i className="fa-solid fa-arrow-left" />
                </div>
                <div className="testimonial-button-next nav-icon">
                  <i className="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
