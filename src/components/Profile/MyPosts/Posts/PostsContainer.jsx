import { connect } from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    state: state.profilePage.postsData,
  }
}
const PostsContainer = connect(mapStateToProps)(Posts)

export default PostsContainer;
