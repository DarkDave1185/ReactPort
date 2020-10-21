import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Canvas from "./components/Canvas.jsx";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
