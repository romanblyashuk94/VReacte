import s from "./Header.module.scss";
import logo from "../../assets/images/vr-logo.png";
import NotAuthUserBlock from "./AuthOrNot/NotAuthUserBlock";
import AuthUserBlock from "./AuthOrNot/AuthUserBlock";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, id, login, logoutUser }) => {
  return (
    <header className={`${s.header} grid_element`}>
      <NavLink to="/profile">
        <img className={s.logo} src={logo} alt="logo" />
        <span>eacte</span>
      </NavLink>
      <div className={s.loginBlock}>
        {isAuth ? (
          <AuthUserBlock
            authUserID={id}
            authUserLogin={login}
            logoutUser={logoutUser}
          />
        ) : (
          <NotAuthUserBlock />
        )}
      </div>
    </header>
  );
};

export default Header;
