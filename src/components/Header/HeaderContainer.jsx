import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
  };
};

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);
