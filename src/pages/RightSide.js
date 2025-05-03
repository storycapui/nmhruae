import React from 'react';
import './RightSide.css';
import { FaTimes, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const RightSide = ({ onClose }) => {
    return (
        <div className="right-side-overlay">
            <div className="right-side-panel">
                <div className="close-button" onClick={onClose}>
                    <FaTimes />
                </div>

                <div className="logo-section">
                    <img src="/images/main_logo.png" alt="Logo" className="right-logo" />
                    <p className="intro-text">
                        NM HR Consultancy is one of UAE’s most reputed and renowned recruitment consultants and exporters.
                        Based in UAE, we are providing manpower services across various domains for a decade and today we
                        are a name synonymous with trust and quality.
                    </p>
                </div>

                <div className="contact-section">
                    <div className="contact-row">
                        <img src="/images/contact/side1.png" alt="Address" className="contact-icon" />
                        <div>
                            <h4>Address</h4>
                            <p>Abu Dhabi, UAE</p>
                        </div>
                    </div>

                    <div className="contact-row">
                        <img src="/images/contact/side2.png" alt="Phone" className="contact-icon" />
                        <div>
                            <h4>Phone</h4>
                            <p>+971 58 187 9994</p>
                        </div>
                    </div>

                    <div className="contact-row">
                        <img src="/images/contact/side3.png" alt="Email" className="contact-icon" />
                        <div>
                            <h4>Email</h4>
                            <p>recruit@nmhruae.com</p>
                        </div>
                    </div>
                </div>

                <div className="social-icons">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    );
};

export default RightSide;
