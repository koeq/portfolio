import React from "react";
import { motion } from "framer-motion";

export default function Contact({ isActive }) {
  return (
    <div className="contact-container">
      <div className="get-in-contact-container">
        <span style={{ marginBottom: "10vh" }} className="heading-s-vh">
          GET IN CONTACT
        </span>
        <span className="heading-s-tech">œ</span>
      </div>
      <div className="contact-animation-container">
        <div className="mail-wrapper flex-center">
          <p className="heading-slide-scroll flex-center">
            <a
              className="show-link"
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
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
              >
                INSTAGRAM
              </a>
              <a style={{ marginRight: "5.5vh" }} href="" target="_blank">
                LINKEDIN
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://github.com/koebe1"
                target="_blank"
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
              >
                INSTAGRAM
              </a>
              <a style={{ marginRight: "5.5vh" }} href="" target="_blank">
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
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
              >
                INSTAGRAM
              </a>
              <a style={{ marginRight: "5.5vh" }} href="" target="_blank">
                LINKEDIN
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://github.com/koebe1"
                target="_blank"
              >
                GITHUB
              </a>
              <a
                style={{ marginRight: "5.5vh" }}
                href="https://www.instagram.com/koe_bene/"
                target="_blank"
              >
                INSTAGRAM
              </a>
              <a style={{ marginRight: "5.5vh" }} href="" target="_blank">
                LINKEDIN
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
