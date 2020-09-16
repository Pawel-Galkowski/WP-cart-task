import {
  API_ERROR,
  DATA_TAKKEN,
  BASKET_UPDATE,
  BASKET_ERROR,
} from "../actions/types";

const initialState = {
  starships: [],
  basket: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case BASKET_ERROR:
    case API_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case DATA_TAKKEN:
      return {
        ...state,
        starships: payload,
        loading: false,
      };
    case BASKET_UPDATE:
      return {
        ...state,
        basket: payload,
        loading: false,
      };
    default:
      return state;
  }
}
