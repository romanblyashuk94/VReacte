import React from "react";
import s from "./NewPost.module.scss";

const NewPost = (props) => {
  let postArea = React.createRef();

  let addPost = () => {
    props.addPost(postArea.current.value);
    postArea.current.value = '';
  };
  return (
    <div className={s.new_posts}>
      <h2 className={s.new_posts__title}>My Posts</h2>
      <div>
        <textarea
          ref={postArea}
          className={s.new_post__area}
          placeholder="Your news..."
          name="Post"
        ></textarea>
        <button onClick={addPost} className={s.new_post_button}>
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
