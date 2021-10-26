import { Pivot as Hamburger } from "hamburger-react";
import React, { useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Nav({ handleNavToggle, isActive, setActive }) {
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
      <motion.div
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="nav-list-container"
        style={isActive ? { background: "#0f1111" } : null}
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
        <div className="nav-border-container">
          <hr className="nav-border-dark" />
          <motion.div
            // change progressbar for mobile
            style={
              window.innerWidth <= 768
                ? {
                    width: scrollProgress,
                    height: "1px"
                  }
                : {
                    height: scrollProgress,
                    width: "1px"
                  }
            }
            className="scroll-progression-bar"
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        className="slide-menu"
        style={{
          transform: isActive
            ? "translate3d(0,0,0)"
            : "translate3d(-200vw, 0, 0)"
        }}
      >
        <div className="slide-menu-item-container">
          <motion.div
            className="slide-menu-item heading-nav"
            style={
              isActive
                ? { transform: "translate3d(0,0,0)" }
                : { transform: "translate3d(-200vw, 0, 0)" }
            }
          >
            <a onClick={() => setActive(false)} href="#about">
              ABOUT
            </a>
            <motion.span
              className={
                isActive
                  ? "slide-menu-item-sub1 slide-menu-item-sub-active"
                  : "slide-menu-item-sub1"
              }
              style={
                isActive
                  ? { transform: "translate3d(0,0,0)" }
                  : { transform: "translate3d(-200vw, 0, 0)" }
              }
            >
              Benedikt König
            </motion.span>
          </motion.div>
          <motion.div
            className={
              isActive
                ? "slide-menu-item slide-menu-item-active heading-nav"
                : "slide-menu-item"
            }
            style={
              isActive
                ? { transform: "translate3d(0,0,0)" }
                : { transform: "translate3d(-200vw, 0, 0)" }
            }
          >
            <a onClick={() => setActive(false)} href="#projects">
              PROJECTS
            </a>

            <motion.span
              className={
                isActive
                  ? "slide-menu-item-sub2 slide-menu-item-sub-active"
                  : "slide-menu-item-sub2"
              }
              style={
                isActive
                  ? { transform: "translate3d(0,0,0)" }
                  : { transform: "translate3d(-200vw, 0, 0)" }
              }
            >
              Have a look
            </motion.span>
          </motion.div>
          <motion.div
            className={
              isActive
                ? "slide-menu-item slide-menu-item-active heading-nav"
                : "slide-menu-item"
            }
            style={
              isActive
                ? { transform: "translate3d(0,0,0)" }
                : { transform: "translate3d(-200vw, 0, 0)" }
            }
          >
            <a onClick={() => setActive(false)} href="#contact">
              CONTACT
            </a>
            <motion.span
              className={
                isActive
                  ? "slide-menu-item-sub3 slide-menu-item-sub-active"
                  : "slide-menu-item-sub3"
              }
              style={
                isActive
                  ? { transform: "translate3d(0,0,0)" }
                  : { transform: "translate3d(-200vw, 0, 0)" }
              }
            >
              Send me a message
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
