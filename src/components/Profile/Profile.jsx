import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";
import Profileinfo from "./Profileinfo/Profileinfo";
import Wallpapper from "./Wallpapper/Wallpapper";
import Preloader from '../common/Preloader/Preloader'

const Profile = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }
  return (
    <div className={s.profile}>
      <Wallpapper />
      <Profileinfo userProfile={props.userProfile} />
      <MyPosts />
    </div>
  );
};

export default Profile;
