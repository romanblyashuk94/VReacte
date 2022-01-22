import { connect } from "react-redux";
import s from "./DialogsArea.module.scss";
import DialogsItem from "./DialogsItem/DialogsItem";

const DialogsArea = (props) => {
  return (
    <div className={s.dialogsArea}>
      {props.state.map((d) => (
        <DialogsItem
          userName={d.userName}
          status={d.status}
          avatar={d.avatar}
          key={d.id}
          id={d.id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.dialogsData,
  };
};
export default connect(mapStateToProps)(DialogsArea);
