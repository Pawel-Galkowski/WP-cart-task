import React from "react";
import { Link } from "react-router-dom";
import BasketData from "../basket/BasketIcon"

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary pl-3 pr3">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
      >
        <span className="navbar-toggler-icon"></span>
      </button>{" "}
      <Link className="navbar-brand" to="/">
        <strong>ITGalkowski</strong>
      </Link>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="navbar-nav ml-md-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/cart">
              <span>
                <BasketData/>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
