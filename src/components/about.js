import React from "react";
import Technology from "./technology";
import { Parallax } from "./parallax";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-heading-container">
        <h1 className={"heading-l"}>ABOUT</h1>
      </div>

      <div className="about-content-path">
        <div className="about-content">
          <div className="about-content-sub-container">
            <span className="heading-s about-content-subheading">WHO AM I</span>

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
            <span className="heading-s about-content-subheading">
              EDUCATION
            </span>

            <div className="sub-text">
              <p className="running-text">
                » BSc. Business Administration
                <br />» MSc. Management Information Systems <br />» To many
                coding tutorials
              </p>
            </div>
          </div>

          <div className="about-content-sub-container">
            <span className="heading-s about-content-subheading">TOOLS</span>

            <div className={"technology-i-use sub-text"}>
              <Technology react={true} />
            </div>
          </div>
        </div>

        <div className="about-path">
          <span className="heading-s">MY PATH</span>

          <div className="about-path-text">
            <div className="about-border"></div>
            <p className="running-text">
              Like many people i began my developer journey as a lost business
              student not satisfied with the content of my studies. When you
              leave school to go to university you imagine studying business
              administration as learning how to build the next succesfull start
              up. But reality hits you hard when you realize that there is one
              interesting course for ten boring ones like accounting or
              corporate reporting. <br /> <br />
              So what now?
              <br /> <br /> A ray of hope! Business Informatics. Not all courses
              are boring afterall. It turnes out you can even put your main
              emphasis on that. Nice! My masters programm (Management
              Information Systems) got even more technical. As luck would have
              it my working student job required my colleague and me to develope
              a small web application. Since we did'nt have to much programming
              experience besides university a lot of learning had to take place.
              <br />
              <br />
              Boom! I was instantly hooked. The feedback from learning new
              technology and the direct application of that knowledge was
              fascinating and rewarding at the same time. And just like that i
              was in for a ride deciding to become a software engineer.
            </p>
          </div>
        </div>
      </div>

      <div className="about-quote">
        <div className="about-quote-text">
          <span className="heading-xl">„</span>

          <Parallax offset={20}>
            <p className="heading-m">
              My affinity with software engineering roots in an{" "}
              <span className="about-quote-text-grey">
                excitement for the hands-on building process,
              </span>{" "}
              the creative joy involved in the associated problem solving as
              well as a{" "}
              <span className="about-quote-text-grey">
                dedication towards continuous learning.
              </span>
            </p>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
