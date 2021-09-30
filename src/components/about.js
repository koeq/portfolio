import React from "react";
import { Parallax } from "./parallax";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <Parallax offset={10} className={"flex-center"}>
          <h1>ABOUT</h1>
        </Parallax>
      </div>

      <div className="about-content-path">
        <div className="about-content">
          <Parallax offset={20}>
            <span className="who-am-i">-WHO AM I</span>
          </Parallax>
          <Parallax offset={30}>
            <p>
              I'm Benedikt König a 27 year old Developer and sport fanatic from
              Hamburg, Germany. When I'm not sharpening my coding skills I love
              to move. Mountain biking, strength and conditioning, running or
              surfing when on vacation. You name it! It's all about the balance
              between mental and physical work.
            </p>
          </Parallax>
          <Parallax offset={20}>
            <span>-EDUCATION</span>
          </Parallax>
          <Parallax offset={30}>
            <p>
              » BSc. Business Administration
              <br />» MSc. Management Information Systems <br />» To many coding
              tutorials
            </p>
          </Parallax>
          <Parallax offset={20}>
            <span>-TECHNOLOGY I USE</span>
          </Parallax>

          <Parallax offset={30}>
            <div className={"technology-i-use"}>
              <div className={"flex-center-column"}>
                <FaHtml5 size={"3vw"} />
                <p>HTML</p>
                <p>(HTML5)</p>
              </div>
              <div className={"flex-center-column"}>
                <FaCss3Alt size={"3vw"} />
                <p>CSS</p>
                <p>(FlexBox & Grid)</p>
              </div>
              <div className={"flex-center-column"}>
                <SiJavascript size={"3vw"} />
                <p>JS</p>
                <p>(ES6)</p>
              </div>

              <div className={"flex-center-column"}>
                <FaReact size={"3vw"} />
                <p>REACT (incl. Hooks)</p>
              </div>
            </div>
          </Parallax>
        </div>

        <div className="about-path">
          <span>MY PATH</span>

          <div className="about-path-text">
            <div className="about-border"></div>
            <p>
              Like many people i began my developer journey as a lost business
              student not satisfied with the content of my studies. When you
              leave school to go to university you imagine studying business
              administration as learning how to build the next succesfull start
              up. But reality hits you hard when you realize that there is one
              interesting course for ten boring ones like accounting or
              corporate reporting.
              <p>So what now?</p> A ray of hope! Business Informatics. Not all
              courses are boring afterall. It turnes out you can even put your
              main emphasis on that. Nice! My masters programm (Management
              Information Systems) got even more technical. As luck would have
              it my working student job required my colleague and me to develope
              a small web application. Since we did'nt have to much programming
              experience besides university a lot of learning had to take place.
              <p>Boom! I was instantly hooked.</p> The feedback from learning
              new technology and the direct application of that knowledge was
              fascinating and rewarding at the same time. And just like that i
              was in for a ride deciding to become a software engineer.
            </p>
          </div>
        </div>
      </div>

      <div className="about-quote">
        <div className="about-quote-text">
          <span>„</span>

          <Parallax offset={20}>
            <p>
              My affinity with software engineering roots in an{" "}
              <div className="about-quote-text-grey">
                excitement for the hands-on building process,
              </div>{" "}
              the creative joy involved in the associated problem solving as
              well as a{" "}
              <div className="about-quote-text-grey">
                dedication towards continuous learning.
              </div>
            </p>
          </Parallax>
        </div>
      </div>
    </div>
  );
}