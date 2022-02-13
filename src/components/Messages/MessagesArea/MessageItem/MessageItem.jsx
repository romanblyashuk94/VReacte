import s from "./MessageItem.module.scss";
import cn from "classnames";
const MessageItem = ({ messageText, sendTime, isMyMessage }) => {
  return (
    <div className={cn({ [s.myMessage]: isMyMessage }, s.MessageItem)}>
      <div className={s.space}></div>
      <div className={s.message}>
        <div className={s.messageText}>{messageText}</div>
        <div className={s.messageTime}>{sendTime}</div>
      </div>
    </div>
  );
};

export default MessageItem;
