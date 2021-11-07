const CHANGE_FOLOWED_STATUS = "CHANGE_FOLOWED_STATUS";
const SET_USERS = "SET_USERS";
const CHANGE_SEARCH_USER_FORM = "CHANGE_SEARCH_USER_FORM";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOOGLE_FETCHING_STATUS = "TOOGLE_FETCHING_STATUS";

const initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  searchUserFormValue: "",
  isFetching: true,
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
        searchUserFormValue: action.curentValue,
      };
    case SET_USERS:
      return {
        ...state,
        usersData: action.users,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOOGLE_FETCHING_STATUS:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const changeFolowedStatus = (userID) => ({
  type: CHANGE_FOLOWED_STATUS,
  userID,
});
export const setUsers = (users, totalUsersCount) => ({
  type: SET_USERS,
  users,
  totalUsersCount,
});
export const changeSearchUserFormValue = (curentValue) => ({
  type: CHANGE_SEARCH_USER_FORM,
  curentValue,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const toogleFetchingStatus = (isFetching) => ({
  type: TOOGLE_FETCHING_STATUS,
  isFetching,
});

export default usersPageReducer;
