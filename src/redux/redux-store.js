import { combineReducers, createStore } from "redux";
import friendsOnlineDataReducer from "./friendsOnlineDataReducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";

let redusers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    friendsOnlineData: friendsOnlineDataReducer,
})

let store = createStore(redusers);

export default store;