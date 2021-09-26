import { connect } from "react-redux";
import { changeSearchDialogActionCreator } from "../../../redux/messagesPageReducer";
import SearchDialogForm from "./SearchDialogForm";

const mapStateToProps = (state) => {
  return {
    searchDialogValue: state.messagesPage.searchDialogValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchDialogArea: (curentValue) => {
      dispatch(changeSearchDialogActionCreator(curentValue))
    }
  }
}

const SearchDialogContainer = connect(mapStateToProps, mapDispatchToProps )(SearchDialogForm)

export default SearchDialogContainer;
