import s from "./Messages.module.scss";
import NewMessage from "./NewMessage/NewMessage";
import MessagesArea from "./MessagesArea/MessagesArea";
import DialogsArea from "./DialogsArea/DialogsArea";
import SearchDialogForm from "./SearchDialogForm/SearchDialogForm";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__wrap}>
        <SearchDialogForm
          searchDialogValue={props.state.searchDialogValue}
          dispatch={props.dispatch}
        />
        <DialogsArea dialogsData={props.state.dialogsData} />
      </div>
      <div className={s.messages__wrap}>
        <MessagesArea messagesData={props.state.messagesData} />
        <NewMessage
          dispatch={props.dispatch}
          newMessageValue={props.state.newMessageValue}
        />
      </div>
    </div>
  );
};

export default Dialogs;
