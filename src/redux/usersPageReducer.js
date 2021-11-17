const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const CHANGE_SEARCH_USER_FORM = "CHANGE_SEARCH_USER_FORM";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOOGLE_FETCHING_STATUS = "TOOGLE_FETCHING_STATUS";
const TOOGLE_FOLLOWING_IS_PROGESS = "TOOGLE_FOLLOWING_IS_PROGESS";

const initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  searchUserFormValue: "",
  isFetching: true,
  followingIsProgres: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
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
    case TOOGLE_FOLLOWING_IS_PROGESS:
      return {
        ...state,
        followingIsProgres: action.isProgres
          ? [...state.followingIsProgres, action.userID]
          : state.followingIsProgres.filter((id) => id !== action.userID),
      };
    default:
      return state;
  }
};

export const followUser = (userID) => ({
  type: FOLLOW_USER,
  userID,
});

export const unfollowUser = (userID) => ({
  type: UNFOLLOW_USER,
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
export const toogleFollowingProgress = (isProgres, userID) => ({
  type: TOOGLE_FOLLOWING_IS_PROGESS,
  isProgres,
  userID,
});

export default usersPageReducer;
