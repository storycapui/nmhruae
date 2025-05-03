import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-containeru">
            <div className="footer-topu">

                <div className="footer-part1u">
                    <img src="/images/main_logo.png" alt="Logo" className="footer-logou" />
                    <p className="footer-descriptionu">Passionately focused on people and fostering relationships for over 20+ Years.</p>
                    <div className="footer-social-iconsu">
                        <FaInstagram />
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                    </div>
                </div>

                <div className="footer-part2u">
                    <h3 className="footer-headingu">Our Services</h3>
                    <div className="footer-underlineu"></div>
                    <ul className="footer-listu">
                        <li>Overseas Recruitment</li>
                        <li>Executive Search</li>
                        <li>Temporary Staffing</li>
                        <li>Hospitality Recruitment</li>
                    </ul>
                </div>

                <div className="footer-part3u">
                    <h3 className="footer-headingu">Contact Info</h3>
                    <div className="footer-underlineu"></div>
                    <div className="contact-itemu">
                        <img src="/images/contact/side1.png" alt="Address" />
                        <span>Abu Dhabi, UAE</span>
                    </div>
                    <div className="contact-itemu">
                        <img src="/images/contact/side2.png" alt="Phone" />
                        <span>+971 58 187 9994</span>
                    </div>
                    <div className="contact-itemu">
                        <img src="/images/contact/side3.png" alt="Email" />
                        <span>recruit@nmhruae.com</span>
                    </div>
                </div>

                <div className="footer-part4u">
                    <h3 className="footer-headingu">News Letter</h3>
                    <div className="footer-underlineu"></div>
                    <p className="newsletter-textu">Stay up to update with our news.</p>
                    <input type="email" placeholder="Enter your email" className="newsletter-inputu" />
                    <button className="subscribe-buttonu">Subscribe Now</button>
                </div>

            </div>

            <div className="footer-divideru"></div>

            <div className="footer-bottomu">
                <p className="footer-copyu">
                    © 2024 <span className="highlightu">NM HR Consultancy</span>. All Rights Reserved. Powered by <span className="highlightu">Infosoft</span>.
                </p>
                <div className="footer-linksu">
                    <span>Home</span><span className="dotu">•</span>
                    <span>About</span><span className="dotu">•</span>
                    <span>Faqs</span><span className="dotu">•</span>
                    <span>Contact</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
