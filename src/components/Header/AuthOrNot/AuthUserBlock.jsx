import { NavLink } from "react-router-dom";
import s from "./AuthUserBlock.module.scss";

const AuthUserBlock = (props) => {
  return (
    <div className={s.AuthUserBlock}>
      <NavLink to={"/profile/" + props.id}>{props.login}</NavLink>
      <button className={s.signOutButton}>Sign Out</button>
    </div>
  );
};

export default AuthUserBlock;
