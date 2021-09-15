import Post from "./Post/Post";
import s from "./Posts.module.scss";

const Posts = (props) => {
  let postElements = props.postsData.map((p) => (
    <Post
      ava={p.ava}
      message={p.message}
      date={p.date}
      likesCount={p.likesCount}
    />
  ));
  return <div className={s.posts}>{postElements}</div>;
};

export default Posts;
