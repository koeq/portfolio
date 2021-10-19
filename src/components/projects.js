import React from "react";
import Technology from "./technology";
import { ParallaxTwo } from "./parallax";
import studioMkHome from "../ressources/videos/studioMK/studioMkHome_compressed2.mp4";
import studioMkMobile from "../ressources/videos/studioMK/studioMk_mobile_compressed2.mp4";
import GithubBattle from "../ressources/videos/github_battle/githubBattle_compressed.mp4";
import GithubBattleMobile from "../ressources/images/githubBattle/githubBattle_mobile.jpg";
import HackerNews from "../ressources/videos/hacker_news_clone/hackerNews_compressed.mp4";
import HackerNewsMobile from "../ressources/images/hackerNews/hackerNews_mobile.jpg";
import wttc from "../ressources/videos/wttc/wttc_compressed2.mp4";
import { FaPython } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

function Project({ children, screenWidth, side, num, projectName }) {
  return (
    <div className="project">
      <ParallaxTwo offset={screenWidth > 768 ? 50 : 10}>
        <div className={`project-name-${side}`}>
          <span style={{ marginRight: "1.5vw" }} className="heading-m-thin">
            {num}
          </span>
          <span className="heading-m-bold">{projectName}</span>
        </div>
      </ParallaxTwo>

      <div className="project-content">{children}</div>
    </div>
  );
}

