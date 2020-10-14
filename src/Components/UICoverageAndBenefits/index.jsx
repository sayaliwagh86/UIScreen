import React, { useEffect, useState } from "react";
import "./CoverageAndBenefits.css";

export default function CoverageAndBenefits() {
  const [screenSize, setScreenSize] = useState(false);

  const handleScreenSizeChange = () => {
    // setScreenSize(window.innerWidth);
    if (window.innerWidth < 576) setScreenSize(true);
    else setScreenSize(false);
    // console.log("Screen width is ", window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSizeChange);
  });

  return (
    <div className="container mb-3">
      <div className="mx-1 row justify-content-between">
        <div>Coverage and Benefits</div>
        <div className="float-right">Active | All</div>
      </div>
      <div className="jumbotron py-3 rounded-0 jumbotron-container">
        {/* <div className="jumbotron rounded-0 mb-0 p-0 second-container"> */}
        <div className="row third-container">
          <div className="col-sm-3 col-md-3">
            <div>
              <div>Critical Illness</div>
              <b>1234500</b>
            </div>
            <div className="mt-4 button-text-container">
              <button
                type="button"
                className="btn bg-secondary rounded-0 text-white button-container"
              >
                File a claim
              </button>
              <div className="text-center">Documents</div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div>
              <div>Coverage Level:</div>
              <b>Family</b>
            </div>
            <div className="mt-4">
              <div>Coverage Status:</div>
              <b>Active</b>
            </div>
          </div>
          <div className="col-sm-2 col-md-2">
            <div>Owner</div>
          </div>
          {/* {!screenSize ? (
            <span className="text-secondary align-self-center border-right coverage-vl"></span>
          ) : null} */}
          <div className="col-sm-3 col-md-3 border-left offset-1">
            <div>
              <div>Billed Premium</div>
              <div className="mt-5">
                <div>Effective Date</div>
                <b>1/22/22</b>
              </div>
            </div>
            {/* <div>Billed Premium</div>
            <div className="mt-4">
              <div>Effective Date</div>
              <b>1/22/22</b>
            </div> */}
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* <div className="mt-3">
        <div className="row py-5 coverage-row-container">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div>
              <div>Critical Illness</div>
              <div>1234500</div>
            </div>
            <div className="mt-4 button-text-container">
              <button
                type="button"
                className="btn bg-secondary rounded-0 text-white button-container"
              >
                File a claim
              </button>
              <div className="text-center">Documents</div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div>
              <div>Coverage Level:</div>
              <b>Family</b>
            </div>
            <div className="mt-4">
              <div>Coverage Status:</div>
              <b>Active</b>
            </div>
          </div> */}
      {/* <div
          className={`col-sm-3 col-md-3 col-lg-3${
            !screenSize ? " border-column" : ""
          }`}
        >
          Owner
        </div> */}
      {/* <div className="col-sm-3 col-md-3 col-lg-3">Owner</div>
          {!screenSize ? (
            <span className="align-self-center coverage-vl"></span>
          ) : null}
          <div
            className={`col-sm-3 col-md-3 col-lg-3${
              !screenSize ? " pl-5" : ""
            }`}
          >
            <div>Billed Premium</div>
            <div>Effective Date</div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
