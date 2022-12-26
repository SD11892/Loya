import axios from "axios";
import { isEmpty } from "../util/isEmpty";

const API_URL = "/api/testimonialform/";

const getAll = () => {
  return axios
    .get(API_URL + `all`)
    .then((response) => {
      console.log("response=", response);
      if (isEmpty(response.data)) {
        return {
          CODE: "200",
          message: "Empty",
        };
      } else {
        return {
          CODE: "200",
          message: "Get All Froms Successfully",
          data: response.data,
        };
      }
    })
    .catch((err) => {
      if (err.code === "ERR_BAD_REQUEST") {
        return { CODE: "404", message: "Failed getting forms" };
      }
    });
};
const create = (url, name, testimonials) => {
  return axios.post(API_URL + "create", null, {
    params: {
      url,
      name,
      testimonials,
    },
  });
};

const update = (info) => {
  console.log("service=", info);
  return axios.post(API_URL + "update", null, { params: { info } });
};

const deleteForms = (ids) => {
  return axios.post(API_URL + "delete", null, {
    params: {
      ids,
    },
  });
};

const getByFormUrl = async (url) => {
  try {
    const res = await axios.get(API_URL + ":" + url + "/");
    return {
      CODE: 200,
      message: "success",
      data: res,
    };
  } catch (err) {
    console.log("createErr=", err);
  }
};

export default {
  getAll,
  create,
  deleteForms,
  update,
  getByFormUrl,
};
