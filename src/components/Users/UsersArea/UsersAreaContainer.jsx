import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../../api/api";
import {
  followUser,
  setCurrentPage,
  setUsers,
  toogleFetchingStatus,
  toogleFollowingProgress,
  unfollowUser,
} from "../../../redux/usersPageReducer";
import Preloader from "../../common/Preloader/Preloader";
import UsersArea from "./UsersArea";

class UsersAreaContainer extends React.Component {
  componentDidMount() {
    this.props.toogleFetchingStatus(true);
    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.setUsers(data.items, data.totalCount);
        this.props.toogleFetchingStatus(false);
      });
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleFetchingStatus(true);
    usersAPI.getUsers(this.props.pageSize, pageNumber).then((data) => {
      this.props.setUsers(data.items, data.totalCount);
      this.props.toogleFetchingStatus(false);
    });
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersArea
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          followingIsProgres={this.props.followingIsProgres}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          changePage={this.changePage}
          toogleFollowingProgress={this.props.toogleFollowingProgress}
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
    followingIsProgres: state.usersPage.followingIsProgres,
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  toogleFetchingStatus,
  toogleFollowingProgress,
})(UsersAreaContainer);
