import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const SET_POST = "SET-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  postsData: [
    {
      id: 3,
      ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
      message: "Hey,yo!",
      date: "8/29/2021 8:36 PM",
      likesCount: 10,
    },
    {
      id: 2,
      ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
      message: "I am learning ReactJs",
      date: "8/28/2021 6:24 PM",
      likesCount: 8,
    },
    {
      id: 1,
      ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
      message: "Bla-bla-Bla",
      date: "8/28/2021 6:24 PM",
      likesCount: 2,
    },
  ],
  userProfile: null,
  userStatus: "",
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST: {
      let newPost = {
        id: state.postsData.length + 1,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message: action.postText,
        date: "8/29/2021 8:36 PM",
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile };
    }
    case SET_USER_STATUS: {
      return { ...state, userStatus: action.userStatus };
    }
    default:
      return state;
  }
};

export const addPost = (postText) => ({
  type: SET_POST,
  postText: postText,
});

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const setUserStatus = (userStatus) => ({
  type: SET_USER_STATUS,
  userStatus,
});

export const checkAddingPost = (postText) => (dispatch) => {
  if (postText) {
    dispatch(addPost(postText));
  } else {
    dispatch(stopSubmit("newPostForm", { newPostBody: "Post is Empty!" }));
  }
};
export const getUserProfile = (userID) => {
  return (dispatch) => {
    profileAPI.getProfile(userID).then((profile) => {
      dispatch(setUserProfile(profile));
    });
  };
};

export const getUserStatus = (userID) => {
  return (dispatch) => {
    profileAPI.getStatus(userID).then((userStatus) => {
      dispatch(setUserStatus(userStatus));
    });
  };
};
export const updateUserStatus = (userStatus) => {
  return (dispatch) => {
    profileAPI.updateStatus(userStatus).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUserStatus(userStatus));
      }
    });
  };
};

export default profilePageReducer;
