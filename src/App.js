import Nav from "./components/nav";
import "./App.css";

function Grain(props) {
  return <div className="grain-container">{props.children}</div>;
}

function App() {
  return (
    <div className="App">
      <Grain>
        <Nav />
      </Grain>
    </div>
  );
}

export default App;
