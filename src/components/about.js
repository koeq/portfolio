import React from "react";
import { Parallax } from "./parallax";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <Parallax offset={50} className={"flex-center"}>
          <h1>ABOUT</h1>
        </Parallax>
      </div>

      <div className="about-path">
        <span>MY PATH</span>

        <div className="about-path-text">
          <div className="about-border"></div>
          <p>
            <p>Hi there!</p>
            <p>I'm Bene, a german software engineer.</p> Like many people i
            began my developer journey as a lost business student not satisfied
            with the content of my studies. When you leave school to go to
            university you imagine studying business administration as learning
            how to build the next succesfull start up. But reality hits you hard
            when you realize that there is one interesting course for ten boring
            ones like accounting or corporate reporting.
            <p>So what now?</p> A ray of hope! Business Informatics. Not all
            courses are boring afterall. It turnes out you can even put your
            main emphasis on that. Nice! My masters programm then got more even
            more technical. And just like that i was in for a ride getting even
            more technical with my masters programm. As luck would have it my
            working student job required my colleague and me to develope a small
            web application. Since we did'nt have to much programming experience
            besides university a lot of learning had to take place.
            <p>I was instantly hooked!</p> The feedback from learning new
            technology and the direct application of that knowledge was
            fascinating and rewarding at the same time. And just like that i was
            in for a ride deciding to become a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
}
