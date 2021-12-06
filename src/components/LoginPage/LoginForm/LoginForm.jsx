import { Field, reduxForm } from "redux-form";
import s from "../LoginPage.module.scss";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.inputWraper}>
        <Field
          type="text"
          placeholder="login"
          component={"input"}
          name={"login"}
        />
      </div>
      <div className={s.inputWraper}>
        <Field
          type="password"
          placeholder="password"
          component={"input"}
          name={"password"}
        />
      </div>
      <div className={s.inputWraper}>
        <label htmlFor="remember">
          <Field
            id="remember"
            type="checkbox"
            component={"input"}
            name={"rememberMe"}
          />{" "}
          remember me
        </label>
      </div>
      <div className={s.inputWraper}>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
