import './Navbar.css';

const Navbar = ({Component}) => {
    return ( 
        <div className="navbar">
            <h1>Legal Connect</h1>
            <Component />
        </div>
     );
}
 
export default Navbar;