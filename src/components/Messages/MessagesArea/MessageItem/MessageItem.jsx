import s from "./MessageItem.module.scss";

const MessageItem = ({messageText, sendTime, isMyMessage}) => {
  return (
    <div
      className={`${s.MessageItem} ${(isMyMessage || "") && s.myMessage}`}
    >
      <div className={s.space}></div>
      <div className={s.message}>
        <div className={s.messageText}>{messageText}</div>
        <div className={s.messageTime}>{sendTime}</div>
      </div>
    </div>
  );
};

export default MessageItem;
