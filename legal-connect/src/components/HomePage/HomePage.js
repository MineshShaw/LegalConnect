import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Ongoing from '../Ongoing/Ongoing';
import LandingPageNavbarOptions from '../LandingPageNavbarOptions/LandingPageNavbarOptions';

const HomePage = () => {
    const name = 'Minesh';
    console.log(name);

    const events = [{name: "hello", id: 1},{name: "human", id: 2}, {name: "my", id: 3}, {name: "styling", id: 4}, {name: "is", id: 5}, {name: "awesome", id: 6},
        {name: "hello", id: 23},{name: "human", id: 10}, {name: "my", id: 11}, {name: "styling", id: 16}, {name: "is", id: 17}, {name: "awesome", id: 22},
        {name: "hello", id: 24},{name: "human", id: 9}, {name: "my", id: 12}, {name: "styling", id: 15}, {name: "is", id: 18}, {name: "awesome", id: 21},
        {name: "hello", id: 25},{name: "human", id: 8}, {name: "my", id: 13}, {name: "styling", id: 14}, {name: "is", id: 19}, {name: "awesome", id: 20}
    ]
    return ( 
        <div className="homepage">
            <Navbar  Component={LandingPageNavbarOptions}/>
            <div className="container">
                <h2>Hello {name}</h2>
                <Ongoing eventList={events}/>
            </div>
        </div>
     );
}
 
export default HomePage
