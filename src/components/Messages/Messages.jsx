import s from "./Messages.module.scss";
import MessagesArea from "./MessagesArea/MessagesArea";
import DialogsArea from "./DialogsArea/DialogsArea";
import SearchDialogContainer from "./SearchDialogForm/SearchDialogContainer";
import NewMessageContainer from "./NewMessage/NewMessageContainer";


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__wrap}>
        <SearchDialogContainer store={props.store} />
        <DialogsArea state={props.store.getState().messagesPage.dialogsData} />
      </div>
      <div className={s.messages__wrap}>
        <MessagesArea
          state={props.store.getState().messagesPage.messagesData}
        />
        <NewMessageContainer store={props.store}/>
      </div>
    </div>
  );
};

export default Dialogs;
