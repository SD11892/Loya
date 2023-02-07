import axios from 'axios';

const API_URL = '/api/auth/';

const register = (username, email, password) => {
  return axios
    .post('https://dashboard.tryloya.com:9000/api/auth/' + 'signup', null, {
      params: {
        username,
        email,
        password,
      },
    })
    .then((response) => {
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
    .post('https://dashboard.tryloya.com:9000/api/auth/' + 'email', null, {
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
    .post('https://dashboard.tryloya.com:9000/api/auth/' + `signin`, null, {
      params: {
        email,
        password,
      },
    })
    .then((response) => {
      ///////////Database Success////////////////////////
      console.log('response=', response);
      localStorage.setItem(
        'user',
        JSON.parse(JSON.stringify(response.data.username))
      );
      localStorage.setItem(
        'email',
        JSON.parse(JSON.stringify(response.data.email))
      );
      localStorage.setItem(
        'upgrade',
        JSON.parse(JSON.stringify(response.data.upgrade))
      );
      localStorage.setItem('userId', response.data.id);
      return {
        CODE: 200,
        message: 'Sign In Successfully',
        data: response.data,
      };
    })
    .catch((err) => {
      console.log('er-', err);
      if (err.code === 'ERR_BAD_REQUEST') {
        return { CODE: 404, message: 'Incorrect User or Password' };
      } else {
        return { CODE: 500, message: 'Server error occured' };
      }
    });
};
const gmailGet = (gmail) => {
  console.log('gmail');
  return axios
    .post('https://dashboard.tryloya.com:9000/api/auth/' + `gmailGet`, null, {
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
      console.log('Axios with https server error=', err);
      return {
        CODE: 500,
        message: 'Server error occured',
      };
    });
};

const update = (email, password) => {
  return axios
    .post(
      'https://dashboard.tryloya.com:9000/api/auth/' + `change_password`,
      null,
      {
        params: {
          email,
          password,
        },
      }
    )
    .then((response) => {
      return {
        CODE: 200,
        message: 'Password Changed',
      };
    });
};
const upgrade = (level) => {
  const id = localStorage.getItem('userId');
  return axios
    .post('https://dashboard.tryloya.com:9000/api/auth/' + `upgrade`, null, {
      params: {
        id,
        level,
      },
    })
    .then((response) => {
      return {
        CODE: 200,
        message: 'Upgrade',
      };
    });
};
const account = (username, email) => {
  return axios
    .post('https://dashboard.tryloya.com:9000/api/auth/' + `account`, null, {
      params: {
        username,
        email,
      },
    })
    .then((response) => {
      return {
        CODE: 200,
        message: 'Changed',
      };
    });
};
const logout = () => {
  localStorage.removeItem('user');
};

export default {
  upgrade,
  emailVerify,
  register,
  login,
  logout,
  gmailGet,
  update,
  account,
};
