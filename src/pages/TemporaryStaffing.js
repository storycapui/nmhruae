import React, { useEffect } from 'react';
import './TemporaryStaffing.css';
import Navbar1 from '../pages/Navbar1';
import Footer from '../pages/Footer';

const TemporaryStaffing = () => {

    useEffect(() => {
        const fillBars = document.querySelectorAll('.fill-baru');

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
        <div className="overseas-recruitment-pageu">
            <Navbar1 currentPage="temporary-staffing" />

            <section className="main-image-sectionu">
                <img src="/images/ts/main.jpg" alt="Temporary Staffing" className="main-imageu" />
                <h1 className="main-headingu">Temporary Staffing</h1>
            </section>
            <section className="info-sectionu">
                <div className="info-leftu">
                    <img src="/images/or/side1.jpg" alt="Side Visual" className="side-imageu" />
                </div>
                <div className="info-rightu">
                    <div className="info-contentu">
                        <hr className="small-lineu" />
                        <h2 className="info-headingu">Temporary Staffing</h2>
                        <p className="info-descriptionu">
                            NM HR Consultancy offers flexible temporary staffing solutions, helping businesses quickly scale their workforce to meet project demands or seasonal needs. Our team thoroughly screens candidates to ensure they are ready to seamlessly integrate and contribute to your operations from day one. We manage onboarding, documentation, and compliance so you can focus on your business while we handle the staffing.
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

            <section className="why-choose-sectionu">
                <div className="why-choose-leftu">
                    <hr className="why-lineu" />
                    <h2 className="why-headingu">What We Do</h2>

                    <p className="why-descriptionu">
                        Our consultants specialise in temporary staffing for companies across the Middle East including the UAE (Dubai and Abu Dhabi), Saudi Arabia, and Oman. We ensure businesses receive qualified and adaptable staff to meet project timelines and operational goals.
                    </p>

                    <p className="why-descriptionu">
                        Our staffing solutions are tailored to meet the urgent and specific demands of your firm. We leverage an extensive database, industry networks, and quick turnaround times to ensure you have the right people exactly when you need them.
                    </p>

                    <p className="why-descriptionu">
                        Our temporary staffing consultants are based in Abu Dhabi, serving companies across the Middle East region. Reach out to us via email or call +971 58 187 9994 to find the right staffing solutions for your business.
                    </p>

                    <p className="why-descriptionu">
                        With our deep industry insights, we help businesses maintain flexibility, control costs, and achieve growth targets through effective staffing strategies.
                    </p>
                </div>

                <div className="why-choose-rightu">
                    <img src="/images/or/side2.jpg" alt="What We Do" className="why-imageu" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TemporaryStaffing;
