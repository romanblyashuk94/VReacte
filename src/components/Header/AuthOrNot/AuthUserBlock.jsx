import { NavLink } from "react-router-dom";
import s from "./AuthUserBlock.module.scss";

const AuthUserBlock = (props) => {
  debugger
  return (
    <div className={s.AuthUserBlock}>
      <NavLink to={"/profile/" + props.id}>{props.login}</NavLink>
      <button onClick={props.logout} className={s.signOutButton}>Sign Out</button>
    </div>
  );
};

export default AuthUserBlock;
