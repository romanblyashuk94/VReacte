import s from "./MessagesArea.module.scss";
import FriendsMessageItem from "./FriendsMessageItem/FriendsMessageItem";
import MyMessageItem from "./MyMessageItem/MyMessageItem";

const MessagesArea = () => {
  return (
    <div className={s.messagesArea}>
      <MyMessageItem text="Hi! Yo!" time="3:00 pm" />
      <FriendsMessageItem text="Hola" time="3:03 pm" />
      <MyMessageItem text="blablabla" time="3:04 pm" />
    </div>
  );
};

export default MessagesArea;
