import React, { useState, useEffect } from "react";
import "./UIFooter.css";
import image from "../../images/companyLogo.png";

export default function UIFooter() {
  const [screenSize, setScreenSize] = useState(false);

  const handleScreenSizeChange = () => {
    // setScreenSize(window.innerWidth);
    if (window.innerWidth < 991) setScreenSize(true);
    else setScreenSize(false);
    // console.log("Screen width is ", window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSizeChange);
  });

  return (
    (
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid">
          <div className="row flex-wrap-reverse">
            <div
              className={`col-sm-12 col-md-12 col-lg-4 first-container${
                screenSize ? " text-center" : ""
              }`}
            >
              <img
                className="img-fluid ui-footer-image"
                src={image}
                alt="benefits logo"
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <h5 className="text-uppercase">Legal Notices</h5>
              <ul className="list-unstyled">
                <li className="list-color">Important Information</li>
                <li className="list-color">Terms of Use</li>
                <li className="list-color">XXXXXXXXXXXXXXXX</li>
                <li className="list-color">XXXXXXXXXXXXXXXXXXX</li>
                <li className="list-color">Website Accessibility Statement</li>
                <li className="list-color">Texting Policy</li>
                <li className="list-color">Feedback</li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 third-container">
              <div>
                <b>Have a question?</b>
                <ul className="list-unstyled">
                  <li className="list-color">We're here to help.</li>
                </ul>
              </div>
              <div className="horizontal-line-container">
                <hr className="horizontal-line"></hr>
              </div>
              <div>
                <ul className="list-unstyled">
                  <li className="list-color">Call us with question at</li>
                  <li>
                    <b className="list-bold-color">(000) 000-0000</b>
                  </li>
                  <li className="list-color">Monday through Friday</li>
                  <li className="list-color">8a.m. to 8p.m. ET</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="row flex-column-reverse flex-lg-row">
          <div className={`col-md-6 col-sm-4 col-lg-4 mt-3${screenSize ? " text-center" : ""}`}>
            <img
              className="img-fluid ui-header-image"
              src={image}
              alt="benefits logo"
            />
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 mb-3">
            <h5 className="text-uppercase">Legal Notices</h5>
            <ul className="list-unstyled">
              <li className="list-color">Important Information</li>
              <li className="list-color">Terms of Use</li>
              <li className="list-color">GLB Privacy Statement</li>
              <li className="list-color">HIPAA Privacy Statement</li>
              <li className="list-color">Website Accessibility Statement</li>
              <li className="list-color">Texting Policy</li>
              <li className="list-color">Feedback</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 mb-3">
            <div>
              <b>Have a question?</b>
              <ul className="list-unstyled">
                <li className="list-color">We're here to help.</li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="list-color">Call us with question at</li>
                <li><b className="list-bold-color">(800) 521-3535</b></li>
                <li className="list-color">Monday through Friday</li>
                <li className="list-color">8a.m. to 8p.m. ET</li>
              </ul>
            </div>
          </div>
        </div> */}
        </div>
      </footer>
    )
  );
}
