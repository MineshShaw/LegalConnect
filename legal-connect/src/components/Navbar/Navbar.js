import './Navbar.css';
import myLogo from 'src/assets/logo.png';

const Navbar = ({Component}) => {
    return ( 
        <div className="navbar">
            <div className="navbar-top">
            <img src={myLogo} alt="logo" />
            <h1>Legal Connect</h1>
            </div>
            <div className="navbar-bottom">
                <Component/>
            </div>
        </div>
     );
}
 
export default Navbar;