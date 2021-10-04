import React from "react";
import { Parallax } from "./parallax";
import studioMkPlay from "../ressources/images/studioMkPlay.png";
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

function Project({
  side,
  name = "project",
  frame = false,
  img,
  num,
  cardWidth,
  cardHeight
}) {
  return (
    <div className={`project-${side}`}>
      <div className={`projects-name-${side}`}>
        {side === "left" ? (
          <>
            <span>{name}</span>
            <span>{num}</span>
          </>
        ) : (
          <>
            <span>{num}</span>
            <span>{name}</span>
          </>
        )}
      </div>
      <div className="project">
        {frame ? (
          <Parallax offset={30}>
            <div className="project-frame">
              <Card width={cardWidth} height={cardHeight}>
                <img src={img} alt={`${img} website`} />
              </Card>
            </div>
          </Parallax>
        ) : (
          <Parallax offset={30}>
            <Card width={cardWidth} height={cardHeight}>
              <img src={img} alt={`${img} website`} />
            </Card>
          </Parallax>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-heading">
        <Parallax offset={20} className={"flex-center"}>
          <h1>PROJECTS</h1>
        </Parallax>
      </div>

      <Project
        name="STUDIO MK"
        side={"left"}
        img={studioMkPlay}
        num={"01"}
        cardWidth={"36vw"}
        cardHeight={"44vw"}
      />
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
