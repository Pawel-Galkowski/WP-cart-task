import React from "react";
import { Basket } from 'react-basket';

const Cart = () => {
  return (
    <div className="container">
      <div className="col-md-12 pt-4 pb-4">
        <h1>Cart</h1>
      </div>
      <div><Basket /></div>
    </div>
  );
};

export default Cart;
