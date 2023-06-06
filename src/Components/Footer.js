import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-div">
        <div className="logo">
          <h1 className=" ">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="">
          We always make our seekers and companies find the best jobs end
          employers find the best candidates.
        </p>
      </div>
      <div className="company-div">
        <span>Company</span>
        <div>
          <li>About us</li>
          <li>Features</li>
          <li>News</li>
          <li>FAQ</li>
        </div>
      </div>
      <div className="resources-div">
        <span>Resources</span>
        <div>
          <li>Account</li>
          <li>Support Center</li>
          <li>Feedback</li>
          <li>Contact Us</li>
        </div>
      </div>
      <div className="support-div">
        <span>Support</span>
        <div>
          <li>Events</li>
          <li>Promo</li>
          <li>Req Demo</li>
          <li>Careers</li>
        </div>
      </div>
      <div className="contact">
        <span>Contact Info</span>
        <div>0hulyakucuk@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
