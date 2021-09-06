import s from './DialogsArea.module.scss'
import DialogsItem from './DialogsItem/DialogsItem';


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
          avatar: "https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",
          status: "Online",
        },
      ];

    return (
        <div className={s.dialogsArea}>
          <DialogsItem
            userName={DialogsItemsData[0].userName}
            status={DialogsItemsData[0].status}
            avatar={DialogsItemsData[0].avatar}
            id={DialogsItemsData[0].id}
          />
          <DialogsItem
            userName={DialogsItemsData[1].userName}
            status={DialogsItemsData[1].status}
            avatar={DialogsItemsData[1].avatar}
            id={DialogsItemsData[1].id}
          />
          <DialogsItem
            userName={DialogsItemsData[2].userName}
            status={DialogsItemsData[2].status}
            avatar={DialogsItemsData[2].avatar}
            id={DialogsItemsData[2].id}
          />
        </div>
    )
};

export default DialogsArea