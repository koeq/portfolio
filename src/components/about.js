import React from "react";
import Technology from "./technology";
import { ParallaxTwo } from "./parallax";
import { ParallaxOne } from "./parallax";

export default function About({ screenWidth }) {
  return (
    <div className="about-container">
      <div className="about-heading-container">
        <h1 className={"heading-l"}>ABOUT</h1>
      </div>

      <div className="about-content-path">
        <div className="about-content">
          <div className="about-content-sub-container">
            <ParallaxTwo offset={screenWidth > 768 ? 40 : 20}>
              <span className="heading-s about-content-subheading">
                WHO AM I
              </span>
            </ParallaxTwo>

            <div className="sub-text">
              <span className="running-text">
                I'm Benedikt König a 27 year old developer and sport fanatic
                from Hamburg, Germany. When I'm not sharpening my coding skills
                I love to move. Mountain biking, strength and conditioning,
                running or <br /> surfing when on vacation. You name it! It's
                all about the balance between mental and physical work.
              </span>
            </div>
          </div>

          <div className="about-content-sub-container">
            <ParallaxTwo offset={screenWidth > 768 ? 40 : 20}>
              <span className="heading-s about-content-subheading">
                EDUCATION
              </span>
            </ParallaxTwo>

            <div className="sub-text">
              <p className="running-text">
                » BSc. Business Administration
                <br />» MSc. Management Information Systems <br />» To many
                coding tutorials
              </p>
            </div>
          </div>

          <div className="about-content-sub-container">
            <ParallaxTwo offset={screenWidth > 768 ? 40 : 20}>
              <span className="heading-s about-content-subheading">TOOLS</span>
            </ParallaxTwo>

            <div className={"technology-i-use sub-text"}>
              <Technology react={true} />
            </div>
          </div>
        </div>

        <ParallaxTwo offset={screenWidth > 768 ? 60 : 40}>
          <div className="about-path">
            <span className="heading-s">MY PATH</span>

            <div className="about-path-text">
              <p className="running-text">
                Like many people I began my developer journey as a lost business
                student not satisfied with the content of my studies. When you
                leave school to go to university you imagine studying business
                administration as learning how to build the next succesfull
                start up. But reality hits you hard when you realize that there
                is one interesting course for ten boring ones. <br /> <br />
                So what now?
                <br /> <br /> A spark of hope! Business Informatics. Seems like
                not all courses are boring afterall. It turnes out you can even
                put your main emphasis on that. Nice! Finally i chose to take a
                more technical masters programm (Management Information
                Systems). As luck would have it my working student job required
                my colleague and me to develop a small web application. Since we
                did'nt have too much programming experience a lot of learning
                had to take place.
                <br />
                <br />
                Boom! I was instantly hooked. The feedback from learning new
                technology and the direct application of that knowledge was
                fascinating and rewarding at the same time. This experience laid
                the foundation for my desire of wanting to become a software
                developer.
              </p>
            </div>
          </div>
        </ParallaxTwo>
      </div>

      <div className="about-quote">
        <ParallaxOne offset={screenWidth > 768 ? 50 : 20}>
          <div className="about-quote-text">
            <p className="heading-m-regular">
              My affinity with software engineering roots in an{" "}
              <span className="heading-m-bold">
                excitement for the hands-on building process,
              </span>{" "}
              the creative joy involved in the associated problem solving as
              well as a{" "}
              <span className="heading-m-bold">
                dedication towards continuous learning.
              </span>
            </p>
          </div>
        </ParallaxOne>
        <span className="heading-l quotation-mark">„</span>
      </div>
    </div>
  );
}
