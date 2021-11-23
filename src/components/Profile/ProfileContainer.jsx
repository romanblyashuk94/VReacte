import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profilePageReducer";
import { Redirect, withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2;
    }

    this.props.getUserProfile(userID);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(ProfileContainer)
);
