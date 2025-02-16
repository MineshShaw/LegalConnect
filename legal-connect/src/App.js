import './App.css';
import HomePage from './components/HomePage/HomePage';
//import LandingPage from './components/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPageNavbarOptions from './components/LandingPageNavbarOptions/LandingPageNavbarOptions';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar  Component={LandingPageNavbarOptions}/>
        <div className="app-content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/aboutus" element={<AboutUsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
