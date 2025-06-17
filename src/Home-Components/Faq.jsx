import React from "react";

const Faq = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;

  return (
    <section className="faq-area">
      <div className="container">
        <div className="faq-area-inner section-spacing">
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim wow animate_animated animate_fadeInDown">
                  {homePage?.frequentlyQuestionsTitle}
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text has_fade_anim wow animate_animated animate_fadeInUp">
                {homePage?.frequentlyQuestionsContent}
              </p>
            </div>
          </div>
          <div
            className="accordion-wrapper has_fade_anim wow animate_animated animate_fadeInUp"
            data-delay="0.45"
          >
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {homePage?.QuestionOneTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionOneContent}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    {homePage?.QuestionTwoTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionTwoContent}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    {homePage?.QuestionThreeTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionThreeContent}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    {homePage?.QuestionFourTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionFourContent}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    {homePage?.QuestionFiveTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionFiveContent}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button
                    className="accordion-button collapsed wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    {homePage?.QuestionSixTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionSixContent}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button
                    className="accordion-button collapsed wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    {homePage?.QuestionSevenTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionSevenContent}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingEight">
                  <button
                    className="accordion-button collapsed wow animate_animated animate_fadeInLeft"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseEight"
                  >
                    {homePage?.QuestionEightTitle}
                  </button>
                </h2>
                <div
                  id="flush-collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingEight"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body wow animate_animated animate_fadeInRight">
                    {homePage?.QuestionEightContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
