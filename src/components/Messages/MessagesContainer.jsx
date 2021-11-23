import { connect } from "react-redux";
import Messages from "./Messages";
import React from "react";
import { Redirect } from "react-router";

class MessagesContainer extends React.Component {
  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    return <Messages />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, {})(MessagesContainer);
