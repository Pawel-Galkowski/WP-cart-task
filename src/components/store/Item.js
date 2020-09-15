import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Item({ card }) {
  var [state, setstate] = useState();

  const { price, manufacturer, name } = card;

  useEffect(() => {
    setstate(0);
  }, []);

  const increment = () => {
    setstate(++state);
  };

  const decrement = () => {
    if (state > 0) {
      setstate(--state);
    }
  };

  return (
    <div className="text-center border border-secondary mt-1 mb-1 p-4">
      <div className="card">
        <h5 className="card-title">{name}</h5>
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

export default Item;
