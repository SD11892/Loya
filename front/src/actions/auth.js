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
