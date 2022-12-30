import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import form from "./form";
import testimonial from "./testimonial";
import testimonialForm from "./testimonialForm";
import wall from "./wall";
import project from "./project";

export default combineReducers({
  auth,
  message,
  form,
  testimonial,
  testimonialForm,
  wall,
  project,
});
