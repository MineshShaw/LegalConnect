import FeaturedContent from '../../components/FeaturedContent/FeaturedContent';
import './HomePage.css';
import testdata from '../../data/testdata.json';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const description = testdata.description;
const eventList = testdata.eventList;

const HomePage = () => {

    const { isSignedIn, user } = useUser();
    const navigate = useNavigate();
    console.log(user);
    console.log("-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfwA+T+F/yFyfH\nzE8N4ZF5qd86TBHEvKK4Ip1QtmJ18K/sndKJmZkZ1PxJmoo5HjiWLDpV07SJJL7X\nYzNZdL7JuqOnSDPG/+UficmNIGbp+HmmgKiEaHEKz7wmD3KLJqRI01J4VW8tAoHW\nJ6k1P8Z/qOTqiPRgjnLc5/ewWVraN/yyzF5HWdAWcydsrHGMnvSKVdw41jkY9RRX\ny8yyoaHjWd8AdmGpOkptli51Kx7hjiItzIVxsOAP+KPVXDJWGxGz4DeXXyg+cgb4\n/Rpm13p0i1uELLeiwV+/itBAi2lK02ZC3Ls55b8QjfnRqEfqeIVAg313wdICd6sB\nWI4ta91bAgMBAAECggEAGcZVPRyf7mGKC5SNVMIGRMkBuVg4rbN51ZfQJgunSzww\nRk8YfxcHOsHAiueiUaDspF4yc1KbGF2TZREeYdqSRd4VNZJSuFLlVvdWS6zkre9n\nQVQU3Hg1dPcbdlCbvJPZgd6Gud+e9nYnGLSBepP1pPdNKAI8269gHQBYWF2yaO7K\nOIY5yXPrQOOM4XCIhcwoBAIHwS6oTCIf5j3rymThxj+HaoLzGR73iARDDI46kzqB\nTnot/XVkbJCED4KmRp2omPIZntWH50VHBeR9eNKuH/dJM3fUw+zpt4hXAfStJRsl\njFz2xgIwVlltABCZd4g2R0PbJdvBrkFWq7BPjh4UcQKBgQDWzYq6MOqy0x9b2jRI\nPm6VluDiBEp33ifSk7eeOW++qst4mDK6iBtd5nel4bL+To4FqfQQ0KpppBGAVIdo\nOUoxz6O4evKbjcdrGaGQ1jlY/+vAk4z0DgjTSD5oqoUhS582ZglWIYIIylImYoL3\nhNOce13HQ9nOKg+d5jGfkqEvbQKBgQC+Y4bTmJiLmBepjo++PUYRYIwtNhXc9KFK\nR3LLcg+Nol9LfALTuRyVffkHtXpgKebGQQmXWvm7FUFtlhIYYMzTh5c5Ht2YDK9+\nBFzcL+r/7s2TnDOu9aq1hBSDnUuXzKVIIhpy64dXW1nQZV/dr3HtSS/rIimWdnmn\nZddlLS0a5wKBgQCZzBlkLtocp+VwEtAUWf87xAfITGI1aS8CKxnxhBZqYkfFVNQd\nko5lsTpB31QVmZE+pO1HjOA3O238gIljKoHhIFaNJBrJHb6HBJcV6QyumK7n972Y\nkOPow3VL46vmpwqcHHra3KsKODKRoT88kjIhfIMsxXwRjTQZTlSBeK9IEQKBgQCC\niqt/mjm+PWK8F8vnnQvWDmUO+u6yuel9jM/hPyv66UJ992HY2iwHNID0EDMAjLp3\nZVC2PuLMrB5YjXWK0ZSf1XCS8d7uyoPp3APv1ctEAPFkLM4jQL70BsQqGkgipWcO\ntpN8CJKcCz7h7SB2WD29fVkl2B671DBF30Z5USiEMQKBgBtmDudd5FRJILpHwq1D\niAuGf0tTtlIxnFskO0SgsaZL4XrC5Xj0plSdxg06AnHGYZ/q4dEUJUJ749uX0NtU\n1z7yt/T5Gw5hHXZ4tQsjajyL33PgIZj2JzEvsiMxYC6Oq2ZHwidpp1MaeArtHVO2\nQ1+QFZohAf/xy/YYL9Uh+oDY\n-----END PRIVATE KEY-----\n");
    const name = user?.firstName || user?.fullName || "User";
    const userID = user?.id;
    const image = user.imageUrl;
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
