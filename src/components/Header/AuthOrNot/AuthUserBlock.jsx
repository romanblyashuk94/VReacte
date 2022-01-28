import { NavLink } from "react-router-dom";
import s from "./AuthUserBlock.module.scss";

const AuthUserBlock = ({ authUserID, authUserLogin, logoutUser }) => {
  return (
    <div className={s.AuthUserBlock}>
      <NavLink to={"/profile/" + authUserID}>{authUserLogin}</NavLink>
      <button onClick={logoutUser} className={s.signOutButton}>
        Sign Out
      </button>
    </div>
  );
};
export default AuthUserBlock;
