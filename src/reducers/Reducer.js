import {
  API_ERROR,
  DATA_TAKKEN,
} from "../actions/types";

const initialState = {
  starships: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
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
    default:
      return state;
  }
}
