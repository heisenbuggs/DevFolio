import './App.css';
import './styles/Scrollbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CustomLoader from './ui/Loader';
import About from './views/AboutPage';
import Home from './views/HomePage';
import Projects from './views/ProjectPage';
import Resume from './views/ResumePage';

const App = () => {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <CustomLoader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <HeaderComponent/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;