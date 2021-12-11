import s from "./NewMessageForm.module.scss";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../helpers/validators/validators";
import { FormElement } from "../../common/Preloader/FormControls/FormControls";

const maxLength300 = maxLength(300);
const TextArea = FormElement("textarea");

const NewMessageForm = (props) => {
  return (
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name={"newMessageBody"}
        validate={[required, maxLength300]}
        placeholder="Write message"
        className={s.messageArea}
      />
      <button className={s.sendButton}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "newMessageForm" })(NewMessageForm);
