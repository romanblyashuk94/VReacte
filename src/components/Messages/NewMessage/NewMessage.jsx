import s from "./NewMessage.module.scss";
import React from "react";

const NewMessage = (props) => {
  debugger;
  let sendMessage = () => {
    props.sendMessage();
  };

  let changeNewMessage = (e) => {
    props.changeNewMessage(e.target.value);
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
