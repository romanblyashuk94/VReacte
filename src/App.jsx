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
import React from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { useEffect, Suspense } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Messages = React.lazy(() => import("./components/Messages/Messages"));
const Users = React.lazy(() => import("./components/Users/Users"));

const App = ({ initialaized, initializeApp }) => {
  useEffect(() => {
    initializeApp();
  }, []);

  return initialaized ? (
    <div className="app__wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="maincontent grid_element">
        <Suspense fallback={<Preloader />}>
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <Messages />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/" render={() => <Redirect to='/login' />} />
        </Suspense>
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
