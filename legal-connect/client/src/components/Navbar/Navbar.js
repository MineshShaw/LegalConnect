import './Navbar.css';
import AppLogo from '../AppLogo/AppLogo';
import { SignedIn, SignedOut} from '@clerk/clerk-react';
import LoggedInLinks from '../Links/LoggedInLinks';
import LoggedOutLinks from '../Links/LoggedOutLinks';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-right">
            <AppLogo/>
            </div>
            <div className="navbar-left">
                <SignedIn>
                    <LoggedInLinks />
                </SignedIn>
                <SignedOut>
                    <LoggedOutLinks />
                </SignedOut>
            </div>
        </div>
     );
}
 
export default Navbar;