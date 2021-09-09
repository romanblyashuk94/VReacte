import s from "./FriendItem.module.scss";
import { NavLink } from "react-router-dom";

const FriendItem = (props) => {
  return (
    <NavLink className={s.friendsItem} to={`/id${props.id}`}>
      <li>
        <img
          className={s.avatar}
          src={props.avatar}
          alt="ava"
        />
        <div className={s.firendName}>{props.name}</div>
      </li>
    </NavLink>
  );
};

export default FriendItem