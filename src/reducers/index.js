import { combineReducers } from "redux";
import alert from "./alert";
import reducer from "./reducer";

export default combineReducers({
  shop: reducer,
  alert
});
