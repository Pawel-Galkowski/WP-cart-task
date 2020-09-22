import { BASKET_UPDATE, BASKET_ERROR } from "./types";

export const basketUpdate = (list, res) => async (dispatch) => {
  const newList = [];
  list.map(item=>newList.push(item));
  newList.push(res);
  try {
    dispatch({
      type: BASKET_UPDATE,
      payload: newList,
    });
  } catch (err) {
    dispatch({
      type: BASKET_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};

export const basketRemove = (list, id) => async (dispatch) => {
  let removeItem = -1;
  // eslint-disable-next-line
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
  } catch (err) {
    dispatch({
      type: BASKET_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};

export const clearBasket = () => async (dispatch) => {
  try {
    dispatch({
      type: BASKET_UPDATE,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: BASKET_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};
