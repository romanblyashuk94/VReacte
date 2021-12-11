import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../helpers/validators/validators";
import { FormElement } from "../../../common/Preloader/FormControls/FormControls";
import s from "./NewPost.module.scss";

const maxLength300 = maxLength(300);
const TextArea = FormElement("textarea");

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name={"newPostBody"}
        validate={[required, maxLength300]}
        className={s.new_post__area}
        placeholder="Your news..."
      />
      <button className={s.new_post_button}>Post</button>
    </form>
  );
};

export default reduxForm({ form: "newPostForm" })(NewPostForm);
