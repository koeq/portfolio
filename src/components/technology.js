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
            justifyContent: "space-between",
            marginRight: "9.5vw"
          }}
        >
          <div className={"flex-center-column"} style={{ marginBottom: "6w" }}>
            <FaHtml5 size={"max(30px,3vw)"} />
            <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
              HTML
            </p>
          </div>
          <div className={"flex-center-column"}>
            <SiJavascript size={"max(30px,3vw)"} />
            <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
              JS
            </p>
            {/* <p className="heading-s-tech">(ES6)</p> */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div className={"flex-center-column"} style={{ marginBottom: "6vw" }}>
            <FaCss3Alt size={"max(30px,3vw)"} />
            <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
              CSS
            </p>
            {/* <p className="heading-s-tech">(FlexBox & Grid)</p> */}
          </div>
          {react ? (
            <div className={"flex-center-column"}>
              <FaReact size={"max(30px,3vw)"} />
              <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
                React
              </p>
              {/* <p className="heading-s-tech">(incl. Hooks)</p> */}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export function TechnologyInline({ react = true }) {
  return (
    <div style={{ display: "flex " }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85vw",
          marginTop: "5vw"
        }}
      >
        <div className={"flex-center-column"}>
          <FaHtml5 size={"max(30px,3vw)"} />
          <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
            HTML
          </p>
        </div>
        <div className={"flex-center-column"}>
          <FaCss3Alt size={"max(30px,3vw)"} />
          <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
            CSS
          </p>
          {/* <p className="heading-s-tech">(FlexBox & Grid)</p> */}
        </div>
        <div className={"flex-center-column"}>
          <SiJavascript size={"max(30px,3vw)"} />
          <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
            JS
          </p>
          {/* <p className="heading-s-tech">(ES6)</p> */}
        </div>
        {react ? (
          <div className={"flex-center-column"}>
            <FaReact size={"max(30px,3vw)"} />
            <p className="heading-s-tech" style={{ marginTop: "1vw" }}>
              React
            </p>
            {/* <p className="heading-s-tech">(incl. Hooks)</p> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}
