import { connect } from "react-redux";
import DialogsArea from "./DialogsArea";

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.dialogsData,
  };
};

export default connect(mapStateToProps)(DialogsArea);
