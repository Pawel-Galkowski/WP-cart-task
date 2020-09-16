import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Components
import Navigation from "./components/layout/Navigation";
import Shop from "./components/store/Shop";
import Routes from "./components/routing/Routes";

//Stylesheets
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route component={Routes} />
            </Switch>
          </main>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
