import s from "./MessageItem.module.scss";

const MessageItem = (props) => {
  return (
    <div className={`${s.MessageItem} ${(props.isMyMessage || '') && s.myMessage}`}>
      <div className={s.space}></div>
      <div className={s.message}>
        <div className={s.messageText}>{props.text}</div>
        <div className={s.messageTime}>{props.time}</div>
      </div>
    </div>
  );
};

export default MessageItem;
