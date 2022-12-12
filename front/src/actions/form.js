import FormService from "../services/form.service";
import { GETALL_SUCCESS } from "./types";

export const getAll = () => (dispatch) => {
  console.log("here");
  return FormService.getAll().then(
    (data) => {
      console.log(data.data);
      dispatch({
        type: GETALL_SUCCESS,
        payload: data.data,
      });
      return Promise.resolve(data.data);
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
  const parentId = 1;
  const url = makeid(6);
  const fname = name;
  return FormService.create(url, parentId, fname);
};

export const deleteForm = (Ids) => {
  console.log("Ids=", Ids);
  return FormService.deleteForms(Ids);
};

export const getByFormUrl = (url) => {
  return FormService.getByFormUrl(url).then(
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
