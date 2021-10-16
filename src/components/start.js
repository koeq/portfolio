import React, { useState, useEffect } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from "framer-motion";

export default function Start({ screenWidth }) {
  // SLIDE ANIMATION
  const { scrollYProgress } = useViewportScroll();
  const xAnimOne = useTransform(
    scrollYProgress,
    [0, 0.7],
    [0, -screenWidth * 3]
  );

  const xAnimTwo = useTransform(
    scrollYProgress,
    [0, 0.7],
    [0, -screenWidth * 5]
  );
  const xOne = useSpring(xAnimOne, { stiffness: 600, damping: 120 });
  const xTwo = useSpring(xAnimTwo, { stiffness: 600, damping: 120 });
  //

  //   TYPING ANIMATION
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fith, setFith] = useState(0);
  const [sixth, setSixth] = useState(0);

  const animStart = 0.15;
  const delta = 0.014;

  // change values to change animation beginning/delay

  const firstTimestamps = [
    0,
    animStart,
    animStart + delta,
    animStart + delta * 2,
    animStart + delta * 3,
    animStart + delta * 4,
    animStart + delta * 5,
    animStart + delta * 6,
    animStart + delta * 6
  ];

  const firstContent = ["", "", "|", "", "|", "", "|", "(", "("];

  const secondTimestamps = [
    0,
    animStart,
    animStart + delta * 5,
    animStart + delta * 6,
    animStart + delta * 7,
    animStart + delta * 8,
    animStart + delta * 9,
    animStart + delta * 9
  ];
  const secondContent = ["", "", "", "|", "", "|", ")", ")"];

  const thirdTimestamps = [
    0,
    animStart,
    animStart + delta * 8,
    animStart + delta * 9,
    animStart + delta * 10,
    animStart + delta * 11,
    animStart + delta * 12,
    animStart + delta * 12
  ];
  const thirdContent = ["", "", "", "|", "", "|", "=", "="];

  const fourthTimestamps = [
    0,
    animStart,
    animStart + delta * 11,
    animStart + delta * 12,
    animStart + delta * 13,
    animStart + delta * 14,
    animStart + delta * 15,
    animStart + delta * 16
  ];
  const fourthContent = ["", "", "", "|", "", "|", ">", ">"];

  const fithTimestamps = [
    0,
    animStart,
    animStart + delta * 15,
    animStart + delta * 16,
    animStart + delta * 17,
    animStart + delta * 18,
    animStart + delta * 19,
    animStart + delta * 20
  ];
  const fithContent = ["", "", "", "|", "", "|", "œ", "œ"];

  const sixthTimestamps = [
    0,
    animStart,
    animStart + delta * 19,
    animStart + delta * 20,
    animStart + delta * 21,
    animStart + delta * 22,
    animStart + delta * 23,
    animStart + delta * 24
  ];
  const sixthContent = ["", "", "", "|", "", "|", ";", ";"];

  // opacity animation
  const fade = useTransform(
    scrollYProgress,
    [animStart - delta * 2, animStart - delta],
    [1, 0]
  );
  //   typing animations
  const firstAnimation = useTransform(
    scrollYProgress,
    firstTimestamps,
    firstContent
  );

  const secondAnimation = useTransform(
    scrollYProgress,
    secondTimestamps,
    secondContent
  );
  const thirdAnimation = useTransform(
    scrollYProgress,
    thirdTimestamps,
    thirdContent
  );
  const fourthAnimation = useTransform(
    scrollYProgress,
    fourthTimestamps,
    fourthContent
  );
  const fithAnimation = useTransform(
    scrollYProgress,
    fithTimestamps,
    fithContent
  );
  const sixthAnimation = useTransform(
    scrollYProgress,
    sixthTimestamps,
    sixthContent
  );

  // set event listeners because FM doesent render if Motion Value is not put in style object
  useEffect(() => {
    firstAnimation.onChange(latest => setFirst(latest));
    secondAnimation.onChange(latest => setSecond(latest));
    thirdAnimation.onChange(latest => setThird(latest));
    fourthAnimation.onChange(latest => setFourth(latest));
    fithAnimation.onChange(latest => setFith(latest));
    sixthAnimation.onChange(latest => setSixth(latest));
  }, [
    firstAnimation,
    secondAnimation,
    thirdAnimation,
    fourthAnimation,
    fithAnimation,
    sixthAnimation
  ]);
  //
  return (
    <div className="start-container">
      <div className="start-slider-container">
        <div>
          <div className="slider-wrapper">
            <motion.div
              style={{ x: xOne }}
              className="slider-marquee slider-marquee-long"
            >
              <p className="heading-slide-scroll">
                FRONT END FRONT END FRONT END FRONT END FRONT END FRONT END
                FRONT END FRONT END FRONT END FRONT END FRONT END FRONT END
                FRONT END
              </p>
            </motion.div>
          </div>

          <div className="slider-wrapper slider-wrapper-short">
            <motion.div
              style={{ x: xTwo }}
              className="slider-marquee slider-marquee-short"
            >
              <p className="heading-slide-scroll">
                R ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER
                ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER
                ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER
                ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER ENGINEER
              </p>
            </motion.div>
          </div>
        </div>

        <div className="slider-wrapper slider-wrapper-name">
          <div className="arrow-func-container">
            <div className="name">
              <motion.span style={{ opacity: fade }}>
                Benedikt König
              </motion.span>
            </div>
            <div className="arrow-func">
              <motion.span>{firstAnimation.current}</motion.span>

              <motion.span>{secondAnimation.current}</motion.span>

              <motion.span>{thirdAnimation.current}</motion.span>

              <motion.span style={{ right: "1vw" }}>
                {fourthAnimation.current}
              </motion.span>

              <motion.span style={{ left: "max(1.5rem,1.4vw)" }}>
                {fithAnimation.current}
              </motion.span>

              <motion.span>{sixthAnimation.current}</motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
