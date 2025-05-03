import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Navbar1 from '../pages/Navbar1';
import Footer from '../pages/Footer';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Navbar1 currentPage="about" />

            <section className="about-hero">
                <div className="about-hero-overlay">
                    <h1 className="about-hero-heading">About
                        <br />Us</h1>
                </div>
                <img src="/images/about/main1.jpg" alt="About Background" className="about-hero-image" />
            </section>


            <section className="vision-section">
                <div className="vision-left">
                    <h4 className="vision-small-heading">Our Company’s Vision</h4>
                    <h1 className="vision-main-heading">
                        With a vision of excellence, our team launched NM HR Consultancy in UAE.
                    </h1>
                    <p className="vision-description">
                        Along with hard work and a commitment to optimizing outsourcing processes for our clients, we have brought this vision to life over two decades by consistently delivering comprehensive and specialist services.<br /><br />
                        NM HR Consultancy have developed a comprehensive range of employee solutions, from staffing and recruitment to payroll and HR operations, and achieved to our service excellence.
                    </p>
                </div>
                <div className="vision-right">
                    <img src="/images/about/side1.jpg" alt="Vision Side" className="vision-side-image" />
                </div>
            </section>


            <section className="about-fullscreen-parts">
                <img src="/images/about/part.jpg" alt="Background" className="background-image" />
                <div className="overlay-content">
                    <div className="part-section">
                        <img src="/images/about/part1.png" alt="Expert Peoples" className="part-icon" />
                        <div className="part-text">
                            Expert <br /> Peoples
                        </div>
                    </div>
                    <div className="part-section">
                        <img src="/images/about/part2.png" alt="Big Experience" className="part-icon" />
                        <div className="part-text">
                            Big <br /> Experience
                        </div>
                    </div>
                    <div className="part-section">
                        <img src="/images/about/part3.png" alt="Committed to Quality" className="part-icon" />
                        <div className="part-text">
                            Commited to <br /> Quality
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-side-image-text">
                <div className="about-side-left">
                    <img src="/images/about/side2.jpg" alt="Side Visual" className="side-image" />
                </div>
                <div className="about-side-right">
                    <div className="horizontal-line"></div>
                    <h2 className="about-side-heading">What We Do</h2>
                    <p className="about-side-description">
                        We follow inventive methods, create innovative approaches, and strengthen our approaches. Our undertaking are in line with our objective of maximizing service quality whilst benefiting the economy.
                        <br /><br />
                        Executive search is most effective where the candidate population is defined and identifiable. Working at senior management level, we carefully establish client relationships, study their corporate cultures thoroughly and together with our clients ensure that the right candidate is selected.
                    </p>
                </div>
            </section>
















            <section className="about-counter-section">
                <div className="counter-grid">

                    <div className="counter-part">
                        <div className="counter-inner">
                            <div className="counter-image">
                                <img src="/images/about/count1.png" alt="Count 1" />
                            </div>
                            <div className="counter-number">
                                <AnimatedCounter end={21} />
                            </div>
                        </div>
                        <div className="counter-text">
                            Projects completed for <br /> our respected clients.
                        </div>
                        <div className="counter-line"></div>
                    </div>

                    <div className="counter-part">
                        <div className="counter-inner">
                            <div className="counter-image">
                                <img src="/images/about/count2.png" alt="Count 2" />
                            </div>
                            <div className="counter-number">
                                <AnimatedCounter end={8} />
                            </div>
                        </div>
                        <div className="counter-text">
                            Experienced people <br /> serving to clients.
                        </div>
                        <div className="counter-line"></div>
                    </div>

                    <div className="counter-part">
                        <div className="counter-inner">
                            <div className="counter-image">
                                <img src="/images/about/count3.png" alt="Count 3" />
                            </div>
                            <div className="counter-number">
                                <AnimatedCounter end={1} />
                            </div>
                        </div>
                        <div className="counter-text">
                            Years experience in HR <br /> Consulting.
                        </div>
                        <div className="counter-line"></div>
                    </div>

                    <div className="counter-part">
                        <div className="counter-inner">
                            <div className="counter-image">
                                <img src="/images/about/count4.png" alt="Count 4" />
                            </div>
                            <div className="counter-number">
                                <AnimatedCounter end={18} />
                            </div>
                        </div>
                        <div className="counter-text">
                            Satisfied Customers.
                        </div>
                        <div className="counter-line"></div>
                    </div>

                </div>
            </section>








            <section className="team-cards-section">
                <div className="team-cards-container">
                    <div className="team-card">
                        <div className="team-card-inner">
                            <img src="/images/about/speaker1.jpg" alt="CEO" className="team-card-image" />
                            <h3 className="team-card-heading">Name</h3>
                            <p className="team-card-subheading">CEO</p>

                            <div className="social-bar">
                                <a href="#" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon pinterest" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a href="#" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="team-card-inner">
                            <img src="/images/about/speaker4.jpg" alt="Manager" className="team-card-image" />
                            <h3 className="team-card-heading">Name</h3>
                            <p className="team-card-subheading">MANAGER</p>

                            <div className="social-bar">
                                <a href="#" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon pinterest" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a href="#" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-card-inner">
                            <img src="/images/about/speaker3.jpg" alt="Advisor" className="team-card-image" />
                            <h3 className="team-card-heading">Name</h3>
                            <p className="team-card-subheading">ADVISOR</p>

                            <div className="social-bar">
                                <a href="#" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon pinterest" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a href="#" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>












            <Footer />
        </div>
    );
};

export default About;








const AnimatedCounter = ({ end }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef();
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }
    }, []);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 1500;
            const increment = end / (duration / 20);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setCount(Math.floor(start));
            }, 20);
        }
    }, [inView, end]);

    return (
        <div className="animated-number" ref={counterRef}>
            {count}
            <span className="plus-sign">+</span>
        </div>
    );
};

