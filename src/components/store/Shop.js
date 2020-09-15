import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { connect } from "react-redux";
import { getData } from "./../../actions/apis";
import Spinner from "../layout/Spinner";

const Shop = ({ getData, shop: { starships, loading } }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div className="col-md-12 pt-4 pb-4">
        <h1>Products</h1>
      </div>
      <div className="row">
        {starships.map((ship) => 
          <Item key={ship.id} card={ship} />
        )}
      </div>
    </div>
  );
};

Shop.propTypes = {
  getData: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps, { getData })(Shop);
