import React from "react";
import { Parallax } from "./parallax";
import studioMkPlay from "../ressources/images/studioMkPlay.png";
import studioMkPlay2 from "../ressources/images/studioMkPlay2.png";

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

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <Parallax offset={10} className={"flex-center"}>
          <h1>PROJECTS</h1>
        </Parallax>
      </div>
      <div className="project-one">
        <Card width={"50vw"} height={"50vh"}>
          <img src={studioMkPlay} alt="studioMK website" />
        </Card>
      </div>
    </div>
  );
}
