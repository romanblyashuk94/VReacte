import { reset, stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const SET_POST = "profilePage/SET-POST";
const DELETE_POST = "profilePage/DELETE_POST";
const SET_USER_PROFILE = "profilePage/SET_USER_PROFILE";
const SET_USER_STATUS = "profilePage/SET_USER_STATUS";
const TOOGLE_FETCHING_STATUS = "profilePage/TOOGLE_FETCHING_STATUS";
const SAVE_PHOTO_SUCCESS = "profilePage/SAVE_PHOTO_SUCCESS";

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
    case TOOGLE_FETCHING_STATUS:
      return { ...state, isFetching: action.isFetching };
    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.profilePhoto },
      };
    }
    case SET_USER_STATUS: {
      return { ...state, userStatus: action.userStatus };
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postID),
      };
    }
    default:
      return state;
  }
};

//ActionCreators:

export const toogleFetchingStatus = (isFetching) => ({
  type: TOOGLE_FETCHING_STATUS,
  isFetching,
});

export const addPost = (postText) => ({
  type: SET_POST,
  postText,
});

export const deletePost = (postID) => ({
  type: DELETE_POST,
  postID,
});

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const setUserStatus = (userStatus) => ({
  type: SET_USER_STATUS,
  userStatus,
});
export const savePhotoSuccess = (profilePhoto) => ({
  type: SAVE_PHOTO_SUCCESS,
  profilePhoto,
});

//thunks:

export const checkAddingPost = (postText) => (dispatch) => {
  if (postText) {
    dispatch(addPost(postText));
    dispatch(reset("newPostForm"));
  } else {
    dispatch(stopSubmit("newPostForm", { newPostBody: "Post is Empty!" }));
  }
};

export const getUserProfile = (userID) => async (dispatch) => {
  dispatch(toogleFetchingStatus(true));
  const profile = await profileAPI.getProfile(userID);
  dispatch(setUserProfile(profile));
  dispatch(toogleFetchingStatus(false));
};

export const savePhoto = (selectedPhoto) => async (dispatch) => {
  const profilePhoto = await profileAPI.savePhoto(selectedPhoto);
  dispatch(savePhotoSuccess(profilePhoto.data.photos));
};

export const getUserStatus = (userID) => async (dispatch) => {
  const userStatus = await profileAPI.getStatus(userID);
  dispatch(setUserStatus(userStatus));
};

export const updateUserStatus = (userStatus) => async (dispatch) => {
  const response = await profileAPI.updateStatus(userStatus);
  if (response.resultCode === 0) {
    dispatch(setUserStatus(userStatus));
  }
};

export const saveProfileData = (profileData, userID) => async (dispatch) => {
  const response = await profileAPI.updateProfileData(profileData);
  if (response.resultCode === 0) {
    dispatch(getUserProfile(userID));
  } else {
    dispatch(stopSubmit("profileDataForm", { _error: response.messages }));
    return Promise.reject();
  }
};

export default profilePageReducer;
