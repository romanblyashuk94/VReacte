import { connect } from "react-redux";
import {
  changeMessageArea,
  setMessage,
} from "../../../redux/messagesPageReducer";
import NewMessage from "./NewMessage";

const mapStateToProps = (state) => {
  return {
    newMessageValue: state.messagesPage.newMessageValue,
  };
};

export default connect(mapStateToProps, {
  setMessage,
  changeMessageArea,
})(NewMessage);
