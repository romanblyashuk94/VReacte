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

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = this.props.authUserID;
    }

    this.props.getUserProfile(userID);
    this.props.getUserStatus(userID);
  }

  render() {
    return this.props.isFetching ? <Preloader /> : <Profile {...this.props} />;
  }
}

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
