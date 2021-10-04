const CHANGE_FOLOWED_STATUS = "CHANGE_FOLOWED_STATUS";
const SET_STATE = "SET_STATE";
const CHANGE_SEARCH_USER_FORM = "CHANGE_SEARCH_USER_FORM";

const initialState = {
  usersData: [],
  searchUserFormValue: "",
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FOLOWED_STATUS:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userID) {
            return { ...u, folowedStatus: !u.folowedStatus };
          } else {
            return u;
          }
        }),
      };
    case CHANGE_SEARCH_USER_FORM:
      return {
        ...state,
        searchUserFormValue: action.value,
      };
    case SET_STATE: {
      return { ...state, usersData: [...state.usersData, ...action.users] };
    }
    default:
      return state;
  }
};

export const changeFolowedStatusAC = (userID) => ({
  type: CHANGE_FOLOWED_STATUS,
  userID: userID,
});
export const setStateAC = (users) => ({
  type: SET_STATE,
  users: users,
});
export const changeSearchUserFormValueAC = (curentValue) => ({
  type: CHANGE_SEARCH_USER_FORM,
  value: curentValue,
});

export default usersPageReducer;
