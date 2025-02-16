import './HomePage.css';
import Navbar from '../../components/Navbar/Navbar'
import LandingPageNavbarOptions from '../../components/LandingPageNavbarOptions/LandingPageNavbarOptions';

const HomePage = () => {
    const name = 'Minesh';

    const image = 'https://randomuser.me/api/portraits/men/1.jpg';
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.';
    const eventList = [{name: "hello", id: 1},{name: "human", id: 2}, {name: "my", id: 3}, {name: "styling", id: 4}, {name: "is", id: 5}, {name: "awesome", id: 6},
        {name: "hello", id: 23},{name: "human", id: 10}, {name: "my", id: 11}, {name: "styling", id: 16}, {name: "is", id: 17}, {name: "awesome", id: 22},
        {name: "hello", id: 24},{name: "human", id: 9}, {name: "my", id: 12}, {name: "styling", id: 15}, {name: "is", id: 18}, {name: "awesome", id: 21},
        {name: "hello", id: 25},{name: "human", id: 8}, {name: "my", id: 13}, {name: "styling", id: 14}, {name: "is", id: 19}, {name: "awesome", id: 20}
    ]

    const events = eventList.map((event) => (
        <li key={event.id}>{event.name}</li>
    ))    
    return ( 
        <div className="homepage">
            <div className="container main-container">
                <div className="left">
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
                <div className="right">
                    <div className="featuredContent">
                        <div className="featuredContentTop">
                            <img className="featuredContentProfileImage" src={image} />
                            <h3 className="featuredContentProfileName">{name}</h3>
                        </div>
                        <p className="featuredContentProfileDescription">{description}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage
