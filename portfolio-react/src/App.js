import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Canvas from "./components/Canvas/Canvas.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Router>
          <Navbar />
          <Canvas />
          <Wrapper>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/gallery">
                <Card />
              </Route>
            </Switch>
          </Wrapper>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
