import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navigation = ({ shop: { basket } }) => {
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
            <Link className="nav-link active basket" to="/cart">
              <span>
                <ShoppingCartIcon />
                <span className="cart-basket d-flex align-items-center justify-content-center">
                  {basket.length >= 0 ? basket.length : "0"}
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  shop: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps, {})(Navigation);
