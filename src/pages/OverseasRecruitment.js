import React, { useEffect } from 'react';
import './OverseasRecruitment.css';
import Navbar1 from '../pages/Navbar1';
import Footer from '../pages/Footer';





const OverseasRecruitment = () => {

    useEffect(() => {
        const fillBars = document.querySelectorAll('.fill-bare');

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
        <div className="overseas-recruitment-pagee">
            <Navbar1 currentPage="overseas-recruitment" />

            <section className="main-image-sectione">
                <img src="/images/or/main.jpg" alt="Overseas Recruitment" className="main-imagee" />
                <h1 className="main-headinge">Overseas Recruitment</h1>
            </section>

            <section className="info-sectione">
                <div className="info-lefte">
                    <img src="/images/or/side1.jpg" alt="Side Visual" className="side-imagee" />
                </div>
                <div className="info-righte">
                    <div className="info-contente">
                        <hr className="small-linee" />
                        <h2 className="info-headinge">Overseas Recruitment</h2>
                        <p className="info-descriptione">
                            NM HR Consultancy works on international reach to provide the client exceptional talents from countries in the Middle East, Europe, Africa, USA, Canada, Australia, Central Asia and Far East. Our associated network are distinctive professionals from overseas, that provides HR support including Applicant Screening Matrix for shortlisting, followed up by an intensive interview Matrix in which the candidate will be picked. Our company then proceeds with all around recruiting services ranging from formalizing candidate’s documents to background checks and finally candidate relocation. We have successfully filled jobs in a large variety of industries, with Malkoo you can trust the most suited candidate will be evaluated and shortlisted for the job.
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
                            Commited to <br /> Quality
                        </div>
                    </div>
                </div>
            </section>


            <section className="why-choose-sectione">
                <div className="why-choose-lefte">
                    <hr className="why-linee" />
                    <h2 className="why-headinge">Why Choose Us</h2>

                    <div className="why-iteme">
                        <h4 className="why-subheadinge">Licensed by official authorities.</h4>
                        <div className="progress-bare">
                            <div className="fill-bare" data-percentage="100"></div>
                        </div>
                    </div>

                    <div className="why-iteme">
                        <h4 className="why-subheadinge">Understand clients’ needs.</h4>
                        <div className="progress-bare">
                            <div className="fill-bare" data-percentage="100"></div>
                        </div>
                    </div>

                    <div className="why-iteme">
                        <h4 className="why-subheadinge">Genuine interest in all our stakeholders’ goals.</h4>
                        <div className="progress-bare">
                            <div className="fill-bare" data-percentage="100"></div>
                        </div>
                    </div>

                    <div className="why-iteme">
                        <h4 className="why-subheadinge">Quick turnaround time.</h4>
                        <div className="progress-bare">
                            <div className="fill-bare" data-percentage="100"></div>
                        </div>
                    </div>

                    <div className="why-iteme">
                        <h4 className="why-subheadinge">Engagement with a wide range of industries.</h4>
                        <div className="progress-bare">
                            <div className="fill-bare" data-percentage="100"></div>
                        </div>
                    </div>

                    <div className="why-iteme">
                        <h4 className="why-subheadinge">Cost effective and time saving.</h4>
                        <div className="progress-bare">
                            <div className="fill-bare" data-percentage="100"></div>
                        </div>
                    </div>
                </div>

                <div className="why-choose-righte">
                    <img src="/images/or/side2.jpg" alt="Why Choose Us" className="why-imagee" />
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default OverseasRecruitment;


