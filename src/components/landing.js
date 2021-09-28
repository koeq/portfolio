import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export function LandingOne() {
  const contentListOne = ["F", "R", "O", "N", "T"];
  const contentListTwo = ["E", "·", "N", "·", "D"];

  // // progress of scroll 0-1
  const { scrollYProgress } = useViewportScroll();

  const xPosAnimOne = useTransform(
    scrollYProgress,
    [0, 0.03],
    ["0vw", "-100vw"]
  );
  const xPosAnimTwo = useTransform(
    scrollYProgress,
    [0, 0.03],
    ["0vw", "100vw"]
  );

  return (
    <div className="landing-container">
      <motion.div
        className="flex-center frontend-container"
        animate={{ opacity: 1, translateY: -30, scale: 0.9 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      >
        <motion.div style={{ x: xPosAnimOne }} className="text-row">
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

export function LandingTwo() {
  const contentListOne = ["E", "N", "G", "I", "N", "E", "E", "R"];

  const aboutText = (
    <div className="engineer-container-text">
      <span>Benedikt König</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        accusamus eius perferendis! Ex, cum nostrum soluta odit et quas
        assumenda exercitationem dignissimos iusto, laboriosam sit ab possimus,
      </p>
    </div>
  );

  // ANIMATION
  const { scrollYProgress } = useViewportScroll();
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fith, setFith] = useState(0);

  const animStart = 0.12;
  const delta = 0.01;

  const revealTimestamps = [
    animStart - delta * 3.5,
    animStart - delta * 2.5,
    animStart + delta * 20,
    animStart + delta * 21.5
  ];

  const opacityAnimation = useTransform(scrollYProgress, revealTimestamps, [
    0,
    1,
    1,
    0
  ]);

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

  const firstContent = ["·", "·", "|", "", "|", "", "|", "(", "("];

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
  const secondContent = ["·", "·", "", "|", "", "|", ")", ")"];

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
  const thirdContent = ["·", "·", "", "|", "", "|", "=", "="];

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
  const fourthContent = ["·", "·", "", "|", "", "|", ">", ">"];

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
  const fithContent = ["·", "·", "", "|", "", "|", ";", ";"];

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

  // set event listeners because FM doesent render if Motion Value is not put in style object
  useEffect(() => {
    firstAnimation.onChange(latest => setFirst(latest));
    secondAnimation.onChange(latest => setSecond(latest));
    thirdAnimation.onChange(latest => setThird(latest));
    fourthAnimation.onChange(latest => setFourth(latest));
    fithAnimation.onChange(latest => setFith(latest));
  }, []);

  // DEBUGGING ANIMATION
  // const handleScroll = () => {
  //   console.log(scrollYProgress.current);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });

  return (
    <motion.div
      className="landing-container-two"
      style={{ opacity: opacityAnimation }}
    >
      {/* FIRST ROW */}
      <div className="flex-center engineer-container">
        <motion.div className="text-row">
          {contentListOne.map((content, index) => (
            <span key={index} className="landing-text">
              {content}
            </span>
          ))}
        </motion.div>

        {/* SECOND ROW */}
        <div className="text-row">
          <motion.span
            style={{ content: firstAnimation }}
            className="landing-text-two arrow-function"
          >
            {firstAnimation.current}
          </motion.span>

          <motion.span className="landing-text-two arrow-function">
            {secondAnimation.current}
          </motion.span>

          <motion.span className="landing-text-two arrow-function">
            {thirdAnimation.current}
          </motion.span>

          <motion.span className="landing-text-two arrow-function">
            {fourthAnimation.current}
          </motion.span>

          <span className="landing-text-two">{aboutText}</span>

          <motion.span className="landing-text-two arrow-function">
            {fithAnimation.current}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
