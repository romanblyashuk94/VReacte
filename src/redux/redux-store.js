import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import friendsOnlineDataReducer from "./friendsOnlineDataReducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  friendsOnlineData: friendsOnlineDataReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;
