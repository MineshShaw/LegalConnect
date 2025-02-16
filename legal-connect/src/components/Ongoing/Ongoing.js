import './Ongoing.css';

const Ongoing = (props) => {
    const events = props.eventList.map(event => <li key={event.id}>{event.name}</li>);
    return (
        <div className="ongoing">
            <h2 className="welcomeMessage">Hello {props.name}</h2>
            <div className="ongoing-container">
                <h2 className="ongoingHeading">Ongoing</h2>
                <ul className="ongoing-list">
                    {events}
                </ul>
            </div>
        </div>
     );
}
 
export default Ongoing;