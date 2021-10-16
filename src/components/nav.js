import { Pivot as Hamburger } from "hamburger-react";
import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Nav({
  screenWidth,
  handleNavToggle,
  isActive,
  setActive
}) {
  // deactivate scrolling in nav-slide-menu
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    // container of all links

    isActive
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "scroll");
  }, [isActive]);

  const navElements = [
    <Hamburger
      toggled={isActive}
      toggle={setActive}
      onToggle={handleNavToggle}
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
    <div className="oe">œ</div>
  ];

  // animation

  const { scrollYProgress } = useViewportScroll();
  const scrollProgress = useTransform(scrollYProgress, [0, 1], ["0px", "100%"]);

  return (
    <div className="nav-container">
      <ul className={isActive ? "nav-list nav-list-active" : "nav-list"}>
        {navElements.map((element, index) => {
          return (
            <li
              key={index}
              className="nav-element"
              style={{
                fontSize: "clamp(1.8rem, 1.55vw, 3rem",
                fontWeight: "500"
              }}
            >
              {element}
            </li>
          );
        })}
      </ul>
      <hr className="nav-border-dark" />
      <motion.div
        // change progressbar for mobile
        style={
          screenWidth > 0 && screenWidth <= 768
            ? { width: scrollProgress, height: "3px" }
            : { height: scrollProgress, width: "0.5px" }
        }
        className="scroll-progression-bar"
      ></motion.div>

      <div className={isActive ? "slide-menu-active slide-menu" : "slide-menu"}>
        <div className="slide-menu-item-container">
          <div
            className={
              isActive
                ? "slide-menu-item slide-menu-item-active heading-nav"
                : "slide-menu-item"
            }
          >
            ABOUT
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
                ? "slide-menu-item slide-menu-item-active heading-nav"
                : "slide-menu-item"
            }
          >
            PROJECTS
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
                ? "slide-menu-item slide-menu-item-active heading-nav"
                : "slide-menu-item"
            }
          >
            CONTACT
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
    </div>
  );
}
