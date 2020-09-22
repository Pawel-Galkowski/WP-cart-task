import { combineReducers } from "redux";
import reducer from "./Reducer";

export default combineReducers({
  shop: reducer,
});
