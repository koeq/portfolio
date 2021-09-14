import "./App.css";

function Nav() {
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

function Landing() {
  return (
    <div className="landing-container">
      <Nav />
      <h1 className="heading">hey there</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
