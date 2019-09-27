import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Aside from "./Components/Aside/Aside";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
            <Aside />
        </div>
    );
}


export default App;
