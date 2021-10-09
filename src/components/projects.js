import React from "react";
import Technology from "./technology";
import { Parallax } from "./parallax";

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

            <div className="technology-container">
              <Technology react={false} />
            </div>
          </div>
        </div>
      </Project>
      {/* 02 */}
      <Project side={"left"} num={"02"} projectName={"GITHUB BATTLE"}>
        <div className="project-text-container">
          <h3 className="heading-s">THE PROJECT</h3>
          <p className="text project-description">
            GITHUB BATTLE is a website that let’s you battle your friends via
            your Github account. Put in your Github name and battle!
            Additionally the website gives you an overview over the most popular
            Github repositories. To achieve the functionality GITHUB BATTLE
            utilizes the Github Users API plus a lot of AJAX requests.
          </p>
          <h3 className="heading-s">THE TECHNOLOGY</h3>
          <div className="technology-container">
            <Technology react={true} />
          </div>
        </div>
        <div className="project-cards-container"></div>
      </Project>
      {/* 03 */}
      <Project side={"right"} num={"03"} projectName={"HACKER NEWS CLONE"}>
        <div className="project-cards-container"></div>
        <div className="project-text-container">
          <h3 className="heading-s">THE PROJECT</h3>
          <p className="text project-description">
            The name stands for it self! A simple project that tried to
            replicate the basic functionality of the news page Hacker News. The
            Project utilizes the Hacker News API. That means again lots and lots
            of AJAX requests.
          </p>
          <h3 className="heading-s">THE TECHNOLOGY</h3>
          <div className="technology-container">
            <Technology react={true} />
          </div>
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
            WTTC is a software project that was build in the context of my
            master thesis. To analyze the characteristics of web tracker on the
            network layer, which was the main goal of the thesis, there was a
            need for a dataset that contained web traffic with labeled web
            tracker packets. To achieve this I built three components that make
            up WTTC:
            <br />
            <br />
            1. a web crawler that visits the specified websites and extracts a
            protocol of filter rules that where applied during the visits.
            Therefore the crawler uses Selenium WebDriver, the uBlock browser
            extension as well as the filterlist EasyPrivacy.
            <br />
            <br />
            2. a web traffic collector that uses Tcpdump to capture the traffic
            of the specified websites. Docker containers are used to filter out
            any background noise.
            <br />
            <br />
            3. a algorithm that labels the web tracker of the collected dataset
            based on the protocol of filter rules extracted by the web crawler.
          </p>
          <h3 className="heading-s">THE TECHNOLOGY</h3>
        </div>
        <div className="project-cards-container"></div>
      </Project>
    </div>
  );
}
