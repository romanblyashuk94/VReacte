import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_AUTH_DATA = "auth/SET_USER_AUTH_DATA";

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

//ActionCreator:

export const setUsersAuthData = (id, login, email, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  data: { id, login, email, isAuth },
});

//thunks:

export const getUsersAuthData = () => async (dispatch) => {
  const response = await authAPI.getAuthData();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setUsersAuthData(id, login, email, true));
  }
};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getUsersAuthData());
  } else {
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
