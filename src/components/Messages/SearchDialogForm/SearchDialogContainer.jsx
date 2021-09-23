import { changeSearchDialogActionCreator } from "../../../redux/messagesPageReducer";
import SearchDialogForm from "./SearchDialogForm";

const SearchDialogContainer = (props) => {
  let changeSearchDialogArea = (curentValue) => {
    props.store.dispatch(changeSearchDialogActionCreator(curentValue));
  };

  return (
    <SearchDialogForm
      searchDialogValue={props.store.getState().messagesPage.searchDialogValue}
      changeSearchDialogArea={changeSearchDialogArea}
    />
  );
};

export default SearchDialogContainer;
