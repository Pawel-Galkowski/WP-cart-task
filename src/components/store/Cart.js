import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import { basketRemove, clearBasket } from "../../actions/storeBasket";
import Alert from "../layout/Alert";

const Cart = ({ shop: { basket }, basketRemove, clearBasket }) => {
  let fullPrice = 0;

  const addPrice = (el, count) => {
    fullPrice += el * count;
  };

  const removeItem = (item) => {
    basketRemove(basket, item);
  };

  const emptyBasket = () => {
    if (basket.length > 0) clearBasket();
  };

  return (
    <div className="container">
      <Link to="../">
        <button type="button" className="btn btn-info mt-2">
          <KeyboardBackspaceIcon /> Back to Shop
        </button>
      </Link>
      <div className="col-md-12 pt-4 pb-4">
        <h1>Cart</h1>
        <p>Items in cart: {basket.length ? basket.length : 0}</p>
      </div>
      <Alert/>
      <div className="border-bottom border-bottom-1 p-2 bg-info text-white">
        <div className="row">
          <div className="col-4">NAME</div>
          <div className="col-2">PRICE (in credits)</div>
          <div className="col-2">QUANITY</div>
          <div className="col-2">REMOVE</div>
          <div className="col-2">TOTAL</div>
        </div>
      </div>
      <div className="mb-4">
        {basket.length > 0 ? (
          basket.map((item) => (
            <div
              key={item.product}
              className="border-bottom border-bottom-1 light-style pb-2 pt-2 pr-4 pl-4"
            >
              <div className="row">
                <div className="col-4">{item.name}</div>
                <div className="col-2">{item.costInCredits}</div>
                <div className="col-2">{item.counter}</div>
                <div className="col-2">
                  <button
                    className="btn btn-link text-center"
                    type="button"
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
                <div className="col-2 text-right">
                  {item.costInCredits * item.counter}
                </div>
                {addPrice(item.costInCredits, item.counter)}
              </div>
            </div>
          ))
        ) : (
          <div className="p-2">
            <strong>Basket empty</strong>
          </div>
        )}
      </div>
      <div className="column">
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4 row bg-secondary text-white p-2">
            <div className="col-4">Subtotal</div>
            <div className="col-8 text-right">{fullPrice}</div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-10"> </div>
          <div className="col-2 d-flex justify-content-end">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                emptyBasket();
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  shop: PropTypes.object.isRequired,
  basketRemove: PropTypes.func.isRequired,
  clearBasket: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps, { basketRemove, clearBasket })(Cart);
