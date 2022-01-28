import s from "./MyPosts.module.scss";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const MyPosts = ({selectedUserID}) => {
  return (
    <div className={s.my_posts}>
      <NewPost />
      <Posts selectedUserID={selectedUserID} />
    </div>
  );
};

export default MyPosts;
