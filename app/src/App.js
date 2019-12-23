import React from 'react';
import Map from "./containers/Map";
import Home from "./containers/Home";
import Markers from "./containers/Markers"
import About from "./containers/About"
import { theme } from './theme'
import { MuiThemeProvider } from '@material-ui/core/styles';

import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter basename={'react-demo'}>
        <Switch>
            <Route path="/map" component={Map} />
            <Route path="/markers" component={Markers} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  )
}

export default App;
