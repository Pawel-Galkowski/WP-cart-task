import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { request, gql } from "graphql-request";

const GET_DATA = gql`
  {
    allStarships(first: 100) {
      starships {
        name
        model
        manufacturers
        costInCredits
      }
    }
  }
`;

const Shop = () => {
  var itemList;
  // let itemList = data !== undefined
  //   ? data.map((item) => {
  //       return <Item key={item.id} card={item} />;
  //     })
  //   : null;
  var list = request("https://swapi.apis.guru/", GET_DATA).then((data) => {
    return data;
  });

  console.log(list);

  return (
    <div>
      <div className="col-md-12 pt-4 pb-4">
        <h1>Products</h1>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default connect(null, {})(Shop);
