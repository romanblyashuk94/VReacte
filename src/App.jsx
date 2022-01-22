/* eslint-disable react-hooks/exhaustive-deps */
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
import React from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { useEffect } from "react";

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  return props.initialaized ? (
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
  ) : (
    <Preloader />
  );
};

const mapStateToProps = (state) => {
  return {
    initialaized: state.app.initialaized,
  };
};
export default connect(mapStateToProps, { initializeApp })(App);
