import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";
import StartMobile from "./components/startMobile";
import Start from "./components/start";
import About from "./components/about";
// lazy load component with the videos
import Contact from "./components/contact";
const Projects = lazy(() => import("./components/projects"));
const ProjectsMobile = lazy(() => import("./components/projectsMobile"));

function App() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isActive, setActive] = useState(false);

  const handleNavToggle = () => {
    setActive(!isActive);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // rerender app on window resize
  useEffect(() => {
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

        {window.innerWidth <= 480 ? (
          <StartMobile />
        ) : (
          <Start screenWidth={screenWidth} />
        )}

        <About />
        <Suspense fallback={<div>loading...</div>}>
          {window.innerWidth <= 480 ? (
            <ProjectsMobile isActive={isActive} screenWidth={screenWidth} />
          ) : (
            <Projects isActive={isActive} />
          )}
        </Suspense>
        <Contact isActive={isActive} />
      </Grain>
    </div>
  );
}

export default App;
