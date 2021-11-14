import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import friendsOnlineDataReducer from "./friendsOnlineDataReducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    friendsOnlineData: friendsOnlineDataReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

let store = createStore(redusers);

window.store = store;

export default store;