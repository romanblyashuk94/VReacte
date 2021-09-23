import s from "./FriendsOnline.module.scss";
import FriendItem from "./FriendItem/FriendItem";

const FriendsOnline = (props) => {
  return (
    <div className={s.friendsOnline}>
      <div className={s.title}>Friends Online:</div>
      <ul className={s.friendsList}>
        {props.state.map((f) => (
          <FriendItem id={f.id} avatar={f.avatar} name={f.name} />
        ))}
      </ul>
    </div>
  );
};

export default FriendsOnline;
