/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  pegmanOffscreen: string;
}

export const ControlsStreetView = ({
  className,
  pegmanOffscreen = "/img/pegman-offscreen-2x-2.png",
}: Props): JSX.Element => {
  return (
    <div className={`controls-street-view ${className}`}>
      <img className="pegman-offscreen" alt="Pegman offscreen" src={pegmanOffscreen} />
    </div>
  );
};

ControlsStreetView.propTypes = {
  pegmanOffscreen: PropTypes.string,
};
