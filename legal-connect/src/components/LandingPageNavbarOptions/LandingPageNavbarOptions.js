import './LandingPageNavbarOptions.css';
import { useNavigate } from 'react-router-dom';

const LandingPageNavbarOptions = () => {
    const Navigate = useNavigate();

    return ( 
        <div className="links">
            <button className="btn" href="/login">Login</button>
            <button className="btn" href="/signup">Signup</button>
            <button className="btn" onClick={() => Navigate('/aboutus')}>About Us</button>
        </div>  
     );
}
 
export default LandingPageNavbarOptions;