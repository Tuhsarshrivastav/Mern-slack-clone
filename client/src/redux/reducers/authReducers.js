import {
  AUTH_CLEAR_ERROR,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_REQUEST,
  AUTH_RESPONSE,
  AUTH_SET_ERROR,
  AUTH_SET_USER,
} from "../action/types";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: {},
  user: {},
};
export default authReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: {},
      };
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
