import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import form from "./form";
import testimonial from "./testimonial";
import testimonialForm from "./testimonialForm";
import wall from "./wall";

export default combineReducers({
  auth,
  message,
  form,
  testimonial,
  testimonialForm,
  wall,
});
