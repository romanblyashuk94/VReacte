import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, sendMessage, changePostArea, changeNewMessage} from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          changePostArea={changePostArea}
          changeNewMessage={changeNewMessage}
          addPost={addPost}
          sendMessage={sendMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
