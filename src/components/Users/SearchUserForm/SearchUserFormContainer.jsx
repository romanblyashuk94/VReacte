import { connect } from "react-redux";
import { changeSearchUserFormValue } from "../../../redux/usersPageReducer";
import SearchUserForm from "./SearchUserForm";

const mapStateToProps = (state) => {
  return {
    searchUserFormValue: state.usersPage.searchUserFormValue,
  };
};

export default connect(mapStateToProps, { changeSearchUserFormValue })(
  SearchUserForm
);
