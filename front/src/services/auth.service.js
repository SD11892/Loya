import axios from 'axios';

const API_URL = '/api/auth/';

const register = (username, email, password) => {
  return axios
    .post(API_URL + 'signup', null, {
      params: {
        username,
        email,
        password,
      },
    })
    .then((response) => {
      console.log('response=', response);
      return {
        CODE: '200',
        message: 'Sign In Successfully',
        data: response.data,
      };
    })
    .catch((err) => {
      console.log('err=', err);
      if (err.code === 'ERR_BAD_REQUEST') {
        return { CODE: '404', message: 'Incorrect SignUp' };
      }
    });
};

const emailVerify = (email) => {
  return axios
    .post(API_URL + 'email', null, {
      params: {
        email,
      },
    })
    .then((res) => {
      return {
        CODE: '200',
        message: 'Verify SUCCESS',
        data: res,
      };
    })
    .catch((err) => {
      return {
        CODE: '400',
        message: 'Verify Failed',
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
      console.log('response=', response);
      localStorage.setItem('user', JSON.stringify(response.data.username));
      localStorage.setItem('email', JSON.stringify(response.data.email));
      localStorage.setItem('upgrade', JSON.stringify(response.data.upgrade));
      localStorage.setItem('userId', response.data.id);
      return {
        CODE: '200',
        message: 'Sign In Successfully',
        data: response.data,
      };
    })
    .catch((err) => {
      if (err.code === 'ERR_BAD_REQUEST') {
        return { CODE: '404', message: 'Incorrect User or Password' };
      } else {
        return { CODE: 500, message: 'Server error occured' };
      }
    });
};
const gmailGet = (gmail) => {
  return axios
    .post(API_URL + `gmailGet`, null, {
      params: {
        gmail,
      },
    })
    .then((response) => {
      return {
        CODE: '200',
        message: 'Account came',
        data: response,
      };
    })
    .catch((err) => {
      return {
        CODE: 500,
        message: 'Server error occured',
      };
    });
};

const update = (email, password) => {
  return axios
    .post(API_URL + `change_password`, null, {
      params: {
        email,
        password,
      },
    })
    .then((response) => {
      return {
        CODE: 200,
        message: 'Password Changed',
      };
    });
};
const logout = () => {
  localStorage.removeItem('user');
};

export default {
  emailVerify,
  register,
  login,
  logout,
  gmailGet,
  update,
};
