import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  changeFolowedStatus,
  setCurrentPage,
  setUsers,
  toogleFetchingStatus,
} from "../../../redux/usersPageReducer";
import Preloader from "../../common/Preloader/Preloader";
import UsersArea from "./UsersArea";

class UsersAreaAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toogleFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toogleFetchingStatus(false);
      });
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toogleFetchingStatus(false);
      });
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersArea
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          changeFolowedStatus={this.props.changeFolowedStatus}
          changePage={this.changePage}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  changeFolowedStatus,
  setUsers,
  setCurrentPage,
  toogleFetchingStatus,
})(UsersAreaAPIComponent);
