import axios from "axios";

const API_URL = "/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", null, {
    params: {
      username,
      email,
      password,
    },
  });
};

const emailVerify = (email) => {
  return axios
    .post(API_URL + "email", null, {
      params: {
        email,
      },
    })
    .then((res) => {
      return {
        CODE: "200",
        message: "Verify SUCCESS",
        data: res,
      };
    })
    .catch((err) => {
      return {
        CODE: "400",
        message: "Verify Failed",
        data: err,
      };
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + `signin`, null, {
      params: {
        email,
        password,
      },
    })
    .then((response) => {
      console.log("response=", response);
      localStorage.setItem("user", JSON.stringify(response.data));
      return {
        CODE: "200",
        message: "Sign In Successfully",
        data: response.data,
      };
    })
    .catch((err) => {
      console.log(err);
      if (err.code === "ERR_BAD_REQUEST") {
        return { CODE: "404", message: "Incorrect User or Password" };
      }
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

export default {
  emailVerify,
  register,
  login,
  logout,
};
