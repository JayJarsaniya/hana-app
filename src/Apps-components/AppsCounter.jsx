import React from "react";

const AppsCounter = ({ data }) => {
  return (
    <div className="counter-area2 have-bottom-shape">
      <div className="container">
        <div className="counter-area2-inner">
          <div className="counter-items">
            {data.counterdetails.map((item, index) => (
              <div
                key={index}
                className="counter-item wow animate__animated animate__fadeInLeft"
                data-wow-duration="1.8s"
                data-wow-delay={`${0.3 + index * 0.1}s`}
              >
                <div className="counter-item-content">
                  <h2 className="title wc-counter">{item.count}</h2>
                  <p
                    className="text"
                    dangerouslySetInnerHTML={{ __html: item.Title5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCounter;
