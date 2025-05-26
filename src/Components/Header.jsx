import React from "react";
import logo from "../assets/hana-logo.png";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header = ({ homeData }) => {
  const homePage = homeData?.data?.[0]?.sectionData?.homePage;
  return (
    <>
      <div className="offcanvas-3__area">
        <div className="offcanvas-3__inner">
          <div className="offcanvas-3__meta-wrapper">
            <div className="">
              <button
                id="close_offcanvas"
                className="close-button close-offcanvas"
                onClick={hideCanvas3}
              >
                <span />
                <span />
              </button>
            </div>
            <div className="">
              <div className="offcanvas-3__meta mb-145 d-none d-md-block">
                <ul>
                  <li>
                    <a href="tel:+2-352698102" className="unnerline">
                      <u>+2-352 698 102</u>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@me.com">contact@me.com</a>
                  </li>
                  <li>
                    <a href="#">
                      27 Division St, <br />
                      New York, NY 10002, USA
                    </a>
                  </li>
                </ul>
              </div>
              <div className="offcanvas-3__social d-none d-md-block">
                <p className="title">Follow Me</p>
                <div className="offcanvas-3__social-links">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-dribbble" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-3__menu-wrapper">
            <nav className="nav-menu offcanvas-3__menu">
              <ul>
                <li>
                  <Link to="/" onClick={hideCanvas3}>
                    home
                  </Link>
                </li>
                <li>
                  <Link to="/apps" onClick={hideCanvas3}>
                    Apps
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    knowledge base
                  </a>
                </li>
                <li>
                  <Link to="/about" onClick={hideCanvas3}>
                    about us
                  </Link>
                </li>
                <li>
                  <Link to="/team" onClick={hideCanvas3}>
                    team
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    portfolios
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="search-template"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="search-template"
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form action="#" className="form-search">
                <input type="text" placeholder="Search" />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area ">
        <div className="container large">
          <div className="header-area__inner">
            <div className="header__logo">
              <Link to='/'>
                <img
                  className="show-light"
                  src={logo}
                  alt="Site Logo"
                  height={50}
                />

                <img
                  className="show-dark"
                  src={logo}
                  alt="Site Logo"
                  height={50}
                />
              </Link>
            </div>
            <div className="header__nav pos-center">
              <nav className="main-menu d-none d-lg-block">
                <ul>
                  <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/apps">apps</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">knowledge base</a>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">about us</Link>
                  </li>
                  <li>
                    <Link to="/team">team</Link>
                  </li>
                  <li>
                    <a href="#">
                      portfolios
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="header-search"
              data-bs-toggle="modal"
              data-bs-target="#search-template"
            >
              <img
                className="show-light"
                src="https://crowdytheme.com/html/arolax/assets/imgs/icon/search.webp"
                alt="search-icon"
              />
              <img
                className="show-dark"
                src="https://crowdytheme.com/html/arolax/assets/imgs/icon/search-light.webp"
                alt="search-icon"
              />
            </div>
            <div className="header__navicon d-xl-none">
              <button onClick={showCanvas3} className="open-offcanvas">
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;