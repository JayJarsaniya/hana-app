import React from "react";

const KbConclusion = ({ data }) => {
  return (
    <section className="container Kb-Conclusion">
      {data?.ConclusionDetails?.map((item, index) => (
        <p
          key={index}
          className={`text text-center mb-2 wow animate__animated animate__fadeInUp`}
          data-wow-delay={`${0.2 + index * 0.1}s`}
          dangerouslySetInnerHTML={{ __html: item.Conclusion }}
        />
      ))}
    </section>
  );
};

export default KbConclusion;
