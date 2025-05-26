import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area wow animate__animated animate__fadeInUp">
      <div className="container large">
        <div className="copyright-area-inner">
          <div className="copyright-text wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
            <p className="text">© 2025 HANA </p>
          </div>
          <ul className="footer-nav-list wow animate__animated animate__fadeInDown" data-wow-delay="0.4s">
            <li>
              <Link to='/' href="#">home</Link>
            </li>
            <li>
              <Link to='/apps'>apps</Link>
            </li>
            <li>
              <a href="#">knowledge base</a>
            </li>
            <li>
              <Link to='/about'>about us</Link>
            </li>
            <li>
              <Link to='/team'>team</Link>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
          </ul>
          <ul className="social-links wow animate__animated animate__fadeInRight" data-wow-delay="0.6s">
            <li>
              <a href="https://www.facebook.com/hanaplatform" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@HANA-RapidApplicationDevelopme/videos" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/hana-rad/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hana.platform?igsh=MWVxNm43dm1ibHRiaw%3D%3D" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
