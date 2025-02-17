import './LandingPage.css';
import FeaturedContent from '../../components/FeaturedContent/FeaturedContent';
import testdata from '../../data/testdata.json';
import {useNavigate} from 'react-router-dom';

const name = testdata.name;
const image = testdata.image;
const description = testdata.description;

const LandingPage = () => {
    const Navigate = useNavigate();

    return ( 
        <div className="LandingPage">
            <div className="landingpage-main container">
                <div className="landingpage-left">
                    <h1>Legal Connect</h1>
                    <p>LegalConnect is an AI-powered platform designed to bridge the gap between users (individuals, SMEs, and startups) and qualified legal and financial professionals in India—specifically Chartered Accountants (CAs), Company Secretaries (CSs), and Tax Lawyers. The platform’s aim is to provide a two-tiered document review and legal consultation process that combines advanced AI/ML document analysis with rigorous human verification. Additionally, the system will offer region- and language-specific insights to cater to a diverse, nationwide user base.</p>
                    <button className="btn get-started-btn" onClick={() => Navigate("/login")}>Get Started</button>
                </div>
                <div className="landingpage-right">
                    <FeaturedContent name={name} image={image} description={description}/>
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;