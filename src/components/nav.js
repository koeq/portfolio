import { Pivot as Hamburger } from "hamburger-react";
import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Nav() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  // deactivate scrolling in nav-slide-menu
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    isActive
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "scroll");
  }, [isActive]);

  const navElements = [
    <Hamburger
      toggled={isActive}
      toggle={setActive}
      onToggle={handleToggle}
      size={32}
      direction="right"
      distance="s,"
      duration={0.4}
      color="#fff"
      easing="ease"
    />,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "œ"
  ];

  // animation
  const [YProgress, setYProgress] = useState(0);

  const { scrollYProgress } = useViewportScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0px", "100%"]);

  const handleScroll = () => {
    setYProgress(scrollYProgress.current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const setWidth = {
    width: height,
    height: "3px"
  };

  const setHeight = {
    height: height,
    width: "1px"
  };

  return (
    <div className="nav-container">
      <ul className={isActive ? "nav-list nav-list-active" : "nav-list"}>
        {navElements.map((element, index) => {
          return (
            <li key={index} className="nav-element">
              {element}
            </li>
          );
        })}
      </ul>
      <hr className="nav-border-dark" />
      <motion.div
        // change progressbar for mobile
        style={window.innerWidth <= 480 ? setWidth : setHeight}
        className="scroll-progression-bar"
      ></motion.div>

      <div className={isActive ? "slide-menu-active slide-menu" : "slide-menu"}>
        <div
          className={
            isActive
              ? "slide-menu-item slide-menu-item-active"
              : "slide-menu-item"
          }
        >
          About
          <span
            className={
              isActive
                ? "slide-menu-item-sub1 slide-menu-item-sub-active"
                : "slide-menu-item-sub1"
            }
          >
            Benedikt König
          </span>
        </div>
        <div
          className={
            isActive
              ? "slide-menu-item slide-menu-item-active"
              : "slide-menu-item"
          }
        >
          Projects
          <span
            className={
              isActive
                ? "slide-menu-item-sub2 slide-menu-item-sub-active"
                : "slide-menu-item-sub2"
            }
          >
            Have a look
          </span>
        </div>
        <div
          className={
            isActive
              ? "slide-menu-item slide-menu-item-active"
              : "slide-menu-item"
          }
        >
          Contact
          <span
            className={
              isActive
                ? "slide-menu-item-sub3 slide-menu-item-sub-active"
                : "slide-menu-item-sub3"
            }
          >
            Send me a message
          </span>
        </div>
      </div>
    </div>
  );
}
