const SET_MESSAGE = "SET-MESSAGE";
const CHANGE_MESSAGE_AREA = "CHANGE-MESSAGE-AREA";
const CHANGE_SEARCH_FORM_AREA = "CHANGE-SEARCH-FORM-AREA";

const messagesPageReducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        text: state.newMessageValue,
        time: "3:00 pm",
        isMyMessage: true,
      };
      state.messagesData.push(newMessage);
      state.newMessageValue = "";
      return state;
    case CHANGE_MESSAGE_AREA:
      state.newMessageValue = action.curent;
      return state;
    case CHANGE_SEARCH_FORM_AREA:
      state.searchDialogValue = action.curent;
      return state;
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

export default messagesPageReducer;
