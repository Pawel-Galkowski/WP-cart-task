import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const Shop = (props) => {
const items = [1,2,3,4,5];
  const card = {
    price: 5,
    manufacturer: "Poli",
    name: "Zabawka",
    img: "https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
  };

  let itemList = items.map((item) => {
    return <Item key={item.id} card={card} />;
  });

  return (
    <div>
      <div className="col-md-12 pt-4 pb-4">
        <h1>Products</h1>
      </div>
      <div className="row">{itemList}</div>
    </div>
  );
};

Shop.propTypes = {};

export default Shop;
