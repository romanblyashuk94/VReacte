import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router";
import withAuthRedirectComponent from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2;
    }

    this.props.getUserProfile(userID);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(withAuthRedirectComponent(ProfileContainer))
);
