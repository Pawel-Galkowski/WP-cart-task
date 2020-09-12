import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Item({ card }) {
  var [state, setstate] = useState();

  const {price, manufacturer, name, img} = card;

  useEffect(() => {
    setstate(0);
  }, []);

  const increment = () => {
    setstate(++state);
  };

  const decrement = () => {
    setstate(--state);
  };

  return (
    <div className="text-center border border-secondary mt-1 mb-1 p-4">
      <div className="card">
        <div className="card-image">
          <img src={img} alt={name} className="img-thumbnail" />
        </div>
        <span className="card-title">{name}</span>
        <div className="card-content">
          <p>{manufacturer}</p>
          <p>
            <b>Price: {price}$</b>
          </p>
        </div>
        <div>
          <input type="button" value="+" onClick={increment} />
          <span>Value: {state}</span>
          <input type="button" value="-" onClick={decrement} />
        </div>
        <input type="submit" value="Add to cart" />
      </div>
    </div>
  );
}

Item.propTypes = {
  card: PropTypes.object.isRequired,
};

export default connect(null)(Item);
