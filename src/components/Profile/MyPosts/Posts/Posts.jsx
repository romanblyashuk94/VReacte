import { connect } from "react-redux";
import Post from "./Post/Post";
import s from "./Posts.module.scss";

const Posts = ({postsData, selectedUserID}) => {

  let postElements = postsData.map((p) => (
    <Post
      key={p.id}
      postID={p.id}
      ava={p.ava}
      message={p.message}
      date={p.date}
      likesCount={p.likesCount}
      selectedUserID={selectedUserID}
    />
  ));
  return <div className={s.posts}>{postElements}</div>;
};

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};
export default connect(mapStateToProps)(Posts);
