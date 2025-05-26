import React from "react";
import img1 from '../wp-content/icon/3d-report.png';
import img2 from '../wp-content/icon/3d-map.png';
import img3 from '../wp-content/icon/3d-modeling.png';
import img4 from '../wp-content/icon/3d-alarm.png';
import img5 from '../wp-content/icon/idea.png';
import img6 from '../wp-content/icon/3d-discount.png';
import img7 from '../wp-content/icon/3d-truck.png';
import img8 from '../wp-content/icon/3d-designing.png';

const AppsService = ({data}) => {
  return (
    <section className="service-area2">
      <div className="container">
        <div className="service-area2-inner section-spacing-bottom">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-10.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-2">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-9.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-3">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-12.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-4">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-11.webp"
              alt="shape image"
            />
          </div>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has-left-line has_fade_anim">
                  Standard Features
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  Services we provide
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text has_fade_anim">
                {data?.featureDescription}
              </p>
            </div>
          </div>
          <div className="services-wrapper-box">
            <div className="services-wrapper">
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="0.15s">
                <span className="number">01</span>
                <div className="thumb">
                  <img
                    src={img1}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">Earnings Report</h2>
                </div>
              </div>
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="0.30s">
                <span className="number">02</span>
                <div className="thumb">
                  <img
                    src={img2}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">Location Fetching</h2>
                </div>
              </div>
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="0.45s">
                <span className="number">03</span>
                <div className="thumb">
                  <img
                    src={img3}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">Easy To Customize</h2>
                </div>
              </div>
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="0.60s">
                <span className="number">04</span>
                <div className="thumb">
                  <img
                    src={img4}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">Round Clock Service</h2>
                </div>
              </div>
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="0.75s">
                <span className="number">05</span>
                <div className="thumb">
                  <img
                    src={img5}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">Support</h2>
                </div>
              </div>
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="0.90s">
                <span className="number">06</span>
                <div className="thumb">
                  <img
                    src={img6}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">Offer Management</h2>
                </div>
              </div>
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="1.05s">
                <span className="number">07</span>
                <div className="thumb">
                  <img
                    src={img7}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">Delivery Information</h2>
                </div>
              </div>
              <div className="service-box2 wow animate__animated animate__fadeInUp" data-wow-delay="1.20s">
                <span className="number">08</span>
                <div className="thumb">
                  <img
                    src={img8}
                    alt="service image"
                  />
                </div>
                <div className="content">
                  <h2 className="section-title">SEO Friendly</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsService;
