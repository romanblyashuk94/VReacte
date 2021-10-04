import s from "./UserItem.module.scss";

const UserItem = (props) => {
  return (
    <div className={s.userItem}>
      <div className={s.subscribeArea}>
        <img className={s.userAva} src={props.userPhoto} alt="ava" />
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
          <div className={s.userName}>{props.userName}</div>
          <div className={s.userLocation}>{props.location.city}, {props.location.country}</div>
        </div>
        <div className={s.userStatus}>{props.userStatus}</div>
      </div>
    </div>
  );
};

export default UserItem;
