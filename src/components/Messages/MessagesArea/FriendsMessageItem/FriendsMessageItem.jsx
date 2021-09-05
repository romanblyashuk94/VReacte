import s from "./FriendsMessageItem.module.scss";

const FriendsMessageItem = (props) => {
  return (
    <div className={s.FriendsMessageItem}>
      <div className={s.message}>
        <div className={s.messageText}>{props.text}</div>
        <div className={s.messageTime}>{props.time}</div>
      </div>
    </div>
  );
};

export default FriendsMessageItem;
