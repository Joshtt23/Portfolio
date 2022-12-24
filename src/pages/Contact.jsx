import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <div className="profile-pic">
          <img src="https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"/>
        </div>
        <div className="email">
          Email: <a href="mailto:josht98@aol.com">Josht98@aol.com</a>
        </div>
        <div className="phone">
          Phone: <a href="tel:(845)954-9010">(845)943-9010</a>
        </div>
        <div className="location">Location: USA</div>
      </div>
    </div>
  );
}

export default Contact;
