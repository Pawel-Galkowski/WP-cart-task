import { BASKET_UPDATE, BASKET_ERROR } from "./types";
import { setAlert } from "./alert";

export const basketUpdate = (list, res) => async (dispatch) => {
  const newList = [];
  list.map(item=>newList.push(item));
  newList.push(res);
  try {
    dispatch({
      type: BASKET_UPDATE,
      payload: newList,
    });
    dispatch(setAlert("Successfully added", "success"));
  } catch (err) {
    dispatch({
      type: BASKET_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
    dispatch(setAlert("Product not added", "danger"));
  }
};

export const basketRemove = (list, id) => async (dispatch) => {
  let removeItem = -1;
  list.map((item, index) => {
    if (item.id === id) {
      removeItem = index;
    }
  });
  if (removeItem >= 0) list.splice(removeItem, 1);
  try {
    dispatch({
      type: BASKET_UPDATE,
      payload: list,
    });
    dispatch(setAlert("Successfully removed", "success"));
  } catch (err) {
    dispatch({
      type: BASKET_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
    dispatch(setAlert("Product not added", "danger"));
  }
};

export const clearBasket = () => async (dispatch) => {
  try {
    dispatch({
      type: BASKET_UPDATE,
      payload: {},
    });
    dispatch(setAlert("Transaction finished", "success"));
  } catch (err) {
    dispatch({
      type: BASKET_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
    dispatch(setAlert("Product not added", "danger"));
  }
};
