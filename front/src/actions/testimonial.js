import testimonialService from "../services/testimonial.service";
import { ALL_SUCCESS } from "./types";

export const getAll = () => (dispatch) => {
  return testimonialService.getAll().then(
    (res) => {
      dispatch({
        type: ALL_SUCCESS,
        payload: res.data,
      });
      return Promise.resolve(res);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject();
    }
  );
};

export const createTestimonial = (info, data) => {
  return testimonialService.create(info, data);
};

export const updateTestimonial = (info, data) => {
  return testimonialService.update(info, data);
};

export const deleteTestimonial = (id) => {
  return testimonialService.deleteTest(id);
};
