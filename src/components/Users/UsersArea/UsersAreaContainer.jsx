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

const UsersAreaContainer = ({
  pageSize,
  currentPage,
  isFetching,
  getUsers,
  setCurrentPage,
  ...props
}) => {
  useEffect(() => {
    getUsers(pageSize, currentPage);
  }, []);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsers(pageSize, pageNumber);
  };

  return (
    <div>
      {isFetching ? <Preloader /> : null}
      <UsersArea
        pageSize={pageSize}
        currentPage={currentPage}
        changePage={changePage}
        {...props}
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
