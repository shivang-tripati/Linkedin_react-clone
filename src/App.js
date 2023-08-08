import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';

function App() {

  return (
    <div className="App">
      <Header/>

    {/* App body */}
    <div className='app_body'>
    <SideBar/>
    <Feed/>
    </div>
      
    </div>
  );
}

export default App;
