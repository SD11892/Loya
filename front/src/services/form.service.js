import axios from "axios";
import { isEmpty } from "../util/isEmpty";

const API_URL = "/api/form/";

const create = (url, parentId, userId, name) => {
  console.log("service =", parentId);
  return axios.post(API_URL + "create", null, {
    params: {
      url,
      userId,
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
  const projects = JSON.parse(localStorage.getItem("projects"));
  const userId = `${localStorage.getItem("userId")}`;
  return axios
    .post(API_URL + `all`, null, {
      params: {
        projects,
        userId,
      },
    })
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
