import s from "./NotAuthUserBlock.module.scss";
import { NavLink } from "react-router-dom";

const NotAuthUserBlock = (props) => {
  return (
    <div className={s.notAuthUserBlock}>
      <NavLink to={"/login/"}>Sign In</NavLink>
      <NavLink to={"/reg/"}>Sign Up</NavLink>
    </div>
  );
};

export default NotAuthUserBlock;
