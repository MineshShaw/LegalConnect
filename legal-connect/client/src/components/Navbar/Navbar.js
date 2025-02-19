import './Navbar.css';
import AppLogo from '../AppLogo/AppLogo';
import { useAuth } from '@clerk/clerk-react';
import LoggedInLinks from '../Links/LoggedInLinks';
import LoggedOutLinks from '../Links/LoggedOutLinks';

const Navbar = () => {
    const isLoggedIn = useAuth();
    return ( 
        <div className="navbar">
            <div className="navbar-main">
            <AppLogo/>
            <h1>Legal Connect</h1>
            {isLoggedIn.isSignedIn ? <LoggedInLinks /> : <LoggedOutLinks />}
            </div>

          
          
        </div>
     );
}
 
export default Navbar;