import React from "react";
// import studioMkPlay from "./ressources/images/studioMkPlay.png";
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

function Landing() {
  return (
    <section className="section-1">
      <div className="grid-container">
        <span>F</span>
        <span>R</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>E</span>
        <span className="symbol">·</span>
        <span>N</span>
        <span className="symbol">·</span>
        <span>D</span>
        <span>E</span>
        <span>N</span>
        <span>G</span>
        <span className="symbol">·</span>
        <span className="symbol">·</span>
        <span>I</span>
        <span>N</span>
        <div className="grid-container-text">
          <span>Benedikt König</span>
          <p>
            I’m a freelance award winning designer and developer in the UK. With
            over 20 years of experience and self-learning, my goal is to
            innovate in digital and help brands that want to do that too. I work
            at the crossroads of digital product design and digital development.
            Having the ability to connect both visual and function seemlessly
            has proven invaluable to all I’ve worked with.
          </p>
        </div>

        <span>E</span>
        <span>E</span>
        <span>R</span>
        <span className="symbol">·</span>
        <span className="symbol">·</span>
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
