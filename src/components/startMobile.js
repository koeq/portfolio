import React from "react";

export default function StartMobile() {
  return (
    <div className="start-mobile-container">
      <div className="start-mobile-heading-container">
        <div className="heading-row">
          <span className="start-mobile-heading">FRONT</span>
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

      <div className="start-mobile-name">
        <span
          style={{
            fontSize: "clamp(0.5rem, 7vw, 20rem)",
            fontWeight: "400",
            letterSpacing: "1.6vw",
            marginBottom: "10vh"
          }}
        >
          Benedikt König
        </span>
      </div>
    </div>
  );
}
