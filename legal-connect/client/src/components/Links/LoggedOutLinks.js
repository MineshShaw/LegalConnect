import './Links.css';
import {useNavigate} from 'react-router-dom';

const LandingPageNavbarOptions = () => {
    const navigate = useNavigate();
    return ( 
        <div className="links">
            <button className="btn" onClick={() => navigate("/login")}>Login/Signup</button>
            <button className="btn" onClick={() => navigate("/aboutus")}>About Us</button>
            <button className='btn' onClick={() => navigate("/contactus")}>Contact Us</button>
        </div>
     );
}
 
export default LandingPageNavbarOptions;