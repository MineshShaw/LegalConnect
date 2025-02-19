import { UserButton } from '@clerk/clerk-react';
import './Links.css';
import {useNavigate} from 'react-router-dom';

const LoggedInLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="links">
      <button className="btn" onClick={() => navigate("/aboutus")}>About Us</button>
      <button className="btn" onClick={() => navigate("/contactus")}>Contact Us</button>
      <button className="btn" onClick={() => navigate("/services")}>Services</button>
      <button className="btn" onClick={() => navigate("/help")}>Help</button>
      <button className="btn" onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button className="btn" onClick={() => navigate("/profile")}>Profile</button>
      <div className="right-buttons">
          <button className="btn" onClick={() => navigate("/login")}>Logout</button>
      </div>
      <UserButton />
    </div>
  );
};

export default LoggedInLinks;
