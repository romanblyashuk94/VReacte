const CHANGE_FOLOWED_STATUS = "CHANGE_FOLOWED_STATUS";
const SET_USERS = "SET_USERS";
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
            return { ...u, followed: !u.followed };
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
    case SET_USERS: {
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
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users,
});
export const changeSearchUserFormValueAC = (curentValue) => ({
  type: CHANGE_SEARCH_USER_FORM,
  value: curentValue,
});

export default usersPageReducer;
