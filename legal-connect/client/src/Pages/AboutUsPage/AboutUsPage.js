import React from "react";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1><b>About LegalConnect</b></h1>
      <br/>
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          LegalConnect is an AI-powered platform designed to bridge the gap between individuals, SMEs, and startups with 
          qualified legal and financial professionals in India. We aim to simplify legal processes, making expert guidance 
          accessible, affordable, and efficient.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize legal services by integrating AI technology with human expertise. We strive 
          to ensure transparency, accuracy, and convenience in legal consultations, making high-quality assistance 
          available anytime, anywhere.
        </p>
      </section>

      <section className="about-section">
        <h2>Why LegalConnect?</h2>
        <p>
          Navigating legal matters can be overwhelming and costly. Many individuals and businesses struggle to find 
          trustworthy legal guidance. LegalConnect solves these challenges with a seamless, tech-driven solution that 
          combines AI-powered analysis with human lawyer verification.
        </p>
      </section>

      <section className="about-section">
        <h2>The Problem We Address</h2>
        <p>The Current Legal Landscape suffers from the following setbacks as per our observations:</p>
        <ul>
          <li>Lack of transparency in legal fees and procedures.</li>
          <li>Difficulty in finding qualified professionals for specific legal areas.</li>
          <li>Time-consuming processes delaying critical decisions.</li>
          <li>Complex legal documents that are hard to understand.</li>
        </ul>
        <h2>Challenges in the Industry</h2>
        <p>The following are general, industry-wide shortcomings:</p>
        <ul>
          <li><strong>Limited Accessibility:</strong> Legal help isn’t always readily available, especially in remote areas.</li>
          <li><strong>High Costs:</strong> Traditional legal consultations can be expensive.</li>
          <li><strong>Information Overload:</strong> Differentiating between relevant and outdated legal information is difficult.</li>
          <li><strong>Trust Issues:</strong> Finding reliable, experienced lawyers is challenging.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Solution: LegalConnect</h2>
        <p>LegalConnect addresses these issues through an AI-driven, expert-verified approach:</p>
        <ul>
          <li><strong>AI-Powered Legal Document Review:</strong> Quick, accurate analysis of legal documents.</li>
          <li><strong>Human Lawyer Verification:</strong> AI-generated recommendations are reviewed by experienced lawyers.</li>
          <li><strong>24/7 Legal Assistance:</strong> Get expert guidance anytime, anywhere.</li>
          <li><strong>Data-Driven Case Predictions:</strong> AI helps clients make informed legal decisions.</li>
          <li><strong>Find the Best Lawyer in Your City:</strong> Advanced matching connects users with top-rated professionals.</li>
          <li><strong>Verified and Trusted Experts:</strong> Every lawyer on LegalConnect is thoroughly vetted.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Benefits of LegalConnect</h2>
        <ul>
          <li>Fast & Reliable: AI-powered analysis reduces time spent on legal processes.</li>
          <li>Affordable: Get expert insights without high consultation fees.</li>
          <li>Trustworthy & Transparent: Verified professionals ensure credibility.</li>
          <li>Convenient & Accessible: 24/7 support and location-based lawyer recommendations.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Join Us in Transforming Legal Services</h2>
        <p>
          LegalConnect is committed to making legal assistance smarter, faster, and more accessible. Whether you’re an 
          individual, a startup, or an SME, our platform empowers you with the right legal tools and expert guidance.
        </p>
        <p>Start your journey with LegalConnect today!</p>
      </section>

      <section className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <img src="profile1.jpg" alt="Person A" />
            <p className="testimonial-review">
              "LegalConnect made it so easy to find a reliable lawyer for my business!"
            </p>
            <p className="testimonial-name">Person A</p>
          </div>
          <div className="testimonial">
            <img src="profile2.jpg" alt="Person B" />
            <p className="testimonial-review">
              "Highly professional CA services, simplified tax filing for me."
            </p>
            <p className="testimonial-name">Person B</p>
          </div>
          <div className="testimonial">
            <img src="profile3.jpg" alt="Person C" />
            <p className="testimonial-review">
              "The platform is so easy to use and gives me legal advice instantly!"
            </p>
            <p className="testimonial-name">Person C</p>
          </div>
          <div className="testimonial">
            <img src="profile4.jpg" alt="Person D" />
            <p className="testimonial-review">
              "The best legal service platform I’ve used. Ultimate help!"
            </p>
            <p className="testimonial-name">Person D</p>
          </div>
        </div>
      </section>
      <br/>
      <section className="terms-conditions">
        <h2>Terms & Conditions</h2>
        <p>Please read our terms and conditions carefully before using our services. If there are further queries, please write to us or reach out online.</p>
        <a href="/docs/terms.pdf" target="_blank" rel="noopener noreferrer" className="terms-link">
          View Terms & Conditions (PDF)
        </a>
      </section>
    </div>
  );
};

export default AboutUsPage;
