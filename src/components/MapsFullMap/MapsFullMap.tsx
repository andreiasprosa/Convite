/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ControlsGoogleLogo } from "../ControlsGoogleLogo";
import { ControlsGoogleMaps } from "../ControlsGoogleMaps";
import { ControlsMapType } from "../ControlsMapType";
import { ControlsStreetView } from "../ControlsStreetView";
import { ControlsZoom } from "../ControlsZoom";
import { MapsZoomLevels } from "../MapsZoomLevels";
import "./style.css";

interface Props {
  className: any;
  overlapClassName: any;
}

export const MapsFullMap = ({ className, overlapClassName }: Props): JSX.Element => {
  return (
    <div className={`maps-full-map ${className}`}>
      <div className={`div ${overlapClassName}`}>
        <MapsZoomLevels
          className="maps-zoom-levels-2-city"
          mapOfBirmingham="/img/map-of-birmingham-city.png"
          mapOfBirminghamClassName="maps-zoom-levels-instance"
        />
        <img className="image" alt="Image" src="/img/image-3.png" />
        <ControlsGoogleMaps className="controls-google-maps-byline" />
        <ControlsGoogleLogo
          className="controls-google-logo-color"
          controlsGoogleLogo="/img/controls-google-logo-color.svg"
        />
        <div className="controls">
          <ControlsStreetView
            className="controls-street-view-instance"
            pegmanOffscreen="/img/pegman-offscreen-2x.png"
          />
          <ControlsZoom className="controls-zoom-controls" img="/img/union.svg" union="/img/union-2.svg" />
        </div>
        <ControlsMapType className="controls-map-type-instance" line="/img/line-1.svg" />
        <div className="div-place-card-wrapper">
          <div className="div-place-card">
            <div className="div-place-name">
              <p className="adro-da-igreja-de">Adro da Igreja de …</p>
            </div>
            <div className="link-view-larger-map">View larger map</div>
          </div>
        </div>
      </div>
    </div>
  );
};
