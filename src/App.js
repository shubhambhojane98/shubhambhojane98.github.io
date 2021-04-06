import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/service" exact component={Service} />
          <Route path="/contact" exact component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
