import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";
import Profileinfo from "./Profileinfo/Profileinfo";
import Wallpapper from "./Wallpapper/Wallpapper";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <Wallpapper />
      <Profileinfo />
      <MyPosts state={props.state} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
