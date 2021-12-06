import LoginForm from "./LoginForm/LoginForm";
import s from "./LoginPage.module.scss";

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={s.loginPage}>
      <h1 className={s.title}>LOGIN</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
