import s from "./MessagesArea.module.scss";
import MessageItem from "./MessageItem/MessageItem";

const MessagesArea = (props) => {
  let messagesItemElements = props.messagesData.map((m) => (
    <MessageItem text={m.text} time={m.time} isMyMessage={m.isMyMessage} />
  ));

  return <div className={s.messagesArea}>{messagesItemElements}</div>;
};

export default MessagesArea;
