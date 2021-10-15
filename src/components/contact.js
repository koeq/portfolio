import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="get-in-contact-container">
        <span style={{ marginBottom: "10vh" }} className="heading-s-vh">
          GET IN CONTACT
        </span>
        <span className="heading-s-vh">œ</span>
      </div>
      <div className="contact-animation-container">
        <div className="contact-animation-wrapper flex-center">
          <p className="heading-slide-scroll flex-center">MAIL</p>
        </div>

        <div style={{ height: "20vh" }} className="wrapper">
          <motion.div
            className="marquee"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              ease: "linear",
              duration: 20,
              loop: Infinity
            }}
          >
            <p
              style={{ marginRight: "5.5vh" }}
              className="heading-slide-scroll"
            >
              GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN
            </p>
            <p className="heading-slide-scroll">
              GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
