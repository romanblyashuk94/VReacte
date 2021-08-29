import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = () => {
  return (
        <div className="app__wrapper"> 
          <Header />
          <Navbar />
          <div className="maincontent grid_element">
            <Profile />
          </div>
        </div>

  );
}




export default App;