/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const ControlsGoogleMaps = ({ className }: Props): JSX.Element => {
  return (
    <div className={`controls-google-maps ${className}`}>
      <div className="overlap-group">
        <div className="text-wrapper">Map data @2019 Google</div>
      </div>
      <div className="overlap">
        <div className="text-wrapper">Terms of Use</div>
      </div>
      <div className="report-a-map-error-wrapper">
        <div className="text-wrapper">Report a map error</div>
      </div>
    </div>
  );
};
