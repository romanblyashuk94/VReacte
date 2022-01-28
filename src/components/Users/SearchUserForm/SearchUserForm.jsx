import { Field, reduxForm } from "redux-form";
import s from "./SearchUserForm.module.scss";

const SearchUserForm = ({handleSubmit, ...props}) => {
  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <Field
        component={"input"}
        name={"searchUserFormBody"}
        type="text"
        placeholder="Search user"
        className={s.search}
      />
    </form>
  );
};

export default reduxForm({ form: "searchUserForm" })(SearchUserForm);
