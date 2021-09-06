import s from "./MessagesArea.module.scss";
import MessageItem from "./MessageItem/MessageItem";

const MessagesArea = () => {
  let messageItemData = [
    { id: 1, text: "Hi! Yo!", time: "3:00 pm", isMyMessage: true },
    { id: 1, text: "Hola", time: "3:03 pm", isMyMessage: false },
    { id: 1, text: "blablabla", time: "3:04 pm", isMyMessage: true },
  ];

  let messagesItemElements = messageItemData.map((m) => (
    <MessageItem text={m.text} time={m.time} isMyMessage={m.isMyMessage} />
  ));

  return <div className={s.messagesArea}>{messagesItemElements}</div>;
};

export default MessagesArea;
