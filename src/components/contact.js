import React from "react";

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

        <div style={{ height: "20vh" }} class="wrapper">
          <div class="marquee">
            <p
              style={{ marginRight: "5.5vh" }}
              className="heading-slide-scroll"
            >
              GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN GITHUB
              INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM
              LINKEDIN GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN
            </p>
            <p className="heading-slide-scroll">
              GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN GITHUB
              INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM
              LINKEDIN GITHUB INSTAGRAM LINKEDIN GITHUB INSTAGRAM LINKEDIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
