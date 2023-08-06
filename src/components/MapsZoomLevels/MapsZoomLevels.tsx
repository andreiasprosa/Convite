/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  mapOfBirminghamClassName: any;
  mapOfBirmingham: string;
}

export const MapsZoomLevels = ({
  className,
  mapOfBirminghamClassName,
  mapOfBirmingham = "/img/map-of-birmingham-city-2.png",
}: Props): JSX.Element => {
  return (
    <div className={`maps-zoom-levels ${className}`}>
      <img className={`map-of-birmingham ${mapOfBirminghamClassName}`} alt="Map of birmingham" src={mapOfBirmingham} />
    </div>
  );
};

MapsZoomLevels.propTypes = {
  mapOfBirmingham: PropTypes.string,
};
