import {
  changeMessageAreaActionCreator,
  setMessageActionCreator,
} from "../../../redux/messagesPageReducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {
  let sendMessage = () => {
    props.store.dispatch(setMessageActionCreator());
  };

  let changeNewMessage = (curentValue) => {
    props.store.dispatch(changeMessageAreaActionCreator(curentValue));
  };

  return (
    <NewMessage
      newMessageValue={props.store.getState().messagesPage.newMessageValue}
      sendMessage={sendMessage}
      changeNewMessage={changeNewMessage}
    />
  );
};

export default NewMessageContainer;
