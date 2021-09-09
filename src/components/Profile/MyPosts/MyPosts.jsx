import s from "./MyPosts.module.scss";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
  return (
    <div className={s.my_posts}>
      <NewPost />
      <Posts postsData={props.postsData} />
    </div>
  );
};

export default MyPosts;
