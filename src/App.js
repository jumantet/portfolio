import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" render={props => <Home {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
