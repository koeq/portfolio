import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Landing() {
  const contentListOne = ["F", "R", "O", "N", "T"];
  const contentListTwo = ["E", "·", "N", "·", "D"];

  const [animationOffset, setAnimationOffset] = useState(0);

  const [textRowWidth, setTextRowWidth] = useState(0);
  const [vw, setVw] = useState(0);

  const textRowRef = useRef(null);

  // progress of scroll in landing container
  const { scrollYProgress } = useViewportScroll();

  // change animation offset on window resize
  const handleResize = () => {
    setTextRowWidth(textRowRef.current.offsetWidth);
    // get vw cross-browser
    setVw(
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )
    );
  };

  useEffect(() => {
    // width of fronted text container
    setTextRowWidth(textRowRef.current.offsetWidth);
    // get vw cross-browser
    setVw(
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )
    );
    //
    const scrollListener = window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    // get distance text has to be approx. (bc of transform scale)
    // moved out of the screen in pixels

    setAnimationOffset(textRowWidth * 2 + (vw - textRowWidth));
    // move text according to scroll postion in landing container
  }, [vw, textRowWidth]);

  const xPosAnimOne = useTransform(
    scrollYProgress,
    [0, -1],
    [0, -animationOffset]
  );
  const xPosAnimTwo = useTransform(
    scrollYProgress,
    [0, -1],
    [0, animationOffset]
  );

  return (
    <div className="landing-container">
      <motion.div
        className="flex-center frontend-container"
        animate={{ opacity: 1, translateY: -30, scale: 0.9 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          ref={textRowRef}
          style={{ x: xPosAnimOne }}
          className="text-row"
        >
          {contentListOne.map((content, index) => (
            <span key={index} className="landing-text">
              {content}
            </span>
          ))}
        </motion.div>
        <motion.div style={{ x: xPosAnimTwo }} className="text-row">
          {contentListTwo.map((content, index) => (
            <span key={index} className="landing-text">
              {content}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
