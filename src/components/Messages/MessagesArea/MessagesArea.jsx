import s from "./MessagesArea.module.scss";
import MessageItem from "./MessageItem/MessageItem";
import { connect } from "react-redux";

const MessagesArea = ({messagesData}) => {
  return (
    <div className={s.messagesArea}>
      {messagesData.map((m) => (
        <MessageItem
          key={m.id}
          messageText={m.text}
          sendTime={m.time}
          isMyMessage={m.isMyMessage}
        />
      ))}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
  };
};
export default connect(mapStatetoProps)(MessagesArea);
