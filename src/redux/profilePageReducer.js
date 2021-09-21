const SET_POST = "SET-POST";
const CHANGE_POST_AREA = "CHANGE-POST-AREA";

const profilePageReducer = (state, action) => {
  switch (action.type) {
    case SET_POST:
      let newPost = {
        id: state.postsData.length + 1,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message: state.postAreaValue,
        date: "8/29/2021 8:36 PM",
        likesCount: 0,
      };
      state.postsData.unshift(newPost);
      state.postAreaValue = "";
      return state;
    case CHANGE_POST_AREA:
      state.postAreaValue = action.curent;
      return state;
    default:
      return state;
  }
};

export const setPostActionCreator = () => ({ type: SET_POST });
export const changePostAreaActionCreator = (curentValue) => ({
  type: CHANGE_POST_AREA,
  curent: curentValue,
});

export default profilePageReducer;
