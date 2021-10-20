import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";
import StartMobile from "./components/startMobile";
import Start from "./components/start";
import About from "./components/about";
// import Projects from "./components/projects";
// lazy load component with the videos
import Contact from "./components/contact";
const Projects = lazy(() => import("./components/projects"));
const ProjectsMobile = lazy(() => import("./components/projectsMobile"));
// import Projects from "./components/projects";

function App() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isActive, setActive] = useState(false);

  const handleNavToggle = () => {
    setActive(!isActive);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
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

        {screenWidth <= 480 ? (
          <StartMobile />
        ) : (
          <Start screenWidth={screenWidth} />
        )}

        <About screenWidth={screenWidth} />
        <Suspense fallback={<div>loading...</div>}>
          {screenWidth <= 480 ? (
            <ProjectsMobile isActive={isActive} screenWidth={screenWidth} />
          ) : (
            <Projects isActive={isActive} screenWidth={screenWidth} />
          )}
        </Suspense>
        <Contact screenWidth={screenWidth} isActive={isActive} />
      </Grain>
    </div>
  );
}

export default App;
