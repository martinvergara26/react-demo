import React from 'react';
import './App.css';
import Map from "./routes/Map";
import Home from "./routes/Home";
import Markers from "./routes/Markers"
import About from "./routes/About"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/markers">
          <Markers />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
