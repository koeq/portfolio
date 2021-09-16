import { BiMenuAltRight } from "react-icons/bi";
import { RiStackFill } from "react-icons/ri";
export default function Nav() {
  const navElements = ["projects", "github", "about"];

  // console.log(CgMenuRight);
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
        {/* <BiMenuAltRight size={30} /> */}
        <RiStackFill size={30} />
      </ul>
    </div>
  );
}
