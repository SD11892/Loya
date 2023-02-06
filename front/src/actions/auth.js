import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  VERIFY_SUCCESS,
} from './types';

import AuthService from '../services/auth.service';

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password);
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password);
};

export const update = (email, password) => {
  return AuthService.update(email, password);
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const verify = (email) => {
  return AuthService.emailVerify(email)
    .then((res) => {
      console.log(res);
      return {
        CODE: res.CODE,
      };
    })
    .catch((err) => {
      console.log('err=', err);
      return Promise.reject();
    });
};

export const getByGmail = (gmail) => {
  return AuthService.gmailGet(gmail)
    .then((res) => {
      return {
        CODE: 200,
        data: res.data,
      };
    })
    .catch((err) => {
      return Promise.reject();
    });
};
