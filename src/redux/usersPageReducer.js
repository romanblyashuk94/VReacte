import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../helpers/helpers";

const FOLLOW_USER = "usersPage/FOLLOW_USER";
const UNFOLLOW_USER = "usersPage/UNFOLLOW_USER";
const SET_USERS = "usersPage/SET_USERS";
const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE";
const TOOGLE_FETCHING_STATUS = "usersPage/TOOGLE_FETCHING_STATUS";
const TOOGLE_FOLLOWING_IS_PROGESS = "usersPage/TOOGLE_FOLLOWING_IS_PROGESS";

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
        usersData: updateObjectInArray(state.usersData, "id", action.userID, {
          followed: true,
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, "id", action.userID, {
          followed: false,
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

// ActionCreators:

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

// thunks:

export const getUsers = (pageSize, currentPage) => async (dispatch) => {
  dispatch(toogleFetchingStatus(true));
  const response = await usersAPI.getUsers(pageSize, currentPage);
  dispatch(setUsers(response.items, response.totalCount));
  dispatch(toogleFetchingStatus(false));
};

export const followUser = (userID) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userID,
    followAPI.followUser.bind(followAPI),
    followSuccess
  );
};

export const unfollowUser = (userID) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userID,
    followAPI.unfollowUser.bind(followAPI),
    unfollowSuccess
  );
};

// helper func:

const followUnfollowFlow = async (
  dispatch,
  userID,
  apiMethod,
  ActionCreator
) => {
  try {
    dispatch(toogleFollowingProgress(true, userID));
    const response = await apiMethod(userID);
    if (response.resultCode === 0) {
      dispatch(ActionCreator(userID));
      dispatch(toogleFollowingProgress(false, userID));
    }
  } catch (error) {
    console.log(error);
    dispatch(toogleFollowingProgress(false, userID));
  }
};
export default usersPageReducer;
