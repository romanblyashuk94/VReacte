import React from "react";
import s from "./NewPost.module.scss";
import NewPostForm from "./NewPostForm";
import { connect } from "react-redux";
import { addPost } from "../../../../redux/profilePageReducer";

const NewPost = (props) => {
  return (
    <div className={s.new_posts}>
      <h2 className={s.new_posts__title}>My Posts</h2>
      <NewPostForm onSubmit={props.addPost} />
    </div>
  );
};

export default connect(null, { addPost })(NewPost);
