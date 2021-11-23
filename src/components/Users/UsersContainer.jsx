import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import Users from "./Users";

class UsersContainer extends React.Component {
  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    return <Users />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, {})(UsersContainer);
