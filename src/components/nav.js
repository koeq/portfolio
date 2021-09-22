import { Pivot as Hamburger } from "hamburger-react";
import React, { useState } from "react";

export default function Nav() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const navElements = [
    <Hamburger
      toggled={isActive}
      toggle={setActive}
      onToggle={handleToggle}
      direction="right"
      distance="s,"
      duration={0.4}
      easing="ease"
    />,
    "about",
    "projects",
    "contact"
  ];

  return (
    <React.Fragment>
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

        <div
          className={isActive ? "slide-menu-active slide-menu" : "slide-menu"}
        >
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
    </React.Fragment>
  );
}
