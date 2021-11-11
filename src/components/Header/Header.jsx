import s from "./Header.module.scss";
import logo from '../../assets/images/vr-logo.png'

const Header = () => {
  return (
    <header className={`${s.header} grid_element`}>
      <a href="S#">
        <img
          className={s.logo}
          src={logo}
          alt="logo"
        />
        <span>eacte</span>
      </a>
    </header>
  );
};

export default Header;
