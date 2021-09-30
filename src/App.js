import React, { useState, useLayoutEffect } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";
import { LandingOne, LandingTwo } from "./components/landing";
import About from "./components/about";
import Projects from "./components/projects"

function App() {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App light-theme">
      <Grain>
        <Nav screenWidth={screenWidth} />
        <LandingOne screenWidth={screenWidth} />
        <LandingTwo />
        <About />
        <Projects/>
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
