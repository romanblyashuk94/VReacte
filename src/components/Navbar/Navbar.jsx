import FriendsOnline from "./FriendsOnline/FriendsOnline";
import Menu from "./Menu/Menu";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${s.navbar} grid_element`}>
      <Menu />
      <FriendsOnline />
    </nav>
  );
};

export default Navbar;
