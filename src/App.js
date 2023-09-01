import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import Widgets from './components/Widgets';


function App() {

  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header/>
      { !user ? (
      <Login />
      ): (
        <div className='app_body'>
        {/* App body */}
        <SideBar/>
        <Feed/>
        {/* Widgets */}
        <Widgets/>
        </div>
        
      )}
    
    
      
    </div>
  );
}

export default App;
