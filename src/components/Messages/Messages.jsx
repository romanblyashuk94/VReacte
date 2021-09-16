import s from "./Messages.module.scss";
import NewMessage from "./NewMessage/NewMessage";
import MessagesArea from "./MessagesArea/MessagesArea";
import DialogsArea from "./DialogsArea/DialogsArea";
import SearchDialogForm from "./SearchDialogForm/SearchDialogForm";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__wrap}>
        <SearchDialogForm />
        <DialogsArea dialogsData={props.state.dialogsData} />
      </div>
      <div className={s.messages__wrap}>
        <MessagesArea messagesData={props.state.messagesData} />
        <NewMessage sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
