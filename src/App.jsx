import { Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import Users from "./components/Users/Users";
import Messages from "./components/Messages/Messages";

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
        <Route path="/login" render={() => <LoginPage />} />
      </div>
    </div>
  );
};

export default App;
