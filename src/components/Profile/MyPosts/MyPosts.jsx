import s from "./MyPosts.module.scss";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
  return (
    <div className={s.my_posts}>
      <NewPost
        dispatch={props.dispatch}
        postAreaValue={props.state.postAreaValue}
      />
      <Posts postsData={props.state.postsData} />
    </div>
  );
};

export default MyPosts;
