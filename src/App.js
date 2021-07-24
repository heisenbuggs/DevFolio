import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/PreLoader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/Scrollbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
