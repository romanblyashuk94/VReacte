import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  changeFolowedStatusAC,
  setCurrentPageAC,
  setUsersAC,
} from "../../../redux/usersPageReducer";
import Users from "./UsersArea";

class UsersAreaAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        changeFolowedStatus={this.props.changeFolowedStatus}
        changePage={this.changePage}
        currentPage={this.props.currentPage}
      />
    );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToPops
)(UsersAreaAPIComponent);
