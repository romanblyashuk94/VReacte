import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
