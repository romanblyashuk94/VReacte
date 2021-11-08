import s from "./UserItem.module.scss";
import UserPhoto from "../../../../assets/images/User.png";
import { NavLink } from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className={s.userItem}>
      <div className={s.subscribeArea}>
        <NavLink to={"/profile/" + props.id}>
          <img
            className={s.userAva}
            src={props.userPhoto ? props.userPhoto : UserPhoto}
            alt="ava"
          />
        </NavLink>
        {props.folowedStatus ? (
          <button
            className={s.unfollowButton}
            onClick={() => {
              props.changeFolowedStatus(props.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={s.followButton}
            onClick={() => {
              props.changeFolowedStatus(props.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.userInfo}>
        <div className={s.userInfoHead}>
          <NavLink to={"/profile/" + props.id}>
            <div className={s.userName}>{props.userName}</div>
          </NavLink>
          <div className={s.userLocation}>City, Country</div>
        </div>
        <div className={s.userStatus}>User status</div>
      </div>
    </div>
  );
};

export default UserItem;
