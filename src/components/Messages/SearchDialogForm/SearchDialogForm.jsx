import { changeSearchDialogActionCreator } from "../../../redux/messagesPageReducer";
import s from "./SearchDialogForm.module.scss";

const SearchDialogForm = (props) => {
  let changeSearchDialogArea = (e) => {
    props.dispatch(changeSearchDialogActionCreator(e.target.value));
  };
  return (
    <div className={s.searchForm}>
      <input
        onChange={changeSearchDialogArea}
        value={props.searchDialogValue}
        type="text"
        placeholder="Search dialog with..."
        className={s.search}
      />
    </div>
  );
};

export default SearchDialogForm;
