import s from "./MyMessageItem.module.scss";

const MyMessageItem = (props) => {
  return (
    <div className={s.myMessageItem}>
      <div className={s.space}></div>
      <div className={s.message}>
        <div className={s.messageText}>{props.text}</div>
        <div className={s.messageTime}>{props.time}</div>
      </div>
    </div>
  );
};

export default MyMessageItem;
