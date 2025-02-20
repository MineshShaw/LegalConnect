import React from "react";
import ContactForm from "./ContactForm";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      
    <div className="contact-content">
        {/* Left Side - Contact Info */}
        <div className="contact-info">

        <h2 className="contact-title">Contact Us</h2>
          <div className="info-box">
            <h4>Customer Support</h4>
            <p>Our team is available to address your concerns.</p>
               <p className="contact-subtitle">
                  Email, or complete the form to learn how we can assist you.
               </p>
          
            <p><strong>Email:</strong> raghavrathi5555@gmail.com</p>
            
          </div>

          <div className="info-box">
            <h4>Feedback & Suggestions</h4>
            <p>Your input helps us improve. Let us know your thoughts!</p>
          </div>

          
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-container">
          <h3>Get in Touch</h3>
          <ContactForm />
        </div>
      </div>

      {/* Bottom Section - Map & Address */}
      <div className="contact-location">
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.1773047002184!2d77.65481887454473!3d12.848279017571105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d39bc683cd5%3A0x51af52144352b21b!2sStanza%20Living%20Lisbon%20House%20%7C%20Coliving%20PG%20in%20Electronic%20City%20Phase%201!5e1!3m2!1sen!2sin!4v1740034589412!5m2!1sen!2sin" 
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="location-info">
          <h3>Our Location</h3>
          <p><strong>Address:</strong> Stanza Living Lisbon House, Electronic City, Bangalore</p>
          </div>
      </div>
    </div>
  );
};

export default ContactUs;
