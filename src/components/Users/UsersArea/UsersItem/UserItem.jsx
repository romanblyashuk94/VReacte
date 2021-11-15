import s from "./UserItem.module.scss";
import UserPhoto from "../../../../assets/images/User.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "15e0ed99-25e5-4249-9204-5298127b8b98",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.unfollowUser(props.id);
                  }
                });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={s.followButton}
            onClick={() => {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "15e0ed99-25e5-4249-9204-5298127b8b98",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.followUser(props.id);
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
