import { connect } from "react-redux";
import MessagesArea from "./MessagesArea";

const mapStatetoProps = (state) => {
  return {
    state: state.messagesPage.messagesData,
  }
}
const MessagesAreaContainer = connect(mapStatetoProps)(MessagesArea)

export default MessagesAreaContainer;
