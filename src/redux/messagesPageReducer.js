const SET_MESSAGE = "SET-MESSAGE";
const CHANGE_MESSAGE_AREA = "CHANGE-MESSAGE-AREA";
const CHANGE_SEARCH_FORM_AREA = "CHANGE-SEARCH-FORM-AREA";

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
  newMessageValue: "",
  searchDialogValue: "",
};
const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      let newMessage = {
        id: state.messagesData.length + 1,
        text: state.newMessageValue,
        time: "3:00 pm",
        isMyMessage: true,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageValue: "",
      };
    }
    case CHANGE_MESSAGE_AREA: {
      return { ...state, newMessageValue: action.curent };
    }
    case CHANGE_SEARCH_FORM_AREA:
      return { ...state, searchDialogValue: action.curent };
    default:
      return state;
  }
};

export const setMessageActionCreator = () => ({ type: SET_MESSAGE });
export const changeMessageAreaActionCreator = (curentValue) => ({
  type: CHANGE_MESSAGE_AREA,
  curent: curentValue,
});
export const changeSearchDialogActionCreator = (curentValue) => ({
  type: CHANGE_SEARCH_FORM_AREA,
  curent: curentValue,
});

window.state = initialState;
export default messagesPageReducer;
