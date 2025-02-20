import FeaturedContent from '../../components/FeaturedContent/FeaturedContent';
import './HomePage.css';
import testdata from '../../data/testdata.json';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const name = testdata.name;
const image = testdata.image;
const description = testdata.description;
const eventList = testdata.eventList;

const HomePage = () => {

    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
        navigate("/");
        }
    }, [isSignedIn, navigate]);

    const events = eventList.map((event) => (
        <li key={event.id}>{event.name}</li>
    ))    
    return ( 
        <div className="homepage">
            <div className="container homepage-main">
                <div className="homepage-left">
                    <div className="ongoing">
                        <h2 className="welcomeMessage">Hello {name}</h2>
                        <div className="ongoing-container">
                            <h2 className="ongoingHeading">Ongoing</h2>
                            <ul className="ongoing-list">
                                {events}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="homepage-right">
                    <FeaturedContent name={name} image={image} description={description} />
                </div>
            </div>
        </div>
     );
}
 
export default HomePage
