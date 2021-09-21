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
        <ul
          className={
            isActive
              ? "nav-list nav-list-active"
              : "nav-list nav-list-deactivated"
          }
        >
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
          className={
            isActive
              ? "slide-menu-active slide-menu"
              : "slide-menu-deactivated slide-menu"
          }
        ></div>
      </div>
    </React.Fragment>
  );
}
