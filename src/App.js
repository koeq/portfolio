import React, { useEffect, useState } from "react";
import "./App.css";
import Grain from "./components/grain";
import Nav from "./components/nav";
import { LandingOne, LandingTwo } from "./components/landing";
import { useViewportScroll } from "framer-motion";

function App() {

  return (
    <div className="App light-theme">
      <Grain>
        <Nav />
        <LandingOne />
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
