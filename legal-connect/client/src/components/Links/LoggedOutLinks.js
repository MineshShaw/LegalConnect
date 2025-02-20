import { SignInButton } from '@clerk/clerk-react';
import './Links.css';
import {useNavigate} from 'react-router-dom';

const LandingPageNavbarOptions = () => {
    const navigate = useNavigate();
    return ( 
        <div className="links">
            <button className="btn" onClick={() => navigate("/explore")}>Explore</button>
            <button className="btn" onClick={() => navigate("/aboutus")}>About Us</button>
            <button className='btn' onClick={() => navigate("/contactus")}>Contact Us</button>
            <SignInButton asChild>
                <button className="btn">Sign In</button> 
            </SignInButton>
        </div>
     );
}
 
export default LandingPageNavbarOptions;