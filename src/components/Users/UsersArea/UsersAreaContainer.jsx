import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { selectCurrentPage, selectFollowingIsProgres, selectIsFetching, selectPageSize, selectTotalUsersCount, getUsersSelector } from "../../../redux/selectors/UsersSelectors";
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
    console.log('Rerender Users')
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
  console.log('mSTP Users')
  return {
    users: getUsersSelector(state),
    totalUsersCount: selectTotalUsersCount(state),
    pageSize: selectPageSize(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    followingIsProgres: selectFollowingIsProgres(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    getUsers,
  }),
  withAuthRedirect
)(UsersAreaContainer);
