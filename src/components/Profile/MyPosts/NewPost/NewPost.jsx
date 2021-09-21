import React from "react";
import {
  changePostAreaActionCreator,
  setPostActionCreator,
} from "../../../../redux/profilePageReducer";
import s from "./NewPost.module.scss";

const NewPost = (props) => {
  let addPost = () => {
    props.dispatch(setPostActionCreator());
  };

  let changePostArea = (e) => {
    props.dispatch(changePostAreaActionCreator(e.target.value));
  };

  return (
    <div className={s.new_posts}>
      <h2 className={s.new_posts__title}>My Posts</h2>
      <div>
        <textarea
          onChange={changePostArea}
          value={props.postAreaValue}
          className={s.new_post__area}
          placeholder="Your news..."
        />
        <button onClick={addPost} className={s.new_post_button}>
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
