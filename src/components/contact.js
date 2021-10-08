import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion";

export default function Contact({ screenWidth }) {
  const { scrollYProgress } = useViewportScroll();
  const xAnimOne = useTransform(
    scrollYProgress,
    [0.56, 0.8],
    [0, -screenWidth * 3]
  );
  const xAnimTwo = useTransform(
    scrollYProgress,
    [0.58, 0.8],
    [0, screenWidth * 2]
  );
  const xAnimThree = useTransform(
    scrollYProgress,
    [0.58, 0.8],
    [0, -screenWidth * 5]
  );
  const xOne = useSpring(xAnimOne, { stiffness: 600, damping: 120 });
  const xTwo = useSpring(xAnimTwo, { stiffness: 600, damping: 120 });
  const xThree = useSpring(xAnimThree, { stiffness: 600, damping: 120 });

  return (
    <div className="contact-container">
      <div className="wrapper">
        <motion.div style={{ x: xOne }} className="marquee">
          <p className="heading-slide-scroll">
            contact contact contact contact contact contact contact contact
            contact
          </p>
        </motion.div>
      </div>

      <div className="wrapper">
        <motion.div className="marquee marqueeTwo" style={{ x: xTwo }}>
          <div
            className="social-container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <BsGithub />
            <BsInstagram />
            <BsLinkedin />
            <MdEmail />
            <BsGithub />
            <BsInstagram />
            <BsLinkedin />
            <MdEmail />
            <BsGithub />
            <BsInstagram />
            <BsLinkedin />
            <MdEmail />
            <BsGithub />
            <BsInstagram />
            <BsLinkedin />
            <MdEmail />
          </div>
        </motion.div>
      </div>

      <div className="wrapper">
        <motion.div style={{ x: xThree }} className="marquee ">
          <p className="heading-slide-scroll">
            contact contact contact contact contact contact contact contact
            contact
          </p>
        </motion.div>
      </div>
    </div>
  );
}
