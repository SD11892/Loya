import testimonialService from "../services/testimonial.service";
import { ALL_SUCCESS, SAVE_INDEX } from "./types";

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

export const getByFormUrl = (url) => {
  return testimonialService.getByFormUrl(url).then(
    (data) => {
      console.log("data=", data);
      return Promise.resolve(data);
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

export const saveIndex = (info) => (dispatch) => {
  console.log("info=", info);
  dispatch({
    type: SAVE_INDEX,
    payload: info,
  });
};
