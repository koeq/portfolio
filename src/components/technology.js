import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Technology({ react = true }) {
  return (
    <>
      <div className={"flex-center-column"}>
        <FaHtml5 size={"3vw"} />
        <p style={{ marginTop: "0.3vw" }}>HTML</p>
        <p>(HTML5)</p>
      </div>
      <div className={"flex-center-column"}>
        <FaCss3Alt size={"3vw"} />
        <p style={{ marginTop: "0.3vw" }}>CSS</p>
        <p>(FlexBox & Grid)</p>
      </div>
      <div className={"flex-center-column"}>
        <SiJavascript size={"3vw"} />
        <p style={{ marginTop: "0.3vw" }}>JS</p>
        <p>(ES6)</p>
      </div>

      {react ? (
        <div className={"flex-center-column"}>
          <FaReact size={"3vw"} />
          <p style={{ marginTop: "0.3vw" }}>React</p>
          <p>(incl. Hooks)</p>
        </div>
      ) : null}
    </>
  );
}
