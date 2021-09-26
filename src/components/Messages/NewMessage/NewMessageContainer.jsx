import { connect } from "react-redux";
import {
  changeMessageAreaActionCreator,
  setMessageActionCreator,
} from "../../../redux/messagesPageReducer";
import NewMessage from "./NewMessage";

const mapStateToProps = (state) => {
  return {
    newMessageValue: state.messagesPage.newMessageValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(setMessageActionCreator())
    },
    changeNewMessage: (curentValue) => {
      dispatch(changeMessageAreaActionCreator(curentValue))
    },
  }
}
const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer;
