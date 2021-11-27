import { connect } from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import DialogsArea from "./DialogsArea";

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.dialogsData,
  };
};

export default connect(mapStateToProps)(withAuthRedirect(DialogsArea));
