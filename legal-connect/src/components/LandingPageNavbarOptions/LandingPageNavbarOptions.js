import './LandingPageNavbarOptions.css';
import {useNavigate} from 'react-router-dom';

const LandingPageNavbarOptions = () => {
    const navigate = useNavigate();
    return ( 
        <div className="links">
            <button className="btn" href="/login">Login</button>
            <button className="btn" href="/signup">Signup</button>
            <button className="btn" onClick={() => navigate("/aboutus")}>About Us</button>
        </div>
     );
}
 
export default LandingPageNavbarOptions;