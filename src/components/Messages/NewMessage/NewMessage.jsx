import s from "./NewMessage.module.scss";
import React from "react";
import {
  changeMessageAreaActionCreator,
  setMessageActionCreator,
} from "../../../redux/messagesPageReducer";

const NewMessage = (props) => {
  let sendMessage = () => {
    props.dispatch(setMessageActionCreator());
  };

  let changeNewMessage = (e) => {
    props.dispatch(changeMessageAreaActionCreator(e.target.value));
  };

  return (
    <div className={s.newMessage}>
      <textarea
        onChange={changeNewMessage}
        value={props.newMessageValue}
        placeholder="Write message"
        className={s.messageArea}
      />
      <button onClick={sendMessage} className={s.sendButton}>
        Send
      </button>
    </div>
  );
};

export default NewMessage;
