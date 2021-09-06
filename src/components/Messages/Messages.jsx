import s from "./Messages.module.scss";
import NewMessage from "./NewMessage/NewMessage";
import MessagesArea from "./MessagesArea/MessagesArea";
import DialogsArea from "./DialogsArea/DialogsArea";
import SearchDialogForm from "./SearchDialogForm/SearchDialogForm";

const Dialogs = () => {

  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__wrap}>
        <SearchDialogForm />
        <DialogsArea />
      </div>
      <div className={s.messages__wrap}>
        <MessagesArea />
        <NewMessage />
      </div>
    </div>
  );
};

export default Dialogs;
