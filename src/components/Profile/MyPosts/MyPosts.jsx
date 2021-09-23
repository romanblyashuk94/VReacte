import s from "./MyPosts.module.scss";
import NewPostContainer from "./NewPost/NewPostContainer";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
  return (
    <div className={s.my_posts}>
      <NewPostContainer store={props.store}
      />
      <Posts state={props.store.getState().profilePage.postsData} />
    </div>
  );
};

export default MyPosts;
