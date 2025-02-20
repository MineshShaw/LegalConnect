import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginSignupPage from './Pages/LoginSignupPage/LoginSignupPage';
import MyProfile from './Pages/MyProfile/MyProfile';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import ExploreNews from './Pages/ExplorePage/ExploreNews';
import { ClerkProvider} from '@clerk/clerk-react';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {

  return (
    <ClerkProvider afterSignOutUrl='/' publishableKey="pk_test_cHJpbWFyeS1oYWdmaXNoLTYuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <Router>
        <div className="App">
          <Navbar />
          <div className="app-content">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/explore" element={<ExplorePage />} />
              <Route exact path="/ExploreNews" element={<ExploreNews />} />
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/aboutus" element={<AboutUsPage />} />
              <Route exact path="/login" element={<LoginSignupPage />} />
              <Route exact path="/myprofile/:id" element={<MyProfile />} />
              <Route exact path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
