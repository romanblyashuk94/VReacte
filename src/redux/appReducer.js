import { getUsersAuthData } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const initialState = {
  initialaized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialaized: true,
      };
    default:
      return state;
  }
};

// ActionCreators:

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

//Thunks:

export const initializeApp = () => async dispatch => {
  await dispatch(getUsersAuthData());
  dispatch(initializedSuccess());
};

export default appReducer;
