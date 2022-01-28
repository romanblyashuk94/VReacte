import { Field, reduxForm } from "redux-form";
import s from "./SearchDialogForm.module.scss";

const SearchDialogForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
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
