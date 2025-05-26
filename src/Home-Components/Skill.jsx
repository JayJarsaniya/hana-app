import React from "react";

const Skill = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  return (
    <section className="skill-area">
      <div className="container">
        <div className="skill-area-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title wow animate__animated animate__fadeInUp">
                  {homePage?.empoweringSkillsTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                {homePage?.empoweringSkillsContent}
              </p>
            </div>
          </div>

          <div className="skills-wrapper-box">
            <div className="skills-wrapper">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {[
                  { id: 1, img: homePage?.tabImgOne, title: homePage?.tabTitleOne, content: homePage?.tabContentOne },
                  { id: 2, img: homePage?.tabImgTwo, title: homePage?.tabTitleTwo, content: homePage?.tabContentTwo },
                  { id: 3, img: homePage?.tabImgThree, title: homePage?.tabTitleThree, content: homePage?.tabContentThree },
                  { id: 4, img: homePage?.tabImgFour, title: homePage?.tabTitleFour, content: homePage?.tabContentFour }
                ].map((tab, index) => (
                  <li className="nav-item wow animate__animated animate__fadeInUp" data-wow-delay={`${0.2 * index}s`} role="presentation" key={tab.id}>
                    <div
                      className={`nav-link ${index === 0 ? 'active' : ''}`}
                      id={`pills-${tab.id}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#pills-${tab.id}`}
                      role="tab"
                      aria-controls={`pills-${tab.id}`}
                      aria-selected={index === 0 ? "true" : "false"}
                    >
                      <div className="skill-nav">
                        <div className="icon">
                          <img className="show-light" src={tab.img} alt="icon" />
                        </div>
                        <div className="content">
                          <h3 className="title">{tab.title}</h3>
                          <p className="text">{tab.content}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="pills-tabContent">
                {[1, 2, 3, 4].map((id, idx) => (
                  <div
                    key={id}
                    className={`tab-pane fade ${id === 1 ? 'show active' : ''}`}
                    id={`pills-${id}`}
                    role="tabpanel"
                    aria-labelledby={`pills-${id}-tab`}
                    tabIndex={0}
                  >
                    <div className="skill-thumb wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                      <img
                        className="main-image"
                        src={
                          id % 2 === 0
                            ? "https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-74.webp"
                            : "https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-72.webp"
                        }
                        alt="image"
                      />
                      <img
                        className="small-image"
                        src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-73.webp"
                        alt="image"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
