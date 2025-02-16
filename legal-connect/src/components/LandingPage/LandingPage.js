import Navbar from "../Navbar/Navbar";
import LandingPageNavbarOptions from "../LandingPageNavbarOptions/LandingPageNavbarOptions";

const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <Navbar  Component={LandingPageNavbarOptions}/>
        </div>
     );
}
 
export default LandingPage;