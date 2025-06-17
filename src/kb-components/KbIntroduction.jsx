import React from "react";

const KbIntroduction = ({ data }) => {
  return (
    <section className="container">
      {data?.IntroductionDetails?.map((item, index) =>
        item?.Introduction1 ? (
          <p
            key={index}
            className="text text-center mb-2 wow animate__animated animate__fadeInUp"
            dangerouslySetInnerHTML={{ __html: item.Introduction1 }}
          />
        ) : null
      )}
    </section>
  );
};

export default KbIntroduction;
