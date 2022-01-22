import { connect } from "react-redux";
import Post from "./Post/Post";
import s from "./Posts.module.scss";

const Posts = (props) => {

  let postElements = props.postsData.map((p) => (
    <Post
      key={p.id}
      id={p.id}
      ava={p.ava}
      message={p.message}
      date={p.date}
      likesCount={p.likesCount}
      selectedUserID={props.selectedUserID}
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
