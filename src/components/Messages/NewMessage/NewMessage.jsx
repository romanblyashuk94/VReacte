import s from "./NewMessage.module.scss";
import React from "react";

const NewMessage = (props) => {
  let messageArea = React.createRef();

  let sendMessage = () => {
    props.dispatch({ type: "SET-MESSAGE" });
  };

  let changeNewMessage = () => {
    props.dispatch({
      type: "CHANGE-MESSAGE-AREA",
      curent: messageArea.current.value,
    });
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
