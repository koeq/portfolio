import React from "react";
import { motion } from "framer-motion";
import { ParallaxTwo } from "./parallax";

export default function Contact({ isActive, screenWidth }) {
  return (
    <div
      id="contact"
      className="contact-container"
      // padding top for mobile version
      style={screenWidth <= 480 ? { paddingTop: "2rem" } : null}
    >
      <ParallaxTwo offset={screenWidth > 768 ? 100 : 50}>
        <div className="get-in-contact-container">
          <span style={{ marginBottom: "10vh" }} className="heading-s-vh">
            GET IN CONTACT
          </span>
          <span className="heading-s-tech">œ</span>
        </div>
      </ParallaxTwo>
      <div className="contact-animation-container">
        <div className="mail-wrapper flex-center">
          <p className="heading-slide-scroll flex-center">
            <a
              className={` ${isActive ? "hide-link" : "show-link"}`}
              href="mailto:koe.be@web.de"
            >
              MAIL
            </a>
          </p>
        </div>

        <div className={`wrapper ${isActive ? "hide-link" : "show-link"}`}>
          <motion.div
            className={`marquee`}
            style={{ zIndex: "10" }}
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              ease: "linear",
              loop: Infinity
            }}
          >
            <p
              style={{ marginRight: "5.5vh" }}
              className="heading-slide-scroll show-link"
            >
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://github.com/koebe1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="http://benediktkoenig.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://github.com/koebe1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="http://benediktkoenig.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </p>

            <p
              style={{ marginRight: "5.5vh" }}
              className="heading-slide-scroll"
            >
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://github.com/koebe1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="http://benediktkoenig.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://github.com/koebe1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="http://www.benediktkoenig.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
