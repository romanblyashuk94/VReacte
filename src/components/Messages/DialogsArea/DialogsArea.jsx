import { connect } from "react-redux";
import s from "./DialogsArea.module.scss";
import DialogsItem from "./DialogsItem/DialogsItem";

const DialogsArea = ({dialogsData}) => {
  return (
    <div className={s.dialogsArea}>
      {dialogsData.map((d) => (
        <DialogsItem
          userName={d.userName}
          onlineStatus={d.status}
          userAvatar={d.avatar}
          key={d.id}
          userID={d.id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
  };
};
export default connect(mapStateToProps)(DialogsArea);
