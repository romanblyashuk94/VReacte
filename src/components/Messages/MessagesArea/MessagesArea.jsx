import s from "./MessagesArea.module.scss";
import MessageItem from "./MessageItem/MessageItem";

const MessagesArea = (props) => {
  let messagesItemElements = props.state.map((m) => (
    <MessageItem key={m.id} text={m.text} time={m.time} isMyMessage={m.isMyMessage} />
  ));

  return <div className={s.messagesArea}>{messagesItemElements}</div>;
};

export default MessagesArea;
