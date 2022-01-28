import s from "./NewMessageForm.module.scss";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength } from "../../../helpers/validators/validators";
import { FormElement } from "../../common/FormControls/FormControls";

const maxLength300 = maxLength(300);
const TextArea = FormElement("textarea");

const NewMessageForm = ({ handleSubmit }) => {
  return (
    <form className={s.newMessage} onSubmit={handleSubmit}>
      <Field
        component={TextArea}
        name={"newMessageBody"}
        validate={[maxLength300]}
        placeholder="Write message"
        className={s.messageArea}
      />
      <button className={s.sendButton}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "newMessageForm" })(NewMessageForm);
