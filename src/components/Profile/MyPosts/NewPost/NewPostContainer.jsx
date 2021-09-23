import React from "react";
import {
  changePostAreaActionCreator,
  setPostActionCreator,
} from "../../../../redux/profilePageReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(setPostActionCreator());
  };

  let changePostArea = (curentValue) => {
    props.store.dispatch(changePostAreaActionCreator(curentValue));
  };

  return (
    <NewPost
      postAreaValue={props.store.getState().postAreaValue}
      addPost={addPost}
      changePostArea={changePostArea}
    />
  );
};

export default NewPostContainer;
