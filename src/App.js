import Nav from "./components/nav";
import studioMkPlay from "./ressources/images/studioMkPlay.png";
import "./App.css";

function Grain(props) {
  return <div className="grain-container grain-dark">{props.children}</div>;
}

function Card(props) {
  return (
    <div
      className="card-container"
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App light-theme">
      <Grain>
        <Nav />
        <section className="section-1">
          <div className="heading">
            <span>I like to </span>
            <span>build</span>
            <span>.</span>
          </div>
          {/* <Card width="60vw" height="80vh">
            <img src={studioMkPlay} alt="studioMK website play page" />
          </Card> */}
        </section>
      </Grain>
    </div>
  );
}

export default App;
