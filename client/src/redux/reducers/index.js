import authReducrs from "./authReducers";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducrs,
});
