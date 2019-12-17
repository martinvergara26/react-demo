import React from 'react';
import Map from "./containers/Map";
import Home from "./containers/Home";
import Markers from "./containers/Markers"
import About from "./containers/About"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App;
