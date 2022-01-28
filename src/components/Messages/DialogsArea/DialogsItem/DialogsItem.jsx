import { NavLink } from "react-router-dom";
import s from "./DialogsItem.module.scss";

const DialogsItem = ({userName, onlineStatus, userAvatar, userID}) => {
  let path = "/messages/" + userID;

  return (
    <NavLink to={path} activeClassName={s.active}>
      <div className={s.dialogs__item}>
        <div className={s.userInfo}>
          <img className={s.userAva} src={userAvatar} alt="UserAva" />
          <p className={s.userName}>{userName}</p>
        </div>
        <div className={s.onlineInfo}>{onlineStatus}</div>
      </div>
    </NavLink>
  );
};

export default DialogsItem;
