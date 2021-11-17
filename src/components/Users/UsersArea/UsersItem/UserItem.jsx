import s from "./UserItem.module.scss";
import UserPhoto from "../../../../assets/images/User.png";
import { NavLink } from "react-router-dom";

import { followAPI } from "../../../../api/api";

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
            disabled={props.followingIsProgres.some((id) => id === props.id)}
            className={s.unfollowButton}
            onClick={() => {
              props.toogleFollowingProgress(true, props.id);
              followAPI.unfollowUser(props.id).then((response) => {
                if (response.resultCode === 0) {
                  props.unfollowUser(props.id);
                }
                props.toogleFollowingProgress(false, props.id);
              });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingIsProgres.some((id) => id === props.id)}
            className={s.followButton}
            onClick={() => {
              props.toogleFollowingProgress(true, props.id);
              followAPI.followUser(props.id).then((response) => {
                if (response.resultCode === 0) {
                  props.followUser(props.id);
                  props.toogleFollowingProgress(false, props.id);
                }
              });
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
        <div className={s.userStatus}>{props.userStatus || "No Status :("}</div>
      </div>
    </div>
  );
};

export default UserItem;
