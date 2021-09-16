import Nav from "./components/nav";
import studioMkPlay from "./ressources/images/studioMkPlay.png";
import "./App.css";

function Grain(props) {
  return <div className="grain-container">{props.children}</div>;
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
    <div className="App">
      <Grain>
        <Nav />
        <section className="section-1">
          <Card width="60vw" height="80vh">
            <img src={studioMkPlay} alt="studioMK website play page" />
          </Card>
        </section>
      </Grain>
    </div>
  );
}

export default App;
