import Header from "./Header";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersAuthData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
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
