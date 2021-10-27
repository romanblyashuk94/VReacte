import { connect } from "react-redux";
import {
  changeFolowedStatusAC,
  setUsersAC,
} from "../../../redux/usersPageReducer";
import UsersArea from "./UsersArea";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
  };
};

const mapDispatchToPops = (dispatch) => {
  return {
    changeFolowedStatus: (userID) => {
      dispatch(changeFolowedStatusAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPops)(UsersArea);
