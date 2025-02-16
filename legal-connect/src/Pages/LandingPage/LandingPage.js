import Navbar from "../../components/Navbar/Navbar";
import LandingPageNavbarOptions from "../../components/LandingPageNavbarOptions/LandingPageNavbarOptions";

const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <Navbar  Component={LandingPageNavbarOptions}/>
        </div>
     );
}
 
export default LandingPage;