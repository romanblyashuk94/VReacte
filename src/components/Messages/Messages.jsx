import s from "./Messages.module.scss";
import SearchDialogForm from "./SearchDialogForm/SearchDialogForm";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import { connect } from "react-redux";
import { checkSendingMessage } from "../../redux/messagesPageReducer";
import MessagesArea from "./MessagesArea/MessagesArea";
import DialogsArea from "./DialogsArea/DialogsArea";

const Messages = ({checkSendingMessage}) => {

  const onSubmit = (formData) => {
    checkSendingMessage(formData.newMessageBody)
  }
  
  return (
    <div className={s.messages}>
      <div className={s.dialogs__wrap}>
        <SearchDialogForm />
        <DialogsArea />
      </div>
      <div className={s.messages__wrap}>
        <MessagesArea />
        <NewMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default connect(null, { checkSendingMessage })(Messages);
