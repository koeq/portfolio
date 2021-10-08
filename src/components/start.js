import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion";

export default function Start({ screenWidth }) {
  const { scrollYProgress } = useViewportScroll();
  const xAnimOne = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, screenWidth * 3]
  );
  const xAnimTwo = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, screenWidth * 2]
  );
  const xAnimThree = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, -screenWidth * 5]
  );
  const xOne = useSpring(xAnimOne, { stiffness: 600, damping: 120 });
  const xTwo = useSpring(xAnimTwo, { stiffness: 600, damping: 120 });
  const xThree = useSpring(xAnimThree, { stiffness: 600, damping: 120 });
  return (
    <div className="start-container">
      <div className="start-slider-container">
        <div className="slider-wrapper">
          <motion.div
            style={{ x: xOne }}
            className="slider-marquee slider-marquee-one"
          >
            <p>
              front end front end front end front end front end front end front
              end front end front end front end front end front end
            </p>
          </motion.div>
        </div>

        <div className="slider-wrapper">
          <div className="arrow-function-container">
            <span>Benedikt König</span>
            {/* <span>></span> */}
          </div>
        </div>

        <div className="slider-wrapper">
          <motion.div style={{ x: xThree }} className="slider-marquee ">
            <p>
              engineer engineer engineer engineer engineer engineer engineer
              engineer engineer engineer engineer engineer
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
