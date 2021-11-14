import { Route } from "react-router-dom";
import "./App.scss";
import Messages from "./components/Messages/Messages";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="app__wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="maincontent grid_element">
        <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
        <Route path="/messages" render={() => <Messages />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/users" render={() => <Users />} />
      </div>
    </div>
  );
};

export default App;
