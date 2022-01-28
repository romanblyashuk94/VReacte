import s from "./FriendItem.module.scss";
import { NavLink } from "react-router-dom";

const FriendItem = ({ friendID, friendAvatar, frientName }) => {
  return (
    <NavLink className={s.friendsItem} to={`/${friendID}`}>
      <li>
        <img className={s.avatar} src={friendAvatar} alt="ava" />
        <div className={s.firendName}>{frientName}</div>
      </li>
    </NavLink>
  );
};

export default FriendItem;
