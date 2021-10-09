import React from "react";
import { Parallax } from "./parallax";
import studioMkPlay from "../ressources/images/studioMK/studioMkPlay.png";
import studioMkLab from "../ressources/images/studioMK/studioMkLab.png";
import studioMk from "../ressources/images/studioMK/studioMk.png";
import githubBattle from "../ressources/images/github-battle.png";
import hackerNewsClone from "../ressources/images/hacker-news-clone.png";
import wttc from "../ressources/images/wttc.png";

function Card(props) {
  return (
    <div
      className="card-container"
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </div>
  );
}

function Project({ children, side, num, projectName }) {
  return (
    <div className="project">
      <div className={`project-name-${side}`}>
        <span className="heading-m">{num}</span>
        <span className="heading-m">{projectName}</span>
      </div>

      <div className="project-content">{children}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <Parallax offset={20}>
          <h1 className={"heading-l"}>PROJECTS</h1>
        </Parallax>
      </div>
      {/* 01 */}
      <Project side={"right"} num={"01"} projectName={"STUDIO MK"}>
        <div className="project-cards-container"></div>
        <div className="project-text-container">
          <div className="project-text">
            <h3 className="heading-s">THE PROJECT</h3>
            <p className="text project-description">
              {" "}
              STUDIO MK is a creative design studio owned by Miriam König
              located Regensburg, Germany. To present her work as well as
              additional creative endeavors I got to build the new website for
              STUDIO MK.{" "}
            </p>
            <h3 className="heading-s">THE TECHNOLOGY</h3>
          </div>
        </div>
      </Project>
      {/* 02 */}
      <Project side={"left"} num={"02"} projectName={"GITHUB BATTLE"}>
        <div className="project-text-container">
          <h3 className="heading-s">THE PROJECT</h3>
          <p className="text project-description">
            {" "}
            STUDIO MK is a creative design studio owned by Miriam König located
            Regensburg, Germany. To present her work as well as additional
            creative endeavors I got to build the new website for STUDIO MK.{" "}
          </p>
          <h3 className="heading-s">THE TECHNOLOGY</h3>
        </div>
        <div className="project-cards-container"></div>
      </Project>
      {/* 03 */}
      <Project side={"right"} num={"03"} projectName={"HACKER NEWS CLONE"}>
        <div className="project-cards-container"></div>
        <div className="project-text-container">
          <h3 className="heading-s">THE PROJECT</h3>
          <p className="text project-description">
            {" "}
            STUDIO MK is a creative design studio owned by Miriam König located
            Regensburg, Germany. To present her work as well as additional
            creative endeavors I got to build the new website for STUDIO MK.{" "}
          </p>
          <h3 className="heading-s">THE TECHNOLOGY</h3>
        </div>
      </Project>
      {/* 04 */}
      <Project
        side={"left"}
        num={"04"}
        projectName={"WTTC - WEB TRACKING TRAFFIC COLLECTOR "}
      >
        <div className="project-text-container">
          <h3 className="heading-s">THE PROJECT</h3>
          <p className="text project-description">
            {" "}
            STUDIO MK is a creative design studio owned by Miriam König located
            Regensburg, Germany. To present her work as well as additional
            creative endeavors I got to build the new website for STUDIO MK.{" "}
          </p>
          <h3 className="heading-s">THE TECHNOLOGY</h3>
        </div>
        <div className="project-cards-container"></div>
      </Project>
    </div>
  );
}
