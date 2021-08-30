import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Messages from './components/Messages/Messages';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = () => {
  return (
    <BrowserRouter>
        <div className="app__wrapper"> 
          <Header />
          <Navbar />
          <div className="maincontent grid_element">
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Messages} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
    </BrowserRouter>
  );
}




export default App;