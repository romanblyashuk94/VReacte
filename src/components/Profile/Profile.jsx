import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";
import Profileinfo from "./Profileinfo/Profileinfo";
import Wallpapper from "./Wallpapper/Wallpapper";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }
  console.log('Profile')
  return (
    <div className={s.profile}>
      <Wallpapper />
      <Profileinfo
        userProfile={props.userProfile}
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
        authUserID={props.authUserID}
        selectedUserID={props.match.params.userID}
      />
      <MyPosts />
    </div>
  );
};

export default Profile;
