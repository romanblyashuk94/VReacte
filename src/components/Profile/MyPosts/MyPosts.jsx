import s from "./MyPosts.module.scss";
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";

const MyPosts = (props) => {
  return (
    <div className={s.my_posts}>
      <NewPostContainer />
      <PostsContainer />
    </div>
  );
};

export default MyPosts;
