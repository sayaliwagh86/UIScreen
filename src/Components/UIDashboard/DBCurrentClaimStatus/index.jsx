import React, { useEffect, useState } from "react";
import "./DBCurrentClaimStatus.css";


export const CurrentClaim = (props) => {
    return(
        <div className="jumbotron py-2 rounded-0">
        <div className="row third-container">
          <div className="col-sm-6 col-md-6">
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
              
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div>
              <div>Received Date</div>
              <b>1/22/2020</b>
            </div>
            <div className="mt-4">
              <div>Coverage Status:</div>
              <b>PENDING</b>
            </div>
          </div>
        </div>
       
      </div>
    );
};

export default function DBCurrentClaimStatus() {
  const [screenSize, setScreenSize] = useState(false);

  const handleScreenSizeChange = () => {
    
    if (window.innerWidth < 576) setScreenSize(true);
    else setScreenSize(false);
    
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSizeChange);
  });

  return (
    <div className="container mb-3">
      <div className="mx-1 row justify-content-between">
        <div className='containerHeader'>Current Claim Status</div>
        <div className="float-right"><a href='#'>File Claim </a>| <a href='#'>View All </a> </div>
      </div>

    <CurrentClaim />
    <CurrentClaim />
    <CurrentClaim />
      
    </div>
  );
}
