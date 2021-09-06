import s from "./MessagesArea.module.scss";
import MessageItem from "./MessageItem/MessageItem";

const MessagesArea = () => {
  let messageItemData = [
    { id: 1, text: "Hi! Yo!", time: "3:00 pm", isMyMessage: true },
    { id: 1, text: "Hola", time: "3:03 pm", isMyMessage: false },
    { id: 1, text: "blablabla", time: "3:04 pm", isMyMessage: true },
  ];
  return (
    <div className={s.messagesArea}>
      <MessageItem
        text={messageItemData[0].text}
        time={messageItemData[0].time}
        isMyMessage={messageItemData[0].isMyMessage}
      />
      <MessageItem
        text={messageItemData[1].text}
        time={messageItemData[1].time}
        isMyMessage={messageItemData[1].isMyMessage}
      />
      <MessageItem
        text={messageItemData[2].text}
        time={messageItemData[2].time}
        isMyMessage={messageItemData[2].isMyMessage}
      />
    </div>
  );
};

export default MessagesArea;
