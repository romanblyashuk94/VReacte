import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./NewPost.module.scss";

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"newPostBody"}
        className={s.new_post__area}
        placeholder="Your news..."
      />
      <button className={s.new_post_button}>Post</button>
    </form>
  );
};

export default reduxForm({ form: "newPostForm" })(NewPostForm);
