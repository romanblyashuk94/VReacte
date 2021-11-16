import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { setUsersAuthData } from "../../redux/authReducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuthData().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        this.props.setUsersAuthData(id, login, email);
      }
    });
  }
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
export default connect(mapStateToProps, { setUsersAuthData })(HeaderContainer);
