import './Ongoing.css';

const Ongoing = ({eventList}) => {
    const events = eventList.map(event => <li key={event.id}>{event.name}</li>);
    return ( 
        <div className="ongoing">
            <h2 className="ongoingHeading">Ongoing</h2>
            <ul className="ongoing-list">
                {events}
            </ul>
        </div>
     );
}
 
export default Ongoing;