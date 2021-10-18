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
      <div
        className={
          isActive
            ? "nav-list-container nav-list-container-active"
            : "nav-list-container"
        }
      >
        <ul className="nav-list">
          {navElements.map((element, index) => {
            return (
              <li
                key={index}
                className="nav-element"
                style={{
                  // heading-s-tech without letter-spacing
                  fontSize: "clamp(1.6rem, 1.55vw, 4rem)",
                  fontWeight: "500",
                  zIndex: "300 !important"
                }}
              >
                {element}
              </li>
            );
          })}
        </ul>
        <div
          className="nav-border-container"
          // style={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <hr className="nav-border-dark" />
          <motion.div
            // change progressbar for mobile
            style={
              screenWidth > 0 && screenWidth <= 768
                ? { width: scrollProgress, height: "1px" }
                : { height: scrollProgress, width: "1px" }
            }
            className="scroll-progression-bar"
          ></motion.div>
        </div>
      </div>

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
