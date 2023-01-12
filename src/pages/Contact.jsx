import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <div className="profile-pic">
          <img src="./images/pf-pic.jpg" />
        </div>
        <div className="my-info">
          <div className="my-email">
            E-Mail: <a href="mailto:josht98@aol.com">Josht98@aol.com</a>
          </div>
          <div className="my-phone">
            Phone: <a href="tel:(845)954-9010">(845)943-9010</a>
          </div>
          <div className="my-location">Location: Melbourne, FL USA</div>
        </div>
      </div>
      <hr />
      <div className="contact-form">
        <div className="input-boxes">
          <label for="email">E-Mail: </label>
          <input type="email" id="email" name="E-Mail" size="20"></input>
          <br/>
          <label for="first-name">First: </label>
          <input type="text" id="first-name" name="First-Name" size="20"></input>
          <br/>
          <label for="last-name">Last: </label>
          <input type="text" id="last-name" name="Last-Name" size="20"></input>
          <br/>
          <label for="message">Message: </label>
          <br/>
          <textarea id="message" name="Message" rows="4" cols="50"></textarea>
          <br/>
          <button type="submit" className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
