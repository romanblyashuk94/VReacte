import { Field, reduxForm } from "redux-form";
import s from "./SearchUserForm.module.scss";

const SearchUserForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.searchForm}>
      <Field
        component={"input"}
        name={"searchUserFormBody"}
        value={props.searchUserFormValue}
        type="text"
        placeholder="Search user"
        className={s.search}
      />
    </form>
  );
};

export default reduxForm({ form: "searchUserForm" })(SearchUserForm);
