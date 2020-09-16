import { BASKET_UPDATE, BASKET_ERROR } from "./types";

export const basketUpdate = (list, res) => async (dispatch) => {
  const newList = [];
  list.map(item=>newList.push(item));
  newList.push(res);
  console.log(newList);
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
