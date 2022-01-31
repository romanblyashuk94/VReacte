import UserItem from "./UsersItem/UserItem";
import s from "./UsersArea.module.scss";
import Paginator from "../../common/Paginator/Paginator";

const UsersArea = ({
  totalUsersCount,
  pageSize,
  users,
  currentPage,
  changePage,
  ...props
}) => {
  return (
    <div className={s.users}>
      {users.map((u) => (
        <UserItem
          key={u.id}
          userID={u.id}
          userPhoto={u.photos.small}
          userName={u.name}
          folowedStatus={u.followed}
          userStatus={u.status}
          {...props}
        />
      ))}
      <button className={s.showUsersButton}>Show More</button>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        changePage={changePage}
      />
    </div>
  );
};
export default UsersArea;
