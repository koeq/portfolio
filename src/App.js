import React, { useState, useLayoutEffect, lazy, Suspense } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";
import Start from "./components/start";
import About from "./components/about";
// import Projects from "./components/projects";
// lazy load component with the videos
import Contact from "./components/contact";
const Projects = lazy(() => import("./components/projects"));

function App() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isActive, setActive] = useState(false);

  const handleNavToggle = () => {
    setActive(!isActive);
  };

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
        <Nav
          handleNavToggle={() => handleNavToggle}
          isActive={isActive}
          setActive={setActive}
          screenWidth={screenWidth}
        />
        <Start screenWidth={screenWidth} />

        <About screenWidth={screenWidth} />
        <Suspense fallback={<div>loading...</div>}>
          <Projects isActive={isActive} screenWidth={screenWidth} />
        </Suspense>
        <Contact />
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
