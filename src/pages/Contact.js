import React from 'react';
import Navbar1 from '../pages/Navbar1';
import Footer from '../pages/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Navbar1 currentPage="Contact" />
            <section className="contact-banner">
                <img src="/images/contact/main.jpg" alt="Contact Banner" className="banner-image" />
                <div className="banner-content">
                    <h1>Have questions - Contact us</h1>
                    <p>Give us a call or Drop by anytime, we Endeavour to answer all queries on Business Hours.<br />
                        We will be Happy to answer all your questions.
                    </p>
                </div>
            </section>

            <section className="contact-details">
                <div className="contact-left">
                    <div className="contact-heading">
                        <hr className="blue-line" />
                        <h2>Get in Touch</h2>
                        <p>The GCC's most esteemed Workforce Solutions Provider.</p>
                    </div>

                    <div className="contact-info-item">
                        <img src="/images/contact/side1.png" alt="Location" />
                        <span>Abu Dhabi, U.A.E.</span>
                    </div>

                    <div className="contact-info-item">
                        <img src="/images/contact/side2.png" alt="Phone" />
                        <span>+971 58 187 9994</span>
                    </div>

                    <div className="contact-info-item">
                        <img src="/images/contact/side3.png" alt="Email" />
                        <span>recruit@nmhruae.com</span>
                    </div>
                </div>

                <div className="contact-right">
                    <iframe
                        title="Dubai Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115614.50840977572!2d55.2707825!3d25.2048492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c76ddc4158b%3A0x6ef1d65a39b1c3c6!2sDubai!5e0!3m2!1sen!2sae!4v1684506547780!5m2!1sen!2sae"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="contact-map"
                    ></iframe>
                </div>
            </section>


            <section className="contact-splitr">
                <div className="contact-split-imager">
                    <img src="/images/contact/customer_care.jpg" alt="Customer Care" />
                </div>

                <div className="contact-split-contentr">


                    <div className="form-cardr">
                        <form className="form-bodyr">
                            <h2>Contact Us</h2>
                            <div className="input-wrapperr">
                                <input type="text" placeholder=" " required />
                                <label>Name</label>
                            </div>

                            <div className="input-wrapperr">
                                <input type="email" placeholder=" " required />
                                <label>Email</label>
                            </div>

                            <div className="input-wrapperr">
                                <input type="text" placeholder=" " required />
                                <label>Phone Number</label>
                            </div>

                            <div className="input-wrapperr">
                                <input type="text" placeholder=" " />
                                <label>Your Website</label>
                            </div>

                            <div className="input-wrapperr">
                                <textarea rows="4" placeholder=" " required></textarea>
                                <label>Your Message</label>
                            </div>

                            <button type="submit" className="form-submit-btnr">Submit</button>
                        </form>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default Contact;
