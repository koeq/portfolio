import React, { useState } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";
import { LandingOne, LandingTwo } from "./components/landing";
import { useViewportScroll } from "framer-motion";

function App() {
  // get scrollProgress in View
  const [yProgress, setYProgress] = useState(null);
  const { scrollYProgress } = useViewportScroll();

  return (
    <div className="App light-theme">
      <Grain>
        <Nav />
        <LandingOne scrollYProgress={scrollYProgress} />
        <LandingTwo />
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
