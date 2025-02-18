import './MyProfile.css';
import data from '../../data/testdata.json'

const MyProfile = () => {
    const rootdata = data.profiles.xyzabclol;
    const name = rootdata.persondetails.name;
    const image = rootdata.persondetails.image;
    const description = rootdata.persondetails.description;
    const email = rootdata.persondetails.email;
    const occupation = rootdata.persondetails.occupation;
    const verified = rootdata.persondetails.verified;
    return ( 
        <div className="my-profile">
            <h1>Profile</h1>
            <div className="myprofile-container">
                <div className="myprofile-left">
                    <ul>
                        <li>Name: {name}</li>
                        <li>Description: {description}</li>
                        <li>Email: {email}</li>
                        <li>Occupation: {occupation}</li>
                        <li>{verified? 'Verified' : 'Not Verified'}</li>
                    </ul>
                </div>
                <div className="myprofile-right">
                    <img className="featuredContentProfileImage" src={image} alt="profileImage"/>
                    <h3 className="featuredContentProfileName">{name}</h3>
                </div>
            </div>
        </div>
     );
}
 
export default MyProfile;