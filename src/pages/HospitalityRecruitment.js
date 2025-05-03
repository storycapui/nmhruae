import React, { useEffect } from 'react';
import './HospitalityRecruitment.css';
import Navbar1 from '../pages/Navbar1';
import Footer from '../pages/Footer';

const HospitalityRecruitment = () => {

    useEffect(() => {
        const fillBars = document.querySelectorAll('.fill-barg');

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
        <div className="overseas-recruitment-pageg">
            <Navbar1 currentPage="hospitality-recruitment" />

            <section className="main-image-sectiong">
                <img src="/images/hs/main.jpg" alt="Hospitality Recruitment" className="main-imageg" />
                <h1 className="main-headingg">Hospitality Recruitment</h1>
            </section>

            <section className="info-sectiong">
                <div className="info-leftg">
                    <img src="/images/or/side1.jpg" alt="Side Visual" className="side-imageg" />
                </div>
                <div className="info-rightg">
                    <div className="info-contentg">
                        <hr className="small-lineg" />
                        <h2 className="info-headingg">Hospitality Recruitment</h2>
                        <p className="info-descriptiong">
                            NM HR Consultancy is a pool of talented and knowledgeable candidates with extensive hospitality expertise and food and beverage operations experience.
                            <br /><br />
                            <b>Chef : </b><br />
                            A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed.
                            <br /><br />
                            <b>Waiter / Waitress : </b><br />
                            Your guests deserve the best, therefore NM HR Consultancy provides Waiters/Waitress that are not only Hardworking but also pay high attention to detail and cleanliness. You can Hire experienced and reliable waiters and waitresses that serve and look after your guests, Today!
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

            <section className="why-choose-sectiong">
                <div className="why-choose-leftg">
                    <hr className="why-lineg" />
                    <h2 className="why-headingg">What We Do</h2>

                    <p className="why-descriptiong">
                        Our consultants specialise in hospitality recruitment across the Middle East, serving luxury hotels, restaurants, resorts, and service industries in the UAE (Dubai, Abu Dhabi), Saudi Arabia, and Oman.
                    </p>

                    <p className="why-descriptiong">
                        We understand the unique demands of the hospitality sector and offer tailor-made recruitment solutions. Our strong talent network, industry experience, and fast turnaround ensure you find the perfect match quickly.
                    </p>

                    <p className="why-descriptiong">
                        Our hospitality recruiters are based in Abu Dhabi and offer their expertise across the Middle East. Contact our team via email or call +971 58 187 9994 for customized hiring solutions.
                    </p>

                    <p className="why-descriptiong">
                        As specialists in the hospitality sector, we stay updated with the latest industry trends, ensuring you get dynamic, customer-centric staff who help elevate your service standards.
                    </p>
                </div>

                <div className="why-choose-rightg">
                    <img src="/images/or/side2.jpg" alt="What We Do" className="why-imageg" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HospitalityRecruitment;
