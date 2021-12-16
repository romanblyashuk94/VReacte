import React from "react";
import s from "./NewPost.module.scss";
import NewPostForm from "./NewPostForm";
import { connect } from "react-redux";
import { checkAddingPost } from "../../../../redux/profilePageReducer";

const NewPost = (props) => {
  const onSubmit = (formData) => {
    props.checkAddingPost(formData.newPostBody);
  };
  return (
    <div className={s.new_posts}>
      <h2 className={s.new_posts__title}>My Posts</h2>
      <NewPostForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { checkAddingPost })(NewPost);
