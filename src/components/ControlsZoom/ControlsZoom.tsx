/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  union: string;
  img: string;
}

export const ControlsZoom = ({
  className,
  union = "/img/union-5.svg",
  img = "/img/union-4.svg",
}: Props): JSX.Element => {
  return (
    <div className={`controls-zoom ${className}`}>
      <img className="union" alt="Union" src={union} />
      <img className="img" alt="Union" src={img} />
      <div className="rectangle" />
    </div>
  );
};

ControlsZoom.propTypes = {
  union: PropTypes.string,
  img: PropTypes.string,
};
