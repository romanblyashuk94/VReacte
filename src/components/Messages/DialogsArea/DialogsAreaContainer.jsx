import { connect } from "react-redux";
import DialogsArea from "./DialogsArea";

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.dialogsData,
  }
}
const DialogsAreaContainer = connect(mapStateToProps)(DialogsArea)

export default DialogsAreaContainer;
