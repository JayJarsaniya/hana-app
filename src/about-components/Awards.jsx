import React from "react";

const Awards = ({ data }) => {
  return (
    <section className="awards-area">
      <div className="container">
        <div className="awards-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has-left-line wow animate__animated animate__fadeInLeft">
                  {data?.storableSubTitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title wow animate__animated animate__fadeInUp">
                  {data?.storableTitle}
                </h2>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="text-wrapper">
              <p className="text wow animate__animated animate__fadeInLeft">
                {data?.storableContent}
              </p>
            </div>

            <div className="awards-list wow animate__animated animate__fadeInUp">
              <ul>
                <li>
                  <div className="meta">
                    <div className="icon">
                      <img
                        className="show-light"
                        src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-40.webp"
                        alt="icon"
                      />
                      <img
                        className="show-dark"
                        src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-40-light.webp"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="number wc-counter">
                        {data?.iconBoxTitleOne}
                      </h3>
                      <p className="text">{data?.iconBoxDescriptionOne}</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="meta">
                    <div className="icon">
                      <img
                        className="show-light"
                        src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-41.webp"
                        alt="icon"
                      />
                      <img
                        className="show-dark"
                        src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-41-light.webp"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="number wc-counter">
                        {data?.iconBoxTitleTwo}
                      </h3>
                      <p className="text">{data?.iconBoxDescriptionTwo}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-thumbs">
            <div
              className="thumb-first wow animate__animated animate__zoomIn"
              data-wow-delay="0.3s"
            >
              <img src={data?.storableImageOne} alt="image" />
            </div>
            <div
              className="thumb-second wow animate__animated animate__zoomIn"
              data-wow-delay="0.5s"
            >
              <img src={data?.storableImageTwo} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
