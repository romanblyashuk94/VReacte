import s from "./Header.module.scss";
import logo from "../../assets/images/vr-logo.png";
import NotAuthUserBlock from "./AuthOrNot/NotAuthUserBlock";
import AuthUserBlock from "./AuthOrNot/AuthUserBlock";

const Header = (props) => {
  debugger;
  return (
    <header className={`${s.header} grid_element`}>
      <a href="S#">
        <img className={s.logo} src={logo} alt="logo" />
        <span>eacte</span>
      </a>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <AuthUserBlock id={props.id} login={props.login} />
        ) : (
          <NotAuthUserBlock />
        )}
      </div>
    </header>
  );
};

export default Header;
