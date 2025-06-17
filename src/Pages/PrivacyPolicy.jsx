import React, { useEffect } from "react";
import "../assets/css/PrivacyPolicy.css";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import icon from "../assets/checklist.png";

const PrivacyPolicy = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    })
  return (
    <>
      <br />
      <section className="Privacy-Policy-area">
        <div id="has_smooth" />
        <div className="container large wow animate__animated animate__fadeInUp">
          <div className="section-title text-center wow animate__animated animate__fadeInUp">
            Privacy Policy
          </div>
          <hr />

          <p className="text mt-4 wow animate__animated animate__fadeInUp">
            Effective Date: 26-05-2025
          </p>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">1. Introduction</h2>
            <p className="text">
              Welcome to HANA Your privacy is important to us. This Privacy
              Policy explains how we collect, use, and share your information
              when you use our LinkedIn App.
            </p>
          </div>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">2. Information We Collect</h2>
            <p className="text">
              When you use our LinkedIn App, we may collect the following
              information:
            </p>
            <ul>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">
                  Your LinkedIn profile information (name, email, profile
                  picture, job title, etc.)
                </p>
              </li>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">
                  Connections and network data (if permitted by LinkedIn)
                </p>
              </li>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">Any additional data you choose to provide</p>
              </li>
            </ul>
          </div>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">3. How We Use Your Information</h2>
            <p className="text">We use the collected data to:</p>
            <ul>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">Authenticate and personalize your experience</p>
              </li>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">Enhance our app features and functionality</p>
              </li>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">Provide customer support</p>
              </li>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">Comply with legal obligations</p>
              </li>
            </ul>
          </div>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">4. Sharing Your Information</h2>
            <p className="text">
              We do not sell your personal information. However, we may share
              your data with:
            </p>
            <ul>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">LinkedIn as per their API policies</p>
              </li>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">
                  Service providers assisting with app functionality
                </p>
              </li>
              <li>
                <img className="bulets-img" src={icon} alt="" />
                <p className="text">Legal authorities if required by law</p>
              </li>
            </ul>
          </div>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">5. Security</h2>
            <p className="text">
              We take reasonable security measures to protect your data.
              However, no method of transmission over the internet is completely
              secure.
            </p>
          </div>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">6. Your Rights</h2>
            <p className="text">
              We take reasonable security measures to protect your data.
              However, no method of transmission over the internet is completely
              secure.
            </p>
          </div>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">7. Changes to This Policy</h2>
            <p className="text">
              We may update this Privacy Policy from time to time. Please review
              it periodically.
            </p>
          </div>

          <div className="wow animate__animated animate__fadeInUp">
            <h2 className="title Privacy-title">8. Contact Us</h2>
            <p className="text">
              If you have any questions, please contact us at
              business@hanaplatform.com.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
