export const selectUsers = (state) => state.usersPage.usersData;

export const selectTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const selectPageSize = (state) => state.usersPage.pageSize;

export const selectCurrentPage = (state) => state.usersPage.currentPage;

export const selectIsFetching = (state) => state.usersPage.isFetching;

export const selectFollowingIsProgres = (state) => state.usersPage.followingIsProgres;