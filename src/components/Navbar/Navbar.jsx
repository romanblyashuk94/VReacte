import FriendsOnlineContainer from "./FriendsOnline/FriendsOnlineContainer";
import Menu from "./Menu/Menu";
import s from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <nav className={`${s.navbar} grid_element`}>
      <Menu />
      <FriendsOnlineContainer />
    </nav>
  );
};

export default Navbar;
