import {
  AUTH_CLEAR_ERROR,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_REQUEST,
  AUTH_RESPONSE,
  AUTH_SET_ERROR,
  AUTH_SET_USER,
} from "./types";
export const clearErrors = () => {
  return {
    type: AUTH_CLEAR_ERROR,
  };
};

//Login user
export const loginUser = (user) => (dispatch) => {};
//Register user
export const registerUser = (user) => (dispatch) => {};
//Set User

export const setUser = (user) => {
  return {
    type: AUTH_SET_USER,
    payload: user,
  };
};
