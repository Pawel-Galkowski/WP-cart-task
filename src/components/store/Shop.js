import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { connect } from "react-redux";
import { getData } from "../../actions/apis";
import Spinner from "../layout/Spinner";
import Alert from "./../layout/Alert";
import { Info } from "@material-ui/icons";

const Shop = ({ getData, shop: { starships, loading } }) => {
  /* eslint-disable */
  useEffect(() => {
    getData();
  }, [getData]);
  /* eslint-enable */

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div className="col-md-12 pt-4 pb-4">
        <h1 className="mb-2">Products</h1>
        <p><Info color="error"/> When you add something to basket you will get the status alert.</p>
      </div>
      <Alert />
      <div className="grid-template">
        {starships.map((ship) => (
          <Item key={ship.id} card={ship} />
        ))}
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
