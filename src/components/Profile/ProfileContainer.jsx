/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
} from "../../redux/profilePageReducer";
import { withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useEffect } from "react";

const ProfileContainer = ({
  authUserID,
  getUserProfile,
  getUserStatus,
  ...props
}) => {

  let userID = props.match.params.userID;
  if (!userID) {
    userID = authUserID;
  }
  useEffect(() => {
    getUserProfile(userID);
    getUserStatus(userID);
  }, [props.match.params.userID]);

  return <Profile authUserID={authUserID} selectedUserID = {userID} {...props} />;
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  userStatus: state.profilePage.userStatus,
  authUserID: state.auth.id,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
