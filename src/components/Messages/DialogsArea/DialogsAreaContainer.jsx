import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import DialogsArea from "./DialogsArea";

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.dialogsData,
  };
};

export default compose(connect(mapStateToProps), withAuthRedirect)(DialogsArea);
