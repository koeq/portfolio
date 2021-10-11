import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Technology({ react = true }) {
  return (
    <>
      <div style={{ display: "flex " }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
          style={{ marginRight: "7.5vw" }}
        >
          <div className={"flex-center-column"} style={{ marginBottom: "4vw" }}>
            <FaHtml5 size={"max(22px,2vw)"} />
            <p className="heading-s" style={{ marginTop: "0.4vw" }}>
              HTML 5
            </p>
          </div>
          <div className={"flex-center-column"}>
            <SiJavascript size={"max(22px,2vw)"} />
            <p className="heading-s" style={{ marginTop: "0.4vw" }}>
              JS
            </p>
            {/* <p className="heading-s">(ES6)</p> */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div className={"flex-center-column"} style={{ marginBottom: "4vw" }}>
            <FaCss3Alt size={"max(22px,2vw)"} />
            <p className="heading-s" style={{ marginTop: "0.4vw" }}>
              CSS 3
            </p>
            {/* <p className="heading-s">(FlexBox & Grid)</p> */}
          </div>
          {react ? (
            <div className={"flex-center-column"}>
              <FaReact size={"max(22px,2vw)"} />
              <p className="heading-s" style={{ marginTop: "0.4vw" }}>
                React
              </p>
              {/* <p className="heading-s">(incl. Hooks)</p> */}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
