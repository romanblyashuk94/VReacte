/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profilePageReducer";
import { withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";
import { useEffect } from "react";

const ProfileContainer = ({
  authUserID,
  isFetching,
  getUserProfile,
  getUserStatus,
  ...props
}) => {
  useEffect(() => {
    let userID = props.match.params.userID;
    if (!userID) {
      userID = authUserID;
    }
    getUserProfile(userID);
    getUserStatus(userID);
  }, [props.match.params.userID]);

  return isFetching ? (
    <Preloader />
  ) : (
    <Profile authUserID={authUserID} {...props} />
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  userStatus: state.profilePage.userStatus,
  authUserID: state.auth.id,
  isFetching: state.profilePage.isFetching,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
