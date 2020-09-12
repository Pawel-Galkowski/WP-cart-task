import {
  API_ERROR,
  DATA_TAKKEN,
} from "../actions/types";

const initialState = {
  forms: [],
  form: null,
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
        forms: payload,
        loading: false,
      };
    default:
      return state;
  }
}
