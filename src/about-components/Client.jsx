import React from "react";

const Client = ({ data }) => {
  return (
    <div className="client-area about-client-area">
      <div className="container">
        <div className="client-area-inner section-spacing">
          <div className="client-area-text wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <h2 className="text">{data?.globalBrandsTitle}</h2>
          </div>
          <div className="clients-wrapper-box wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div className="clients-wrapper">
              {data?.lobalBrandsTable?.map((brand, index) => (
                <div
                  className="client-box wow animate__animated animate__fadeIn"
                  data-wow-delay={`${0.4 + index * 0.1}s`}
                  key={index}
                >
                  <img
                    className="show-light client-area-img"
                    src={brand.lobalBrandsTableImage}
                    alt="client image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
