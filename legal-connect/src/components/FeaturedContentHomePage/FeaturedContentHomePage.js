const FeaturedContentHomePage = (props) => {
    return ( 
        <div className="featuredContent">
            <div className="featuredContentTop">
                <img src={props.image} />
                <h3>{props.name}</h3>
            </div>
            <p>{props.description}</p>
        </div>
     );
}
 
export default FeaturedContentHomePage;