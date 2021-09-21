import React from "react";

export default function Nav() {
  const navElements = ["projects", "github", "about"];

  return (
    <React.Fragment>
      <div className="nav-container">
        <ul className="nav-list">
          {navElements.map((element, index) => {
            return (
              <li key={index} className="nav-element">
                {element}
              </li>
            );
          })}
        </ul>
        <hr className="nav-border-dark" />
      </div>
    </React.Fragment>
  );
}
