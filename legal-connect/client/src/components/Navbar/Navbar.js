import './Navbar.css';
import AppLogo from '../AppLogo/AppLogo';

const Navbar = ({Component}) => {
    return ( 
        <div className="navbar">
            <div className="navbar-main">
            <AppLogo/>
            <h1>Legal Connect</h1>
            <Component/>
            </div>
          
        </div>
     );
}
 
export default Navbar;