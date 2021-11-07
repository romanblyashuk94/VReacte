import { connect } from "react-redux";
import { changePostArea, addPost } from "../../../../redux/profilePageReducer";
import NewPost from "./NewPost";

const mapStateToProps = (state) => {
  return {
    postAreaValue: state.profilePage.postAreaValue,
  };
};

export default connect(mapStateToProps, { changePostArea, addPost })(NewPost);