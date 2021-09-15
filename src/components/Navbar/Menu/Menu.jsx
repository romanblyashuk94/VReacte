import s from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className={s.menu}>
      <li>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/messages" activeClassName={s.active}>
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
