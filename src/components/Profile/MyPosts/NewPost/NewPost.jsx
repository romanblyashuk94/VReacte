import React from "react";
import s from "./NewPost.module.scss";

const NewPost = (props) => {
  let addPost = () => {
    props.addPost();
  };

  let changePostArea = (e) => {
    props.changePostArea(e.target.value);
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
