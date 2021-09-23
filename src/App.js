import React, { useState, useLayoutEffect, useRef } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";

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
  const [scrollY, setScrollY] = useState(0);
  const frontedRef = useRef(null);

  const onScroll = () => {
    frontedRef.current.style.transform = `translateX(${scrollY}px)`;
    setScrollY(window.scrollY * 3);
  };

  useLayoutEffect(() => {
    const scrollListener = window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  const contentListOne = ["F", "R", "O", "N", "T", "E", "·", "N", "·", "D"];
  return (
    <section>
      <div ref={frontedRef} className="gridContainerOne">
        {contentListOne.map((content, index) => (
          <span key={index} className={content === "·" ? "symnol" : null}>
            {content}
          </span>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App light-theme">
      <Grain>
        <Nav />

        <Landing />
      </Grain>
    </div>
  );
}

export default App;
