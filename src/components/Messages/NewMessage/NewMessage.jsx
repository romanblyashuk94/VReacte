import s from "./NewMessage.module.scss";
import React from "react";

const NewMessage = (props) => {
  let messageArea = React.createRef();
  let sendMessage = () => {
    props.sendMessage(messageArea.current.value);
    messageArea.current.value = ''
  };
  return (
    <div className={s.newMessage}>
        <textarea
          ref={messageArea}
          placeholder="Write message"
          className={s.messageArea}
          name="message"
        ></textarea>
        <button onClick={sendMessage} className={s.sendButton}>
          Send
        </button>
    </div>
  );
};

export default NewMessage;
