import s from "./UserItem.module.scss";
import UserPhoto from "../../../../assets/images/User.png";
import { NavLink } from "react-router-dom";

const UserItem = ({
  userID,
  userPhoto,
  folowedStatus,
  followingIsProgres,
  unfollowUser,
  followUser,
  userName,
  userStatus,
}) => {
  return (
    <div className={s.userItem}>
      <div className={s.subscribeArea}>
        <NavLink to={"/profile/" + userID}>
          <img className={s.userAva} src={userPhoto || UserPhoto} alt="ava" />
        </NavLink>
        {folowedStatus ? (
          <button
            disabled={followingIsProgres.some((id) => id === userID)}
            className={s.unfollowButton}
            onClick={() => {
              unfollowUser(userID);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingIsProgres.some((id) => id === userID)}
            className={s.followButton}
            onClick={() => {
              followUser(userID);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.userInfo}>
        <div className={s.userInfoHead}>
          <NavLink to={"/profile/" + userID}>
            <div className={s.userName}>{userName}</div>
          </NavLink>
          <div className={s.userLocation}>City, Country</div>
        </div>
        <div className={s.userStatus}>{userStatus || "No Status :("}</div>
      </div>
    </div>
  );
};

export default UserItem;
