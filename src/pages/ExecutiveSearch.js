import React, { useEffect } from 'react';
import './ExecutiveSearch.css';
import Navbar1 from '../pages/Navbar1';
import Footer from '../pages/Footer';

const ExecutiveSearch = () => {

    useEffect(() => {
        const fillBars = document.querySelectorAll('.fill-barn');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.getAttribute('data-percentage') + '%';
                }
            });
        }, { threshold: 0.5 });

        fillBars.forEach(bar => observer.observe(bar));
    }, []);

    return (
        <div className="overseas-recruitment-pagen">
            <Navbar1 currentPage="executive-search" />

            <section className="main-image-sectionn">
                <img src="/images/es/main.jpg" alt="Executive Search" className="main-imagen" />
                <h1 className="main-headingn">Executive Search</h1>
            </section>

            <section className="info-sectionn">
                <div className="info-leftn">
                    <img src="/images/or/side1.jpg" alt="Side Visual" className="side-imagen" />
                </div>
                <div className="info-rightn">
                    <div className="info-contentn">
                        <hr className="small-linen" />
                        <h2 className="info-headingn">Executive Search</h2>
                        <p className="info-descriptionn">
                            NM HR Consultancy offers an executive search service by accessing outstanding leadership talent internationally. Our team specializes in understanding the client's critical leadership needs and providing a thorough search process to find the best fit. Through detailed screening, deep industry insights, and global connections, we ensure you hire leaders who drive success. We manage the entire process from candidate assessment to final negotiations, making executive hiring efficient and reliable.
                        </p>
                    </div>
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
                            Committed to <br /> Quality
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose-sectionn">
                <div className="why-choose-leftn">
                    <hr className="why-linen" />
                    <h2 className="why-headingn">What We Do</h2>

                    <p className="why-descriptionn">
                        Our consultants specialise in executive headhunting and recruitment for organisations across the Middle East including the UAE (Dubai and Abu Dhabi), Saudi Arabia, and Oman. Our focus is to deliver you outstanding senior executives that fully meet your needs.
                    </p>

                    <p className="why-descriptionn">
                        Our headhunting methodology is fully adaptable to meet your firms unique business requirements. Our tried and tested protocol utilises an extensive database of executive candidates, industry and market knowledge, and fast accurate responses.
                    </p>

                    <p className="why-descriptionn">
                        Our Executive Search consultants are located in Abu Dhabi, and serve clients across the Middle East. Start discussions with our recruiters via email or call +971 58 187 9994
                    </p>

                    <p className="why-descriptionn">
                        As leaders in Executive recruitment our consultants expertise and insights are often featured in the news. We like to provide information to help develop your skills and propel your business further.
                    </p>
                </div>

                <div className="why-choose-rightn">
                    <img src="/images/or/side2.jpg" alt="What We Do" className="why-imagen" />
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default ExecutiveSearch;
