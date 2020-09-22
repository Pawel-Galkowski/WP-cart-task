import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import { basketRemove, clearBasket } from "../../actions/storeBasket";

const Cart = ({ shop: { basket }, basketRemove, clearBasket }) => {
  let price = 0;

  const addPrice = (el, count) => {
    price += el * count;
  };

  const removeItem = (item) => {
    basketRemove(basket, item);
  };

  const emptyBasket = () => {
    if (basket.length > 0) clearBasket();
  };

  return (
    <div>
      <Link to="../">
        <button type="button" className="btn btn-info mt-2">
          <KeyboardBackspaceIcon /> Back to Shop
        </button>
      </Link>
      <div className="col-12 pt-4 pb-4">
        <h1>Cart</h1>
        <p>Items in cart: {basket.length ? basket.length : 0}</p>
      </div>
      <div className="border-block p-2 bg-info text-white d-md-block">
        <div className="row">
          <div className="col-4 d-none d-md-block text-center">NAME</div>
          <div className="col-2 d-none d-md-block text-center">
            PRICE <br /> (in credits)
          </div>
          <div className="col-2 d-none d-md-block text-center">QUANITY</div>
          <div className="col-2 d-none d-md-block text-center">TOTAL</div>
          <div className="col-2 d-none d-md-block text-center">REMOVE</div>
        </div>
      </div>
      <div className="mb-4">
        {basket.length > 0 ? (
          basket.map((item) => (
            <div
              key={item.product}
              className="border-block border-bottom border-bottom-1 light-style pb-2 pt-2 pr-2 pl-2 d-md-block"
            >
              <div className="row styled-col">
                <div className="col-4 text-center">
                  <span className="d-block d-md-none">
                    Name: <br />
                  </span>
                  {item.name}
                </div>
                <div className="col-2 text-center d-none d-sm-block">
                  {item.costInCredits}
                </div>
                <div className="col-2 text-center">
                  <span className="d-block d-md-none">Count:</span>
                  {item.counter}
                </div>
                <div className="col-2 text-center">
                  <span className="d-block d-md-none">Price:</span>
                  {item.costInCredits * item.counter}
                </div>
                <div className="col-2 text-center">
                  <button
                    className="btn btn-outline-primary text-center"
                    type="button"
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    X
                  </button>
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
          <div className="col-4 col-md-8"></div>
          <div className="col-8 col-md-4 row bg-secondary text-white p-2">
            <div className="col-6 col-md-4">Subtotal</div>
            <div className="col-6 col-md-8 text-right">{price}</div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 col-md-10"> </div>
          <div className="col-6 col-md-2 d-flex justify-content-end">
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
