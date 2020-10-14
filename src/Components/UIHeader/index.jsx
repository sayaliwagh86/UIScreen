import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UIHeader.css";
import image from "../../images/companyLogo.png";
import Bell from "../../svg/bell";
import Setting from "../../svg/settings";
import Logout from "../../svg/logout";

export default function UIStateHeader() {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5">
      <Link to="/">
        <img
          className="img-fluid ui-header-image"
          src={image}
          alt="benefits logo"
        />
      </Link>
      <div className={screenSize ? "show-hide" : "mx-3 vl"}></div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navbar-text-color" className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/coverageAndBenefits">
              Coverage & Benefits
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/documentCenter">
              Document Center
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/claimsCenter">
              Claims Center
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/helpCenter">
              Help Center
            </Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <ul id="navbar-text-color" className="navbar-nav mr-auto">
            <li className="nav-item nav-link">Hello, Joe</li>
            <li className="nav-item nav-link">
              <Bell />
            </li>
            <li className="nav-item nav-link">
              <Setting />
            </li>
            <li className="nav-item nav-link">
              <Logout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
