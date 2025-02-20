import './FeaturedContent.css';

const FeaturedContent = ({name, image, description}) => {
    return ( 
        <div className="featuredContent">
            <div className="featuredContentTop">
                <img className="featuredContentProfileImage" src={image} alt="profileImage"/>
                <h3 className="featuredContentProfileName">{name}</h3>
            </div>
            <p className="featuredContentProfileDescription">{description}</p>
        </div>
     );
}
 
export default FeaturedContent;