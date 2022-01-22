import s from "./MessagesArea.module.scss";
import MessageItem from "./MessageItem/MessageItem";
import { connect } from "react-redux";

const MessagesArea = (props) => {
  return (
    <div className={s.messagesArea}>
      {props.messagesData.map((m) => (
        <MessageItem
          key={m.id}
          text={m.text}
          time={m.time}
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
