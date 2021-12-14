import { connect } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import LoginForm from "./LoginForm/LoginForm";
import s from "./LoginPage.module.scss";

const LoginPage = (props) => {
  const loginUser = (formData) => {
    props.loginUser(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div className={s.loginPage}>
      <h1 className={s.title}>LOGIN</h1>
      <LoginForm onSubmit={loginUser} />
    </div>
  );
};

export default connect(null, { loginUser })(LoginPage);
