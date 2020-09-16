import { ADDED_TO_BASKET, BASKET_ERROR} from "./types";

export const basketUpdate = () => async (dispatch) => {
  try {
    dispatch({
      type: ADDED_TO_BASKET,
      payload: res.allStarships.starships,
    });
  } catch (err) {
    dispatch({
      type: BASKET_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};