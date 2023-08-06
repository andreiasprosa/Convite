/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  line: string;
}

export const ControlsMapType = ({ className, line = "/img/line.svg" }: Props): JSX.Element => {
  return (
    <div className={`controls-map-type ${className}`}>
      <div className="satellite">Satellite</div>
      <img className="line" alt="Line" src={line} />
      <div className="map">Map</div>
    </div>
  );
};

ControlsMapType.propTypes = {
  line: PropTypes.string,
};
