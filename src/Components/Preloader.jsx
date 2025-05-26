import React from 'react';
import '../assets/css/Preloader.css'; 

const Preloader = () => {
  return (
    <div className="wcf-preloader preloader-orbit-loading">
      <div className="orbit-loading">
        <div className="cssload-inner cssload-one"></div>
        <div className="cssload-inner cssload-two"></div>
        <div className="cssload-inner cssload-three"></div>
      </div>
    </div>
  );
};

export default Preloader;
