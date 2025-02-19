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
      <UserButton />
    </div>
  );
};

export default LoggedInLinks;
