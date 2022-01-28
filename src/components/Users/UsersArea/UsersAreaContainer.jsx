/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {
  selectCurrentPage,
  selectFollowingIsProgres,
  selectIsFetching,
  selectPageSize,
  selectTotalUsersCount,
  getUsersSelector,
} from "../../../redux/selectors/UsersSelectors";
import {
  followUser,
  getUsers,
  setCurrentPage,
  unfollowUser,
} from "../../../redux/usersPageReducer";
import Preloader from "../../common/Preloader/Preloader";
import UsersArea from "./UsersArea";

const UsersAreaContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.pageSize, props.currentPage);
  }, []);

  const changePage = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.getUsers(props.pageSize, pageNumber);
  };

  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <UsersArea
        users={props.users}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        followingIsProgres={props.followingIsProgres}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
        changePage={changePage}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
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
