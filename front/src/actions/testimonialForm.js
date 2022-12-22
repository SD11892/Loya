import testimonialFormService from "../services/testimonialForm.service";
import { TEST_SUCCESS } from "./types";

export const getAll = () => (dispatch) => {
  return testimonialFormService.getAll().then(
    (res) => {
      console.log("data=", res.data);
      dispatch({
        type: TEST_SUCCESS,
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

export const createForm = (name) => {
  const test = 0;
  const url = makeid(6);
  const fname = name;
  return testimonialFormService.create(url, fname, test);
};

export const deleteForm = (Ids) => {
  return testimonialFormService.deleteForms(Ids);
};

export const saveForm = (info) => {
  return testimonialFormService.update(info);
};

export const getByFormUrl = (url) => {
  return testimonialFormService.getByFormUrl(url).then(
    (data) => {
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

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
