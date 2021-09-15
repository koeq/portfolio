export default function Nav() {
    const navElements = ["projects", "github", "about"];
  
    return (
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
      </div>
    );
  }