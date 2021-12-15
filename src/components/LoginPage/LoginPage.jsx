import { connect } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import { Redirect } from "react-router";
import LoginForm from "./LoginForm/LoginForm";
import s from "./LoginPage.module.scss";

const LoginPage = (props) => {
  const loginUser = (formData) => {
    props.loginUser(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) return <Redirect to={"/profile/" + props.authUserID} />;
  return (
    <div className={s.loginPage}>
      <h1 className={s.title}>LOGIN</h1>
      <LoginForm onSubmit={loginUser} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    authUserID: state.auth.id,
  };
};
export default connect(mapStateToProps, { loginUser })(LoginPage);
