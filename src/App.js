import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// function Card(props) {
//   return (
//     <div
//       className="card-container"
//       style={{ width: props.width, height: props.height }}
//     >
//       {props.children}
//     </div>
//   );
// }

/* <Card width="60vw" height="80vh">
            <img src={studioMkPlay} alt="studioMK website play page" />
          </Card> */

// function Landing() {
//   return (
//     <section className="section-1">
//       <div className="grid-container">
//         <span>F</span>
//         <span>R</span>
//         <span>O</span>
//         <span>N</span>
//         <span>T</span>

//         <span>E</span>
//         <span className="symbol">·</span>
//         <span>N</span>
//         <span className="symbol">·</span>
//         <span>D</span>

//         <div className="space" />

//         <span>E</span>
//         <span>N</span>
//         <span>G</span>

//         <span>I</span>
//         <span>N</span>

//         {/* <span className="symbol">·</span> */}

//         <div className="symbol flex-center">
//           <div className="crossed"></div>
//         </div>
//         <span className="symbol">·</span>
//         <div className="grid-container-text">
//           <span>Benedikt König</span>
//           <p>
//             I’m a freelance award winning designer and developer in the UK. With
//             over 20 years of experience and self-learning, my goal is to
//             innovate in digital and help brands that want to do that too. I work
//             at the crossroads of digital product design and digital development.
//           </p>
//         </div>

//         <span>E</span>
//         <span>E</span>
//         <span>R</span>

//         <span className="symbol">·</span>
//         {/* <span className="symbol">·</span> */}
//         <div className="symbol flex-center">
//           <div className="crossed"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

function Landing() {
  const contentListOne = ["F", "R", "O", "N", "T"];
  const contentListTwo = ["E", "·", "N", "·", "D"];

  const [animationOffset, setAnimationOffset] = useState(0);

  const [yProgress, setYProgress] = useState(0);
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

function App() {
  return (
    <div className="App light-theme">
      <Grain>
        <Nav />

        <Landing />
        <div>HELLO</div>
      </Grain>
    </div>
  );
}

// disable horizontal scroll to make position: sticky and overflow-x: hidden work
window.onscroll = function() {
  window.scroll({
    left: 0
  });
};

export default App;
