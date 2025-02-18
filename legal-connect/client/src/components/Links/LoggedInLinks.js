import './Links.css';
import {useNavigate} from 'react-router-dom';

const LoggedInLinks = () => {
    const navigate = useNavigate();

    return ( 
        <div className="links">
        {/* Left-aligned buttons */}
        <div className="left-buttons">
            <button className="btn" onClick={() => navigate("/aboutus")}>About Us</button>
            <button className="btn" onClick={() => navigate("/contactus")}>Contact Us</button>
        </div>

        {/* Right-aligned button */}
        <div className="right-buttons">
            <button className="btn" onClick={() => navigate("/login")}>Logout</button>
        </div>
    </div>
     );
}
 
export default LoggedInLinks;