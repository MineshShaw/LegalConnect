import './LandingPage.css';
import FeaturedContent from '../../components/FeaturedContent/FeaturedContent';
import testdata from '../../data/testdata.json';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './flipcard.css';
import extracontentpic from '../../assets/extracontentpic.jpg';




const name = testdata.name;
const image = testdata.image;
const description = testdata.description;

const LandingPage = () => {
    const [showMore, setShowMore] = useState(false);
    const [showMoreinfo, setShowMoreinfo] = useState(false);
    const navigate = useNavigate();
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowMore(true);
                    setShowMoreinfo(true);
                }
            },
            { threshold: 0.2 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    const keyFeatures = [
        { title: 'AI-powered legal document review', description: 'Our AI system analyzes legal documents quickly and accurately, providing insights that save time and resources for individuals and businesses alike.' },
        { title: 'Human lawyer verification', description: 'All AI-generated recommendations are verified by experienced lawyers, ensuring that every suggestion is legally sound and tailored to the client’s needs.' },
        { title: '24/7 legal assistance', description: 'Get access to legal professionals at any time, no matter where you are. Whether it’s a simple query or an urgent issue, we’re here to help.' },
        { title: 'Data-driven case predictions', description: 'Using machine learning, we analyze historical legal data to predict case outcomes and offer strategic advice, helping clients make informed decisions.' },
        { title: 'Meet the Best Lawyer in Your City', description: 'Find and connect with top-rated legal professionals near you for expert guidance.' },
        { title: 'Advanced Matching Algorithm', description: 'Our system matches you with the best legal expert based on your specific needs.' }
    ];

    const trustFactors = [
        { title: "✔️ Verified Lawyers", description: "We check all certifications to ensure credibility." },
        { title: "✔️ Client Ratings", description: "Every consultant is rated based on previous client feedback." },
        { title: "✔️ Case Success Rate", description: "We only list professionals with high success rates." },
        { title: "✔️ Continuous Monitoring", description: "Regular performance reviews to maintain quality." }
    ];

    return (
        <div className="LandingPage">
            <div className="landingpage-main container-fluid">
                <div className="landingpage-left">
                    <h1>Legal Connect</h1>
                    <p>LegalConnect is an AI-powered platform connecting individuals, SMEs, and startups with qualified legal and financial professionals in India. We offer a two-step process combining AI document analysis and human verification, providing tailored insights based on region and language.</p>
                    <button className="btn get-started-btn" onClick={() => navigate("/login")}>Get Started</button>
                </div>
                <div className="landingpage-right">
                    <FeaturedContent name={name} image={image} description={description} />
                </div>
            </div>

            <div ref={observerRef} style={{ height: "50px" }}></div>

            {showMore && (
                <div className="extra-content">
                    <div className='left'>
                    <h2>Why Choose LegalConnect?</h2>
                    <p>LegalConnect is a one-stop solution for all your legal needs. Our platform offers a range of services that cater to individuals, SMEs, and startups, providing expert advice and support at every step of the legal process.</p>
                    <img className='featurepic'  src={extracontentpic} alt="Description" />


                    </div>
                  
                    
                    <div className="key-features">
                    <h3>Our Key Features</h3>
                        {keyFeatures.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {showMoreinfo && (
                <div className="more-info">
                    <h2>Why Trust Our Consultants?</h2>
                    <p>We ensure that every legal consultant listed on our platform is credible and reliable. Here’s how we maintain trust:</p>

                    <div className="flip-card-container">
                        {trustFactors.map((factor, index) => (
                            <div key={index} className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h3>{factor.title}</h3>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>{factor.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <footer className="footer">
                <p>© 2025 Legal Connect. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
