import { Field, reduxForm } from "redux-form";
import s from "./SearchDialogForm.module.scss";

const SearchDialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.searchForm}>
      <Field
        component={"input"}
        name={"searchDialogBody"}
        type="text"
        placeholder="Search dialog with..."
        className={s.search}
      />
    </form>
  );
};

export default reduxForm({ form: "searchDialog" })(SearchDialogForm);
