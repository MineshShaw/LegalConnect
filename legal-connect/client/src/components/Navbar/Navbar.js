import './Navbar.css';
import AppLogo from '../AppLogo/AppLogo';

const Navbar = ({Component}) => {
    return ( 
        <div className="navbar">
            <div className="navbar-right">
               <AppLogo/>
           
            </div>

            <div className="navbar-left">
                 <Component/>
           
            </div>

          
          
        </div>
     );
}
 
export default Navbar;