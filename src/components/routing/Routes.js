import React from "react";
import { Route, Switch } from "react-router-dom";
import Alert from "../layout/Alert";
import Cart from "../store/Cart";
import Shop from "../store/Shop";

export const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </section>
  );
};

export default Routes;
