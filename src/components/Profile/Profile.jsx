import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";
import Profileinfo from "./Profileinfo/Profileinfo";
import Wallpapper from "./Wallpapper/Wallpapper";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <Wallpapper />
      <Profileinfo />
      <MyPosts
        postsData={props.postsData}
        postAreaValue={props.postAreaValue}
        addPost={props.addPost}
        changePostArea={props.changePostArea}
      />
    </div>
  );
};

export default Profile;
