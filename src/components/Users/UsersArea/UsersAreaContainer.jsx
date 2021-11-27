import React from "react";
import { connect } from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {
  followUser,
  getUsers,
  setCurrentPage,
  unfollowUser,
} from "../../../redux/usersPageReducer";
import Preloader from "../../common/Preloader/Preloader";
import UsersArea from "./UsersArea";

class UsersAreaContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(this.props.pageSize, pageNumber);
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
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingIsProgres: state.usersPage.followingIsProgres,
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setCurrentPage,
  getUsers,
})(withAuthRedirect(UsersAreaContainer));
