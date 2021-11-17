import UserItem from "./UsersItem/UserItem";
import s from "./UsersArea.module.scss";
import { showPagesCount } from "../../../helpers/helpers";

const UsersArea = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <UserItem
          key={u.id}
          id={u.id}
          userPhoto={u.photos.small}
          userName={u.name}
          folowedStatus={u.followed}
          followUser={props.followUser}
          unfollowUser={props.unfollowUser}
          userStatus={u.status}
          toogleFollowingProgress={props.toogleFollowingProgress}
          followingIsProgres={props.followingIsProgres}
        />
      ))}
      <button className={s.showUsersButton}>Show More</button>
      <div className={s.pagesWraper}>
        {showPagesCount(pagesCount, props.currentPage).map((p) => {
          if (p === 0) {
            return (
              <span key={p} className={s.notSelectedPage}>
                ...
              </span>
            );
          }
          return (
            <span
              onClick={() => {
                props.changePage(p);
              }}
              key={p}
              className={
                props.currentPage === p ? s.selectedPage : s.notSelectedPage
              }
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default UsersArea;
