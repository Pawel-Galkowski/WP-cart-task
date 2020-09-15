import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Item({ card }) {
  var [state, setstate] = useState();

  const { costInCredits, manufacturers, name } = card;

  useEffect(() => {
    setstate(0);
  }, []);

  const increment = () => {
    if (costInCredits) {
      setstate(++state);
    }
  };

  const decrement = () => {
    if (state > 0) {
      setstate(--state);
    }
  };

  return (
    <div className="grid1 text-center mt-1 mb-1 p-4">
      <div className="card d-flex justify-content-between">
        <div className="h-100">
          <h5 className="card-header">{name}</h5>
          <div className="card-body d-flex h-75 justify-content-between flex-column">
            <div>
              <h6 className="mb-3">Manufacturers:</h6>
              {manufacturers
                ? manufacturers.map((manufacturer) => <p className="line-1">{manufacturer + ","}</p>)
                : null}
            </div>
            <span>
              <b>
                {costInCredits
                  ? "Price: " + costInCredits + " credits"
                  : "unavailable"}
              </b>
            </span>
          </div>
        </div>
        <div className="card-footer">
          <div className="value-statement">
            <input
              className="btn btn-outline-primary"
              type="button"
              value="-"
              onClick={decrement}
            />
            <span>Amount: {state}</span>
            <input
              className="btn btn-outline-primary"
              type="button"
              value="+"
              onClick={increment}
            />
          </div>
          <input
            className="m-2 btn btn-success"
            type="submit"
            value="Add to cart"
            disabled={!costInCredits}
          />
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Item;
