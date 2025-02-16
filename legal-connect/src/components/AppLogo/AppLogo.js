import myLogo from "../../assets/logo.png";
import "./AppLogo.css";

const AppLogo = () => {
    return ( 
        <div className="applogo">
            <img src={myLogo} alt="App Logo" className="app-logo" /> 
        </div>
     );
}
 
export default AppLogo;