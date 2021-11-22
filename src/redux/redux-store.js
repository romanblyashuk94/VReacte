import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
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

let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;