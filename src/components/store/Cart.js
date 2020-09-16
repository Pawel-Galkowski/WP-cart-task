import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Cart = ({ shop: { basket } }) => {

  let fullPrice = 0;

  const addPrice = (el, count) =>{
    fullPrice+=(el*count)
  }

  return (
    <div className="container">
      <div className="col-md-12 pt-4 pb-4">
        <h1>Cart</h1>
      </div>
      <ul>
        {basket.map((item) => (
          <li key={item.product}>
            <span>{item.name}</span>{"  "}
            <span>{item.counter}</span>{"  "}
            <span>{item.costInCredits}</span>{"  "}
            {addPrice(item.costInCredits, item.counter)}
          </li>
        ))}
      </ul>
        <div>Price: {fullPrice}</div>
    </div>
  );
};

Cart.propTypes = {
  shop: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps, {})(Cart);
