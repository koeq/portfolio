import React from "react";
import { ParallaxOne } from "./parallax";

export default function StartMobile() {
  return (
    <div className="start-mobile-container">
      <div className="start-mobile-heading-container">
        <div className="heading-row">
          <span className="start-mobile-heading">FRONT-</span>
        </div>
        <div className="heading-row">
          <span className="start-mobile-heading">END</span>
        </div>
        <div className="heading-row">
          <span className="start-mobile-heading">ENGINE</span>
        </div>
        <div className="heading-row">
          <span className="start-mobile-heading">ER</span>
        </div>
      </div>

      <ParallaxOne offset={40}>
        <div className="start-mobile-name">
          <span
            style={{
              fontSize: "clamp(0.6rem, 7vw, 20rem)",
              fontWeight: "400",
              letterSpacing: "1.6vw",
              marginBottom: "13vh"
            }}
          >
            Benedikt König
          </span>
        </div>
      </ParallaxOne>
    </div>
  );
}
