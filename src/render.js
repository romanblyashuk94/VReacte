import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, sendMessage } from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} sendMessage={sendMessage} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }