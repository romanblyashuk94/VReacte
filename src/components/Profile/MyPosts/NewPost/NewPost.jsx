import React from "react";
import s from "./NewPost.module.scss";

const NewPost = (props) => {
  let postArea = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "SET-POST" });
  };

  let changePostArea = () => {
    props.dispatch({
      type: "CHANGE-POST-AREA",
      curent: postArea.current.value,
    });
  };

  return (
    <div className={s.new_posts}>
      <h2 className={s.new_posts__title}>My Posts</h2>
      <div>
        <textarea
          ref={postArea}
          onChange={changePostArea}
          value={props.postAreaValue}
          className={s.new_post__area}
          placeholder="Your news..."
          name="Post"
        />
        <button onClick={addPost} className={s.new_post_button}>
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
