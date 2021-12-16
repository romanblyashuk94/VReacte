import s from "./Messages.module.scss";
import SearchDialogForm from "./SearchDialogForm/SearchDialogForm";
import DialogsAreaContainer from "./DialogsArea/DialogsAreaContainer";
import MessagesAreaContainer from "./MessagesArea/MessagesAreaContainer";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import { connect } from "react-redux";
import { checkSendingMessage } from "../../redux/messagesPageReducer";

const Messages = (props) => {
  const onSubmit = (formData) => {
    props.checkSendingMessage(formData.newMessageBody)
  }
  return (
    <div className={s.messages}>
      <div className={s.dialogs__wrap}>
        <SearchDialogForm />
        <DialogsAreaContainer />
      </div>
      <div className={s.messages__wrap}>
        <MessagesAreaContainer />
        <NewMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default connect(null, { checkSendingMessage })(Messages);
