import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = [1, 2, 3, 4, 5];
  const card = {
    price: 5,
    manufacturer: "Poli",
    name: "Zabawka",
    img: "https://www.layoutit.com/img/sports-q-c-140-140-3.jpg",
  };

  let cartList = items.map((item) => {
    return <CartItem key={item.id} card={card} />;
  });

  return (
    <div>
      <div className="col-md-12 pt-4 pb-4">
        <h1>Cart</h1>
      </div>
      <div className="row">{cartList}</div>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
