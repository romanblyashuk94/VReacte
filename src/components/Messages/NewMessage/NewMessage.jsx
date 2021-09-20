import s from "./NewMessage.module.scss";
import React from "react";
import { changeMessageAreaActionCreator, setMessageActionCreator } from "../../../redux/store";

const NewMessage = (props) => {

  let messageArea = React.createRef();

  let sendMessage = () => {
    props.dispatch( setMessageActionCreator() );
  };

  let changeNewMessage = () => {
    props.dispatch( changeMessageAreaActionCreator(messageArea.current.value) );
  };

  return (
    <div className={s.newMessage}>
      <textarea
        ref={messageArea}
        onChange={changeNewMessage}
        value={props.newMessageValue}
        placeholder="Write message"
        className={s.messageArea}
        name="message"
      />
      <button onClick={sendMessage} className={s.sendButton}>
        Send
      </button>
    </div>
  );
};

export default NewMessage;
