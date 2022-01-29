import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import friendsOnlineDataReducer from "./friendsOnlineDataReducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  friendsOnlineData: friendsOnlineDataReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

// let store = createStore(redusers, applyMiddleware(thunk));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;
