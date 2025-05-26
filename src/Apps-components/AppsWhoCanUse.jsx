import React from "react";

const AppsWhoCanUse = ({ data }) => {
  return (
    <section className="awards-area2">
      <div className="area-bg wow animate__animated animate__fadeIn" data-wow-duration="2.5s">
        <img
          src={
            "https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-6.webp"
          }
          alt="gallery image"
        />
      </div>
      <div className="container">
        <div className="awards-area2-inner section-spacing">
          <div className="title-wrapper">
            <h2
              className="section-title wow animate__animated animate__fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              dangerouslySetInnerHTML={{ __html: data.whoCanUseTitle }}
            />

            {data.whoCanUsedetails.map((item, index) => (
              <p
                key={index}
                style={{ color: "rgb(185, 185, 185)" }}
                className="text wow animate__animated animate__fadeInLeft"
                data-wow-duration="1.8s"
                data-wow-delay={`${0.3 + index * 0.1}s`}
              >
                {item.description3}
              </p>
            ))}
          </div>
        </div>
        <div
          className="award-img wow animate__animated animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay={`${0.3 + data.whoCanUsedetails.length * 0.1}s`}
        >
          <img src={data.whoCanUseImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AppsWhoCanUse;
