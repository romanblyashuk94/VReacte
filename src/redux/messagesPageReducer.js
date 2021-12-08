const SET_MESSAGE = "SET-MESSAGE";

const initialState = {
  messagesData: [
    {
      id: 1,
      text: "Hi! Yo!",
      time: "3:00 pm",
      isMyMessage: true,
    },
    { id: 2, text: "Hola", time: "3:03 pm", isMyMessage: false },
    {
      id: 3,
      text: "blablabla",
      time: "3:04 pm",
      isMyMessage: true,
    },
  ],
  dialogsData: [
    {
      id: 1,
      userName: "Kolobok",
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
  ],
};
const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      debugger;
      let newMessage = {
        id: state.messagesData.length + 1,
        text: action.newMessage,
        time: "3:00 pm",
        isMyMessage: true,
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    }
    default:
      return state;
  }
};

export const setMessage = (newMessageText) => ({
  type: SET_MESSAGE,
  newMessage: newMessageText.newMessageBody,
});

export default messagesPageReducer;
