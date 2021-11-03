import { connect } from "react-redux";
import {
  changeFolowedStatusAC,
  setCurrentPageAC,
  setUsersAC,
} from "../../../redux/usersPageReducer";
import UsersArea from "./UsersAreaC";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToPops = (dispatch) => {
  return {
    changeFolowedStatus: (userID) => {
      dispatch(changeFolowedStatusAC(userID));
    },
    setUsers: (users, totalUsersCount) => {
      dispatch(setUsersAC(users, totalUsersCount));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPops)(UsersArea);
