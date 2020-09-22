import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/layout/Navigation";
import Shop from "./components/store/Shop";
import Routes from "./components/routing/Routes";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
