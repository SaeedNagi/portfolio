import React from "react";
import '../Style/Contact.css';
function Contact() {
  return (
    <>
      <div className="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <form action="#" id="form-contact">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Enter Subject" />
          </div>

          <textarea
            name=""
            cols={10}
            rows={10}
            placeholder="Your message"
          ></textarea>
          <input type="submit" value="Send message" className="btn" />
        </form>
      </div>
    </>
  );
}

export default Contact;
