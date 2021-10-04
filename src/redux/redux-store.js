import { combineReducers, createStore } from "redux";
import friendsOnlineDataReducer from "./friendsOnlineDataReducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    friendsOnlineData: friendsOnlineDataReducer,
    usersPage: usersPageReducer,
})

let store = createStore(redusers);

export default store;