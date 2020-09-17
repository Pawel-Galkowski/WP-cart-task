import { combineReducers } from "redux";
import reducer from "./Reducer";
import alert from "./Alert";

export default combineReducers({
  alert: alert,
  shop: reducer,
});
