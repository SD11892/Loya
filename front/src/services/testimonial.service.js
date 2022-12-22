import axios from "axios";
import { isEmpty } from "../util/isEmpty";

const API_URL = "http://localhost:8080/api/testimonial/";

const create = (info, data) => {
  console.log("info=", info);
  const formData = new FormData();
  if (data) {
    formData.append("file", data, data.name);
  }
  return axios.post(
    API_URL + "create",
    formData,
    {
      params: { info },
    },
    {
      headers: { "Content-Type": "multi-part/form-data" },
    }
  );
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
      if (err.code === "ERR_BAD_REQUEST") {
        return { CODE: "404", message: "Failed getting forms" };
      }
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

const deleteTest = (id) => {
  return axios.post(API_URL + "delete", null, {
    params: {
      id,
    },
  });
};

export default {
  create,
  getAll,
  getByFormUrl,
  deleteTest,
  update,
};
