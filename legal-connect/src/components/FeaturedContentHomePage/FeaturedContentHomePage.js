import './FeaturedContentHomePage.css';

const FeaturedContentHomePage = (props) => {
    return ( 
        <div className="featuredContent">
            <div className="featuredContentTop">
                <img className="featuredContentProfileImage" src={props.image} />
                <h3 className="featuredContentProfileName">{props.name}</h3>
            </div>
            <p className="featuredContentProfileDescription">{props.description}</p>
        </div>
     );
}
 
export default FeaturedContentHomePage;