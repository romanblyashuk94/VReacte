import s from "./Messages.module.scss";
import DialogsItem from "./DialogsItem/DialogsItem";
import NewMessage from "./NewMessage/NewMessage";
import MessagesArea from "./MessagesArea/MessagesArea";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__wrap}>
        <form action="#">
          <input type="text" placeholder="Search" className={s.search} />
        </form>
        <DialogsItem
          userName="Kolobok Ivanovich"
          status="Online"
          avatar="https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg"
          id="1"
        />
        <DialogsItem
          userName="Nyan Cat"
          status="Offline"
          avatar="https://upload.wikimedia.org/wikipedia/ru/6/6b/NyanCat.gif"
          id="2"
        />
      </div>
      <div className={s.messages__wrap}>
        <MessagesArea />
        <NewMessage />
      </div>
    </div>
  );
};

export default Dialogs;
