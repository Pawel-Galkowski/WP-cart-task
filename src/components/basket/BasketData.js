import React from "react";
import { withBasketData } from "react-basket";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const BasketData = (props) => (
  <IconButton color="inherit">
    <Badge badgeContent={props.basketData.items.length} color="secondary">
      <ShoppingCart />
    </Badge>
  </IconButton>
);

export default withBasketData(BasketData);
