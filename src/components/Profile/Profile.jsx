import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";
import Profileinfo from "./Profileinfo/Profileinfo";
import Wallpapper from "./Wallpapper/Wallpapper";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({ userProfile, ...props }) => {
  if (!userProfile) {
    return <Preloader />;
  }

  return (
    <div className={s.profile}>
      <Wallpapper />
      <Profileinfo
        userProfile={userProfile}
        selectedUserID={props.match.params.userID}
        {...props}
      />
      <MyPosts selectedUserID={props.match.params.userID} />
    </div>
  );
};

export default Profile;
