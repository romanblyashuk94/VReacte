import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../helpers/validators/validators";
import { FormElement } from "../../common/Preloader/FormControls/FormControls";
import s from "../LoginPage.module.scss";

const maxLength200 = maxLength(200);
const Input = FormElement("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.inputWraper}>
        <Field
          type="text"
          placeholder="login"
          component={Input}
          validate={[required, maxLength200]}
          name={"email"}
        />
      </div>
      <div className={s.inputWraper}>
        <Field
          type="password"
          placeholder="password"
          component={Input}
          validate={[required, maxLength200]}
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
