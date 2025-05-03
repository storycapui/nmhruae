import React from 'react';
import './MainPageFooter.css';
import { FiPhoneCall } from 'react-icons/fi';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const MainPageFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact-section">
        <div className="footer-card card-dark">
          <div className="footer-card-inner">
            <FaEnvelope className="footer-icon" />
            <div className="text">
              <h4>Email</h4>
              <p>recruit@nmhruae.com</p>
            </div>
          </div>
        </div>
        <div className="footer-card card-blue">
          <div className="footer-card-inner">
            <FiPhoneCall className="footer-icon" />
            <div className="text">
              <h4>Call</h4>
              <p>+971 58 187 9994</p>
            </div>
          </div>
        </div>
        <div className="footer-card card-dark">
          <div className="footer-card-inner">
            <FaMapMarkerAlt className="footer-icon" />
            <div className="text">
              <h4>Address</h4>
              <p>Abu Dhabi, UAE.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main-section">
        <div className="footer-part">
          <h3 className="footer-heading">NM HR</h3>
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <p className="newsletter-text">Join our newsletter and get latest updates</p>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <div className="connect-icons">
            <span>Connect:</span>
            <div className="icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>
        </div>

        <div className="footer-part1">
          <h3 className="footer-heading">Explore</h3>
          <p>About</p>
          <p>Our Solutions</p>
          <p>Team Members</p>
          <p>News & Articles</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-part2">
          <h3 className="footer-heading">Links</h3>
          <p>Employers</p>
          <p>Job Seekers</p>
          <p>How It Works</p>
          <p>Pricing & Plans</p>
          <p>Our Departments</p>
        </div>

        <div className="footer-part news-section">
          <h3 className="footer-heading">News</h3>
          <div className="news-item">
            <img src="/images/hr1.jpg" alt="News1" />
            <p>How to guide to HR adviser and clients lessening</p>
          </div>
          <div className="news-item">
            <img src="/images/hr2.jpg" alt="News2" />
            <p>Providing the best staffing solutions</p>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© Copyright 2024 by NM HR Consultancy. Powered by InfoSoft.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Site Map</span>
        </div>
      </div>
    </footer>
  );
};

export default MainPageFooter;
