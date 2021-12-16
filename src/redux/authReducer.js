import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setUsersAuthData = (id, login, email, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  data: { id, login, email, isAuth },
});

export const getUsersAuthData = () => {
  return (dispatch) => {
    authAPI.getAuthData().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setUsersAuthData(id, login, email, true));
      }
    });
  };
};

export const loginUser = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispatch(getUsersAuthData());
    } else {
      dispatch(stopSubmit("login", { _error: response.messages }));
    }
  });
};

export const logoutUser = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      dispatch(setUsersAuthData(null, null, null, false));
    }
  });
};

export default authReducer;
