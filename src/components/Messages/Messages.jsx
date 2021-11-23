import s from "./Messages.module.scss";
import SearchDialogContainer from "./SearchDialogForm/SearchDialogContainer";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import DialogsAreaContainer from "./DialogsArea/DialogsAreaContainer";
import MessagesAreaContainer from "./MessagesArea/MessagesAreaContainer";


const Messages = (props) => {
  
  return (
    <div className={s.messages}>
      <div className={s.dialogs__wrap}>
        <SearchDialogContainer />
        <DialogsAreaContainer />
      </div>
      <div className={s.messages__wrap}>
        <MessagesAreaContainer />
        <NewMessageContainer />
      </div>
    </div>
  );
};

export default Messages;