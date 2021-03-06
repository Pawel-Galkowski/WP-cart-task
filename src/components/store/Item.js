import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { basketUpdate } from "../../actions/storeBasket";

const Item = ({ card, shop: { basket }, basketUpdate }) => {
  var [state, setstate] = useState({
      product: "",
      counter: 0,
    });
  const { id, costInCredits, manufacturers, name } = card;

  const checkElements = (elem) => {
    let counterUpdate = elem.counter;
    let removeItem = -1;
    basket.forEach((item, index) => {
      if (item.id === id) {
        counterUpdate += item.counter;
        removeItem = index;
      }
    });
    if (removeItem >= 0) basket.splice(removeItem, 1);
    elem.counter = counterUpdate;
    basketUpdate(basket, elem);
    setstate({...state, counter: 0})
  };

  const updateStore = () => {
    if (state.product.length > 0) {
      const { product, counter } = state;
      const elem = { id, product, name, costInCredits, counter };
      checkElements(elem);
    }
  };

  const submitButton = (itemId) => {
    const number = state.counter;
    if (number > 0) {
      state.product=itemId;
    }
  };

  const increment = () => {
    if (costInCredits) {
      setstate({ ...state, counter: ++state.counter });
    }
  };

  const decrement = () => {
    if (state.counter > 0) {
      setstate({ ...state, counter: --state.counter });
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
                ? manufacturers.map((manufacturer, item) => (
                    <p key={item} className="line-1 mb-1">
                      {manufacturer + "."}
                    </p>
                  ))
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
            <span>Amount: {state.counter}</span>
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
            onClick={() => {
              submitButton(id);
              updateStore();
            }}
          />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  card: PropTypes.object.isRequired,
  basketUpdate: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps, { basketUpdate })(Item);
