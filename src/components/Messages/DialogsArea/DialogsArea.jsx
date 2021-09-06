import s from "./DialogsArea.module.scss";
import DialogsItem from "./DialogsItem/DialogsItem";

const DialogsArea = () => {
  let DialogsItemsData = [
    {
      id: 1,
      userName: "Kolobok Ivanovich",
      avatar:
        "https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg",
      status: "Online",
    },
    {
      id: 2,
      userName: "Nyan Cat",
      avatar: "https://upload.wikimedia.org/wikipedia/ru/6/6b/NyanCat.gif",
      status: "Offline",
    },
    {
      id: 3,
      userName: "Iron Man",
      avatar:
        "https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",
      status: "Online",
    },
  ];

  let DialogsItemElements = DialogsItemsData.map((d) => (
    <DialogsItem
      userName={d.userName}
      status={d.status}
      avatar={d.avatar}
      id={d.id}
    />
  ));

  return <div className={s.dialogsArea}>{DialogsItemElements}</div>;
};

export default DialogsArea;
