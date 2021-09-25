import React from "react";
import {
  changePostAreaActionCreator,
  setPostActionCreator,
} from "../../../../redux/profilePageReducer";
import StoreContext from "../../../../StoreContext";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(setPostActionCreator());
        };

        let changePostArea = (curentValue) => {
          store.dispatch(changePostAreaActionCreator(curentValue));
        };

        return (
          <NewPost
            postAreaValue={store.getState().postAreaValue}
            addPost={addPost}
            changePostArea={changePostArea}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewPostContainer;
