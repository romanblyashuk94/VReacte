import s from "./NewMessage.module.scss";
import React from "react";

const NewMessage = () => {
  let messageArea = React.createRef();
  let sendMessage = () => {
    alert(messageArea.current.value);
  };
  return (
    <div className={s.newMessage}>
      <form action="#">
        <textarea
          ref={messageArea}
          placeholder="Write message"
          className={s.messageArea}
          name="message"
        ></textarea>
        <button onClick={sendMessage} className={s.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default NewMessage;
