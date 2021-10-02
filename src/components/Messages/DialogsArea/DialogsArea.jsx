import s from "./DialogsArea.module.scss";
import DialogsItem from "./DialogsItem/DialogsItem";

const DialogsArea = (props) => {
  let DialogsItemElements = props.state.map((d) => (
    <DialogsItem
      userName={d.userName}
      status={d.status}
      avatar={d.avatar}
      key={d.id}
    />
  ));

  return <div className={s.dialogsArea}>{DialogsItemElements}</div>;
};

export default DialogsArea;