export default function Projects({ isActive }) {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-heading-container">
        <h1 className={"heading-l"}>PROJECTS</h1>
      </div>
      {/* 01 */}
      <Project side={"right"} num={"01"} projectName={"Studio MK"}>
        <div className="project-container">
          <div className="project-card-container">
            <div className="project-card-sidebar">
              <span
                style={{ letterSpacing: "0", lineHeight: "1.2vw" }}
                className="heading-s-tech flex-center "
              >
                œ
              </span>

              <div
                className={`project-card-sidebar-horizontal ${
                  isActive ? "hide-link" : "show-link"
                }`}
              >
                <span className="heading-s-tech">
                  <a
                    href="https://www.miriamkoenig.org"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    CHECK OUT LIVE
                  </a>
                </span>
              </div>
            </div>
            <div className="project-card">
              <video
                width="90%"
                autoPlay
                playsInline
                muted
                loop
                src={studioMkHome}
                alt="studio MK website video desktop"
              ></video>
            </div>
          </div>
          <div className="project-mobile-container">
            <div
              className={`project-card-sidebar ${
                isActive ? "hide-link" : "show-link"
              }`}
            >
              <span className="project-card-sidebar-horizontal heading-s-tech">
                <a
                  href="https://github.com/koebe1/studioMK"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  ON GITHUB
                </a>
              </span>
            </div>
            <div
              className="project-mobile-content"
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div className="project-mobile-text running-text">
                <p>
                  STUDIO MK is a creative design studio owned by Miriam König
                  located Regensburg, Germany. To present her work as well as
                  additional creative endeavors I got to build the new website
                  for STUDIO MK.
                </p>
                <br />
                <p>
                  No need to get fancy! HTML, CSS and Vanilla JavaScript are
                  doing the job.
                </p>
                <br />
                <br />
                <Technology react={false} />
              </div>

              <video
                className="mobile"
                autoPlay
                playsInline
                loop
                muted
                width="25%"
                src={studioMkMobile}
                alt="studio MK website video mobile"
              ></video>
            </div>
          </div>
        </div>
      </Project>

      <Project side={"left"} num={"02"} projectName={"Hacker News Clone"}>
        <div className="project-container">
          <div
            className="project-card-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div className="project-card-sidebar">
              <span
                style={{ letterSpacing: "0", lineHeight: "1.2vw" }}
                className="heading-s-tech flex-center"
              >
                œ
              </span>

              <div
                className={`project-card-sidebar-horizontal ${
                  isActive ? "hide-link" : "show-link"
                }`}
              >
                <span className="heading-s-tech">
                  <a
                    href="https://koebe1-hnc.netlify.app/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    CHECK OUT LIVE
                  </a>
                </span>
              </div>
            </div>
            <div className="project-card" style={{ alignItems: "flex-start" }}>
              <video
                width="90%"
                autoPlay
                playsInline
                loop
                muted
                src={HackerNews}
                alt="Hacker News website desktop"
              ></video>
            </div>
          </div>
          <div
            className="project-mobile-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div
              className={`project-card-sidebar ${
                isActive ? "hide-link" : "show-link"
              }`}
            >
              <span className="project-card-sidebar-horizontal heading-s-tech">
                <a
                  href="https://github.com/koebe1/hacker-news-clone"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  ON GITHUB
                </a>
              </span>
            </div>
            <div
              className="project-mobile-content"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <div className="project-mobile-text running-text">
                <p>
                  The name stands for it self! A simple project that tried to
                  replicate the basic functionality of the news page Hacker
                  News. The Project utilizes the Hacker News API. That means
                  lots and lots of AJAX requests.
                </p>
                <br />
                <br />

                <Technology react={true} />
              </div>

              <img
                className="mobile"
                src={HackerNewsMobile}
                width={"25%"}
                alt="Hacker News Website Mobile"
              />
            </div>
          </div>
        </div>
      </Project>

      <Project side={"right"} num={"03"} projectName={"Github Battle"}>
        <div className="project-container">
          <div className="project-card-container">
            <div className="project-card-sidebar">
              <span
                style={{ letterSpacing: "0", lineHeight: "1.2vw" }}
                className="heading-s-tech flex-center"
              >
                œ
              </span>

              <div
                className={`project-card-sidebar-horizontal ${
                  isActive ? "hide-link" : "show-link"
                }`}
              >
                <span className="heading-s-tech">
                  <a
                    href="https://koebe1-github-battle.netlify.app"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    CHECK OUT LIVE
                  </a>
                </span>
              </div>
            </div>
            <div className="project-card">
              <video
                width="90%"
                autoPlay
                loop
                muted
                playsInline
                src={GithubBattle}
                alt="Github Battle website video desktop"
              ></video>
            </div>
          </div>
          <div className="project-mobile-container">
            <div
              className={`project-card-sidebar ${
                isActive ? "hide-link" : "show-link"
              }`}
            >
              <span className="project-card-sidebar-horizontal heading-s-tech">
                <a
                  href="https://github.com/koebe1/github-battle"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  ON GITHUB
                </a>
              </span>
            </div>
            <div
              className="project-mobile-content"
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div className="project-mobile-text running-text">
                <p>
                  Github Battle is a website that let’s you battle your friends
                  via your Github account. Put in your Github name and battle!
                  Additionally the website gives you an overview over the most
                  popular Github repositories ordered by category.
                </p>
                <br />
                <p>
                  To achieve this functionality Github Battle utilizes the
                  Github Users API plus and lots of AJAX requests.
                </p>
                <br />
                <br />
                <Technology react={true} />
              </div>

              <img
                className="mobile"
                src={GithubBattleMobile}
                width={"25%"}
                alt=""
              />
            </div>
          </div>
        </div>
      </Project>

      <Project
        side={"left"}
        num={"04"}
        projectName={"WTTC - Web Tracking Traffic Collector"}
      >
        <div className="project-container">
          <div
            className="project-card-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div className="project-card-sidebar">
              <span
                style={{ letterSpacing: "0", lineHeight: "1.2vw" }}
                className="heading-s-tech flex-center"
              >
                œ
              </span>

              <div
                className={`project-card-sidebar-horizontal ${
                  isActive ? "hide-link" : "show-link"
                }`}
              >
                <span className="heading-s-tech">
                  <a
                    href="https://github.com/koebe1/WTTC-Web_Tracking_Traffic_Collector"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    CHECK OUT THESIS
                  </a>
                </span>
              </div>
            </div>
            <div className="project-card" style={{ alignItems: "flex-start" }}>
              <video
                width="90%"
                autoPlay
                playsInline
                loop
                muted
                src={wttc}
                alt="WTTC application in use"
              ></video>
            </div>
          </div>
          <div
            className="project-mobile-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div
              className={`project-card-sidebar ${
                isActive ? "hide-link" : "show-link"
              }`}
            >
              <span className="project-card-sidebar-horizontal heading-s-tech">
                <a
                  href="https://github.com/koebe1/WTTC-Web_Tracking_Traffic_Collector"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  ON GITHUB
                </a>
              </span>
            </div>
            <div
              className="project-mobile-content"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <div
                className="project-mobile-text running-text"
                style={{ width: "100%" }}
              >
                <p>
                  WTTC is a software project that was build in the context of my
                  master's thesis. To analyze the characteristics of web tracker
                  on the network layer, which was the main goal of the thesis,
                  there was a need for a dataset that contained web traffic with
                  labeled web tracker packets. To achieve this I built three
                  components that make up WTTC:
                  <br />
                  <br />
                  1. a web crawler that visits the specified websites and
                  extracts a protocol of filter rules that where applied during
                  the visits. Therefore the crawler uses Selenium WebDriver, the
                  uBlock browser extension as well as the filterlist
                  EasyPrivacy.
                  <br />
                  <br />
                  2. a web traffic collector that uses Tcpdump to capture the
                  traffic of the specified websites. Docker containers are used
                  to filter out any background noise (packets that are not
                  associated with the specified websites).
                  <br />
                  <br />
                  3. an algorithm that labels the web tracker of the collected
                  dataset based on the protocol of filter rules extracted by the
                  web crawler.
                </p>

                <br />
                <br />

                <div className="wttc-technology">
                  {/* first row */}
                  <div>
                    <div
                      style={{ marginBottom: "4vw" }}
                      className="icon-container"
                    >
                      <FaPython size={"max(22px,2vw)"} />
                      <span
                        className="heading-s-tech"
                        style={{ marginTop: "0.6vw" }}
                      >
                        Python
                      </span>
                    </div>
                    <div className="icon-container">
                      <SiSelenium size={"max(22px,2vw)"} />
                      <span
                        className="heading-s-tech"
                        style={{ marginTop: "0.6vw" }}
                      >
                        Selenium
                      </span>
                    </div>
                  </div>

                  {/* second row */}
                  <div>
                    <div
                      style={{ marginBottom: "4vw" }}
                      className="icon-container"
                    >
                      <FaTerminal size={"max(22px,2vw)"} />
                      <span
                        className="heading-s-tech"
                        style={{ marginTop: "0.6vw" }}
                      >
                        Shell
                      </span>
                    </div>
                    <div className="icon-container">
                      <FaDocker size={"max(22px,2vw)"} />
                      <span
                        className="heading-s-tech"
                        style={{ marginTop: "0.6vw" }}
                      >
                        Docker
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Project>
    </div>
  );
}
