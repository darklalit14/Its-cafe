import React from "react";
import "./ContactUs.css"
function ContactUs() {
  return (
    <div className="contact" id="contact">
      <h1 className="contactTitlte">Contact Us</h1>

      <div className="contactDetails">
        <div className="contactLeft">
          <p className="phone">+91 96399XXXXX</p>
          <p className="email">rohitsaini.codes@gmail.com</p>
          <p className="address">ITS Mohan Nagar, Ghaziabad</p>
        </div>
        <div className="contactRight">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="email" placeholder="Email Address" className="input" />
          <textarea className="input" rows={"10"} placeholder="Message"></textarea>
          <button className="button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
