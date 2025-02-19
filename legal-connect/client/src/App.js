import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoggedOutLinks from './components/Links/LoggedOutLinks';
import LoggedInLinks from './components/Links/LoggedInLinks';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import { useState, useEffect } from 'react';
import LoginSignupPage from './Pages/LoginSignupPage/LoginSignupPage';
import MyProfile from './Pages/MyProfile/MyProfile';

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar  Component={!isLoggedIn ? LoggedOutLinks : LoggedInLinks}/>
        <div className="app-content">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/aboutus" element={<AboutUsPage />} />
            <Route exact path="/login" element={<LoginSignupPage />} />
            <Route exact path="/myprofile/:id" element={<MyProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
