import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navigation = ({ shop: { basket } }) => {
  
  const itemsCount = () => {
    if (basket.length >= 0) {
      let counter = 0;
      basket.forEach(item => {
        counter += item.counter;
      });
      return counter;
    } else {
      return "0";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary pl-3 pr3">
      <Link className="navbar-brand" to="/">
        <strong>ITGalkowski</strong>
      </Link>
      <ul className="navbar-nav ml-md-auto">
        <li className="nav-item">
          <Link className="nav-link active basket" to="/cart">
            <span>
              <ShoppingCartIcon />
              <span className="cart-basket d-flex align-items-center justify-content-center">
                {itemsCount()}
              </span>
            </span>
          </Link>
        </li>
      </ul>
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
