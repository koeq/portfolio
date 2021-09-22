import React from "react";
import Nav from "./components/nav";
import Grain from "./components/grain";
// import studioMkPlay from "./ressources/images/studioMkPlay.png";
import "./App.css";

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

function App() {
  return (
    <div className="App light-theme">
      <Grain>
        <Nav />
        <section className="section-1">
          <div className="heading">
            <span>hello</span>
          </div>
          {/* <Card width="60vw" height="80vh">
            <img src={studioMkPlay} alt="studioMK website play page" />
          </Card> */}
        </section>
      </Grain>
    </div>
  );
}

export default App;
