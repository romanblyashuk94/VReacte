import { connect } from "react-redux";
import { changeSearchUserFormValueAC } from "../../../redux/usersPageReducer";
import SearchUserForm from "./SearchUserForm";

const mapStateToProps = (state) => {
  return {
    searchUserFormValue: state.usersPage.searchUserFormValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchUserFormValue: (curentValue) => {
      dispatch(changeSearchUserFormValueAC(curentValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserForm);
