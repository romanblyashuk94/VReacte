import { connect } from "react-redux";
import { changeSearchDialogArea } from "../../../redux/messagesPageReducer";
import SearchDialogForm from "./SearchDialogForm";

const mapStateToProps = (state) => {
  return {
    searchDialogValue: state.messagesPage.searchDialogValue,
  };
};

const SearchDialogContainer = connect(mapStateToProps, {
  changeSearchDialogArea,
})(SearchDialogForm);

export default SearchDialogContainer;
