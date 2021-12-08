import s from "./Messages.module.scss";
import SearchDialogForm from "./SearchDialogForm/SearchDialogForm";
import DialogsAreaContainer from "./DialogsArea/DialogsAreaContainer";
import MessagesAreaContainer from "./MessagesArea/MessagesAreaContainer";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import { connect } from "react-redux";
import { setMessage } from "../../redux/messagesPageReducer";

const Messages = (props) => {
  return (
    <div className={s.messages}>
      <div className={s.dialogs__wrap}>
        <SearchDialogForm />
        <DialogsAreaContainer />
      </div>
      <div className={s.messages__wrap}>
        <MessagesAreaContainer />
        <NewMessageForm onSubmit={props.setMessage} />
      </div>
    </div>
  );
};

export default connect(null, { setMessage })(Messages);
