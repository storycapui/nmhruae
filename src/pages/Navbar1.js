import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';
import { FaHome, FaInfoCircle, FaTools, FaEnvelope } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import RightSide from './RightSide';

const Navbar1 = ({ currentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [rightMenuOpen, setRightMenuOpen] = useState(false);

    const isHomePage = currentPage === 'home';

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/"><img src="/images/logo1.png" alt="Logo" /></Link>
                </div>

                <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={currentPage === 'home' ? 'active' : ''}>
                        <FaHome className="icon" /> Home
                    </Link>

                    <Link to="/about" className={currentPage === 'about' ? 'active' : ''}>
                        <FaInfoCircle className="icon" /> About Us
                    </Link>

                    <div
                        className={`solutions-dropdown ${currentPage === 'solutions' ? 'active' : ''}`}
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                    >
                        <a href="#" className="solutions-link">
                            <FaTools className="icon" /> Our Solutions
                        </a>
                        {solutionsOpen && (
                            <div className="dropdown-menur">
                                <Link to="/overseas-recruitment">Overseas Recruitment</Link>
                                <Link to="/executive-search">Executive Search</Link>
                                <Link to="/temporary-staffing">Temporary Staffing</Link>
                                <Link to="/hospitality-recruitment">Hospitality Recruitment</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/contact" className={currentPage === 'contact' ? 'active' : ''}>
                        <FaEnvelope className="icon" /> Contact
                    </Link>

                    {isHomePage ? (
                        <Link to="/contact" className="appointment-button">Book an Appointment</Link>
                    ) : (
                        <div className="dots-menu" onClick={() => setRightMenuOpen(true)}> {/* ✅ Open Right Side */}
                            <BsGrid3X3GapFill />
                        </div>
                    )}
                </div>

                <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {rightMenuOpen && <RightSide onClose={() => setRightMenuOpen(false)} />}
        </>
    );
};

export default Navbar1;
