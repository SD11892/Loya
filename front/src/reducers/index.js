import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import form from "./form";

export default combineReducers({
  auth,
  message,
  form,
});
