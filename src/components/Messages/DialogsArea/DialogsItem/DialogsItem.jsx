import { NavLink } from "react-router-dom";
import s from './DialogsItem.module.scss';

const DialogsItem = (props) => {
    let path = "/messages/" + props.id;
  
    return (
      <NavLink to={path} activeClassName={s.active}>
        <div className={s.dialogs__item}>
          <div className={s.userInfo}>
            <img className={s.userAva} src={props.avatar} alt="UserAva" />
            <p className={s.userName}>{props.userName}</p>
          </div>
          <div className={s.onlineInfo}>{props.status}</div>
        </div>
      </NavLink>
    );
  };

  export default DialogsItem