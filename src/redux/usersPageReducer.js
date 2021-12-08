import { followAPI, usersAPI } from "../api/api";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOOGLE_FETCHING_STATUS = "TOOGLE_FETCHING_STATUS";
const TOOGLE_FOLLOWING_IS_PROGESS = "TOOGLE_FOLLOWING_IS_PROGESS";

const initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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

export const followSuccess = (userID) => ({
  type: FOLLOW_USER,
  userID,
});

export const unfollowSuccess = (userID) => ({
  type: UNFOLLOW_USER,
  userID,
});
export const setUsers = (users, totalUsersCount) => ({
  type: SET_USERS,
  users,
  totalUsersCount,
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

export const getUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(toogleFetchingStatus(true));
    usersAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(setUsers(data.items, data.totalCount));
      dispatch(toogleFetchingStatus(false));
    });
  };
};

export const followUser = (userID) => {
  return (dispatch) => {
    dispatch(toogleFollowingProgress(true, userID));
    followAPI.followUser(userID).then((response) => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userID));
        dispatch(toogleFollowingProgress(false, userID));
      }
    });
  };
};

export const unfollowUser = (userID) => {
  return (dispatch) => {
    dispatch(toogleFollowingProgress(true, userID));
    followAPI.unfollowUser(userID).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userID));
        dispatch(toogleFollowingProgress(false, userID));
      }
    });
  };
};

export default usersPageReducer;
