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
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setUsersAuthData = (id, login, email) => ({
  type: SET_USER_AUTH_DATA,
  data: { id, login, email },
});

export const getUsersAuthData = () => {
  return (dispatch) => {
    authAPI.getAuthData().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setUsersAuthData(id, login, email));
      }
    });
  };
};

export default authReducer;
