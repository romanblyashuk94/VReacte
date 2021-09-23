import FriendsOnline from "./FriendsOnline/FriendsOnline";
import Menu from "./Menu/Menu";
import s from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <nav className={`${s.navbar} grid_element`}>
      <Menu />
      <FriendsOnline state={props.store.getState().friendsOnlineData} />
    </nav>
  );
};

export default Navbar;
