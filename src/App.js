import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
        <div class='app-wrapper-content'>
      <Dialogs />
        </div>
    </div>
    /*<Profile />*/
  )
}
export default App;
