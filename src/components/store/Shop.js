import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { connect } from "react-redux";
import { request, gql } from "graphql-request";
import { getData } from "./../../actions/apis";
import Spinner from "../layout/Spinner";

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

// async function bla({ getData }) {
//   const response = await request("https://swapi.apis.guru/", GET_DATA).then(
//     (data) => {
//       return data;
//     }
//   );
//   return response;
// }
const Shop = ({ getData, starships }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  // let itemList = data !== undefined
  //   ? data.map((item) => {
  //       return <Item key={item.id} card={item} />;
  //     })
  //   : null;
  // const response = request("https://swapi.apis.guru/", GET_DATA).then(function (
  //   data
  // ) {
  //   return data;
  // });
  // console.log(response);

  // var items = response.then((val) => {
  //   return val.allStarships.starships;
  // });

  // const items = bla();

  // console.log(items);

  return  false ? (
    <Spinner />
  ) : (
    <div>
      <div className="col-md-12 pt-4 pb-4">
        <h1>Products</h1>
      </div>
      <div className="row">{starships}</div>
    </div>
  );
};

Shop.propTypes = {
  getData: PropTypes.func.isRequired,
  starships: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  starships: state.starships,
});

export default connect(mapStateToProps, { getData })(Shop);
