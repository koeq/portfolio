import React, { useState, useRef, useLayoutEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion";

export function Parallax({ children, offset = 50 }) {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(0);

  const { scrollY } = useViewportScroll();

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight;
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 500, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

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
