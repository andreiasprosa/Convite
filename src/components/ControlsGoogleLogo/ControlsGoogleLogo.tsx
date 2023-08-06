/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  controlsGoogleLogo: string;
}

export const ControlsGoogleLogo = ({
  className,
  controlsGoogleLogo = "/img/controls-google-logo-color-2.svg",
}: Props): JSX.Element => {
  return <img className={`controls-google-logo ${className}`} alt="Controls google logo" src={controlsGoogleLogo} />;
};

ControlsGoogleLogo.propTypes = {
  controlsGoogleLogo: PropTypes.string,
};
