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

function Project({ img, cardWidth, cardHeight }) {
  return (
    <div className="project">
      <Card width={cardWidth} height={cardHeight}>
        <img src={img} alt={`${img} website`} />
      </Card>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <Parallax offset={20} className={"flex-center"}>
          <h1 className={"heading-l"}>PROJECTS</h1>
        </Parallax>
      </div>
      <div className="project-one">
        <div className={`projects-name-left`}>
          <span className="heading-m">01</span>
          <span className="heading-m">STUDIO MK</span>
        </div>

        <div className="project-cards-container">
          <Project img={studioMkLab} cardWidth={"28vw"} cardHeight={"41.6vw"} />

          <div className="projects-one-column">
            <Project
              img={studioMkPlay}
              cardWidth={"20vw"}
              cardHeight={"24.4vw"}
            />
            <Project img={studioMk} cardWidth={"20vw"} cardHeight={"17vw"} />
          </div>
        </div>
      </div>
      <Project
        name="GITHUB BATTLE"
        side={"right"}
        img={githubBattle}
        num={"02"}
        cardWidth={"40vw"}
        cardHeight={"38.5vw"}
      />
      <Project
        name="HACKER NEWS CLONE"
        side={"left"}
        img={hackerNewsClone}
        num={"03"}
        cardWidth={"40vw"}
        cardHeight={"39.4vw"}
      />
      <Project
        name="WTTC - WEB TRACKING TRAFFIC COLLECTOR"
        side={"right"}
        img={wttc}
        num={"04"}
        cardWidth={"45vw"}
        cardHeight={"21.2vw"}
      />
    </div>
  );
}
