import React from "react";
import "./contact2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact2() {
  return (
    <div className="container">
      <div className="contact-info">
        <div>
          <h2>Contact</h2>
          <ul className="inform">
            <li>
              <span>
                <FontAwesomeIcon icon="torii-gate" className="icon" />
              </span>
              <span>
                123 Address Street<br></br>Somewhere, AZ<br></br>12345
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon="envelope-open-text" className="icon" />
              </span>
              <span>myemail@email.com</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon="mobile-alt" className="icon" />
              </span>
              <span>123.456.7890</span>
            </li>
          </ul>
          <ul className="media">
            <li>
              <a href="https://github.com/DarkDave1185">
                <FontAwesomeIcon
                  icon={["fab", "github-square"]}
                  className="social"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/david-dawkins-756385177/">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="social"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/darkdave1185/">
                <FontAwesomeIcon
                  icon={["fab", "instagram-square"]}
                  className="social"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Message</h2>
        <div className="form-box">
          <div className="input-box w50 write1">
            <input type="text" name="" required />
            <span>First Name</span>
          </div>
          <div className="input-box w50 write2">
            <input type="text" name="" required />
            <span>Last Name</span>
          </div>
          <div className="input-box w50 write3">
            <input type="text" name="" required />
            <span>Email Address</span>
          </div>
          <div className="input-box w50 write4">
            <input type="text" name="" required />
            <span>Phone Number</span>
          </div>
          <div className="input-box w100 write5">
            <textarea name="" required></textarea>
            <span>Your message here...</span>
          </div>
          <div className="input-box w100 write6">
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
