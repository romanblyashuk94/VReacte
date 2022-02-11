import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_AUTH_DATA = "auth/SET_USER_AUTH_DATA";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaURL: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
    case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

//ActionCreator:

export const setUsersAuthData = (id, login, email, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  data: { id, login, email, isAuth },
});

export const setCaptchaURL = (captchaURL) => ({
  type: SET_CAPTCHA_URL,
  data: { captchaURL },
});
//thunks:

export const getUsersAuthData = () => async (dispatch) => {
  const response = await authAPI.getAuthData();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setUsersAuthData(id, login, email, true));
  }
};

export const loginUser =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      dispatch(getUsersAuthData());
      dispatch(setCaptchaURL(null));
    } else {
      if (response.resultCode === 10) {
        const response = await securityAPI.getCaptchaURL();
        dispatch(setCaptchaURL(response.url));
      }
      dispatch(stopSubmit("login", { _error: response.messages }));
    }
  };

export const logoutUser = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setUsersAuthData(null, null, null, false));
  }
};

export default authReducer;
