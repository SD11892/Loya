import axios from "axios";
import { isEmpty } from "../util/isEmpty";

const API_URL = "http://localhost:8080/api/form/";

const create = (url, parentId, name) => {
  return axios.post(API_URL + "create", null, {
    params: {
      url,
      parentId,
      name,
    },
  });
};

const update = (info, data) => {
  const formData = new FormData();
  if (data) {
    formData.append("file", data, data.name);
  }
  return axios.post(
    API_URL + "update",
    formData,
    { params: { info } },
    {
      headers: { "Content-Type": "multi-part/form-data" },
    }
  );
};

const getAll = () => {
  return axios
    .get(API_URL + `all`)
    .then((response) => {
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
      console.log("jere");
      if (err.code === "ERR_BAD_REQUEST") {
        return { CODE: "404", message: "Failed getting forms" };
      }
    });
};

const getByFormUrl = async (url) => {
  console.log("formurl=", url);
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

const deleteForms = (ids) => {
  return axios.post(API_URL + "delete", null, {
    params: {
      ids,
    },
  });
};

export default {
  create,
  getAll,
  getByFormUrl,
  deleteForms,
  update,
};
