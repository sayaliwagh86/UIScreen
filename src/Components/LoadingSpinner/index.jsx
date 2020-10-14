/*
   Loading Spinner : 
   This will work untill Api and condition gets statisfy.
*/

import React from "react";
import "./LoadingSpinner.css";

/**
 * Function returning the loading spinner
 */
export default function index() {
  return (
    <div className="d-flex justify-content-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
