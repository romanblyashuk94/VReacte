import { connect } from "react-redux";
import MessagesArea from "./MessagesArea";

const mapStatetoProps = (state) => {
  return {
    state: state.messagesPage.messagesData,
  };
};

export default connect(mapStatetoProps)(MessagesArea);
