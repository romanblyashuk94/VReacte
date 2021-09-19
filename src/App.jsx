import { Route } from "react-router-dom";
import "./App.scss";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";

const App = (props) => {
  return (
    <div className="app__wrapper">
      <Header />
      <Navbar friendsOnlineData={props.state.friendsOnlineData} />
      <div className="maincontent grid_element">
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/messages"
          render={() => (
            <Messages
              state={props.state.messagesPage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/users" component={Users} />
      </div>
    </div>
  );
};

export default App;
