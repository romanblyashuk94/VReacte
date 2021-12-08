import s from "./NewMessage.module.scss";
import React from "react";
import { Field, reduxForm } from "redux-form";

const NewMessageForm = (props) => {
  return (
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"newMessageBody"}
        value={props.newMessageValue}
        placeholder="Write message"
        className={s.messageArea}
      />
      <button className={s.sendButton}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "newMessageForm" })(NewMessageForm);
