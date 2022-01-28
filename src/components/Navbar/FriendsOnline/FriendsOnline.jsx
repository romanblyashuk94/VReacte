import s from "./FriendsOnline.module.scss";
import FriendItem from "./FriendItem/FriendItem";
import { connect } from "react-redux";

const FriendsOnline = ({ onlineFriendsData }) => {
  return (
    <div className={s.friendsOnline}>
      <div className={s.title}>Friends Online:</div>
      <ul className={s.friendsList}>
        {onlineFriendsData.map((f) => (
          <FriendItem
            key={f.id}
            friendID={f.id}
            friendAvatar={f.avatar}
            frientName={f.name}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    onlineFriendsData: state.friendsOnlineData,
  };
};
export default connect(mapStateToProps)(FriendsOnline);
