import './Navbar.css';
import AppLogo from '../AppLogo/AppLogo';

const Navbar = ({Component}) => {
    return ( 
        <div className="navbar">
            <div className="navbar-top">
            <AppLogo/>
            <h1>Legal Connect</h1>
            </div>
            <div className="navbar-bottom">
                <Component/>
            </div>
        </div>
     );
}
 
export default Navbar;