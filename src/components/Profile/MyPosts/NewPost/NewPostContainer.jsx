import { connect } from "react-redux";
import {
  changePostAreaActionCreator,
  setPostActionCreator,
} from "../../../../redux/profilePageReducer";
import NewPost from "./NewPost";

const mapStateToProps = (state) => {
  return {
    postAreaValue: state.profilePage.postAreaValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePostArea: (curentValue) => {
      dispatch(changePostAreaActionCreator(curentValue));
    },
    addPost: () => {
      dispatch(setPostActionCreator());
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
