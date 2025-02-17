import './Links.css';
import {useNavigate} from 'react-router-dom';

const LoggedInLinks = () => {
    const navigate = useNavigate();

    return ( 
        <div className="links">
            <button className="btn" onClick={() => navigate("/login")}>Link 1</button>
            <button className="btn" onClick={() => navigate("/aboutus")}>Link 2</button>
            <button className="btn" onClick={() => navigate("/login")}>Logout</button>
            <button className='btn' onClick={() => navigate("/contactus")}>Contact Us</button>
        </div>
     );
}
 
export default LoggedInLinks;