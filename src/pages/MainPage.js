import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MainPageFooter from '../pages/MainPageFooter';
import './MainPage.css';
import { FaUserCircle } from 'react-icons/fa';



const MainPage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0, 9000]);

  const tabData = [
    {
      description: "Drop us a mail. Our experts will get back to you to know your exact requirements.",
      points: ["Support on hiring employeers", "Get exceptional service for growth", "Outsourced consulting business"]
    },
    {
      description: "Our recruiters will source, interview and shortlist the candidates for your requirement.",
      points: ["Support on hiring employeers", "Get exceptional service for growth", "Outsourced consulting business"]
    },
    {
      description: "The Final decision is always yours. You can select the best fit from our recommendations.",
      points: ["Support on hiring employeers", "Get exceptional service for growth", "Outsourced consulting business"]
    }
  ];

  const counterImages = [
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
  ];


  const counterData = [
    { end: 264, label: "Companies we Helped" },
    { end: 468, label: "Permanent Recruitment" },
    { end: 322, label: "Overseas Recruitment" },
    { end: 10000, label: "Resumes Screened" },
  ];

  const textContent = [
    {
      lines: ['Your', 'Recruitment', 'Partner'],
      button: 'About Us',
    },
    {
      lines: ['Talent is the', 'Important key', 'to Growth'],
      button: 'About Us',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, i) => {
          const target = counterData[i].end;
          const increment = i === 3 ? 10 : 4;
          if (count < target) return Math.min(count + increment, target);
          return count;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page">
      <Navbar currentPage="home" />
      <div className="main-content">
        {/* first section */}
        <section className="section1-slideshow">
          <div className="slideshow-wrapper">
            <div className="slideshow-images">
              <img src="/images/slideshow4.jpg" alt="Slide 1" className="slide-image" />
              <img src="/images/slideshow5.jpg" alt="Slide 2" className="slide-image" />
              <img src="/images/slideshow6.jpg" alt="Slide 3" className="slide-image" />
            </div>
            <div className="slideshow-text">
              {textContent.map((text, index) => (
                <div
                  key={index}
                  className={`text-block ${index === currentTextIndex ? 'active' : 'hidden'}`} >
                  {text.lines.map((line, i) => (
                    <h1 key={i} className="gradient-text">{line}</h1>
                  ))}
                  <button className="gradient-button">{text.button}</button>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/*second section */}
        <section className="card-section">
          <div className="card-container">
            <div className="outer-card">
              <img src="/images/logo6.png" className="card-logo" />
              <h2 className="card-title">Recruitment<br />Solutions</h2>
              <div className="inner-card">
                <img src="/images/card1.jpg" className="inner-image" />
                <button className="read-more">Read More</button>
              </div>
            </div>
            <div className="outer-card">
              <img src="/images/logo7.png" className="card-logo" />
              <h2 className="card-title">Leadership<br />Training</h2>
              <div className="inner-card">
                <img src="/images/card2.jpg" className="inner-image" />
                <button className="read-more">Read More</button>
              </div>
            </div>
            <div className="outer-card">
              <img src="/images/logo8.png" className="card-logo" />
              <h2 className="card-title">Improving<br />Resoucces</h2>
              <div className="inner-card">
                <img src="/images/card3.jpg" className="inner-image" />
                <button className="read-more">Read More</button>
              </div>
            </div>
          </div>
        </section>





        {/* Third Section */}
        <section className="recruit-section">
          <div className="recruit-row">
            We’re not just recruiting employees, but are sowing the seeds of your reputation.
          </div>
        </section>


        <section className="nm-section">
          <div className="nm-left">
            <div className="overlay-image-wrapper">
              <img src="/images/overlay1.jpg" alt="Main" className="overlay-main" />
              <img src="/images/overlay2.jpg" alt="Overlay" className="overlay-corner" />
            </div>
          </div>

          <div className="nm-right">
            <h4 className="nm-small-heading">Welcome to NM HR Consultancy</h4>
            <h1 className="nm-main-heading">Best Quality Recruitment Staffing Agency</h1>
            <p className="nm-description">
              We hire individuals who are experts in their respective fields and invest in their professional development through training and mentoring.
            </p>

            <div className="nm-mission-vision">
              <div className="nm-box">
                <h2 className="nm-index">01</h2>
                <hr className="nm-line" />
                <h3 className="nm-title">MISSION</h3>
                <p className="nm-subtext">
                  Our mission is to be the most reliable and trustworthy global recruitment partner to both our clients and candidates.
                </p>
              </div>
              <div className="nm-box">
                <h2 className="nm-index">02</h2>
                <hr className="nm-line" />
                <h3 className="nm-title">VISION</h3>
                <p className="nm-subtext">
                  We desire to be the best in the industry by helping the employer and employee achieve success through our recruitment.
                </p>
              </div>
            </div>

            <hr className="nm-gradient-line" />

            <div className="nm-button-wrapper">
              <button className="nm-experience-button">
                <span className="nm-exp-years">20+</span><br />Years of<br />Experience
              </button>
            </div>
          </div>
        </section>


        {/* fourth Section */}
        <section className="services-section">
          <h4 className="small-heading">Our All Services List</h4>
          <h2 className="main-heading">NM HR Consultancy Services</h2>

          <div className="service-cards-container">
            <div className="service-card">
              <img src="/images/service_card1.jpg" alt="Overseas Recruitment" />
              <h3 className="card-title">Overseas Recruitment</h3>
              <p className="card-desc">
                We present only fully-vetted, highly-engaged, and more-invested candidates, saving our clients time and resources in the overseas recruitment process.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>

            <div className="service-card">
              <img src="/images/service_card2.jpg" alt="Executive Search" />
              <h3 className="card-title">Executive Search</h3>
              <p className="card-desc">
                Our global reach, combined with human and data-driven sourcing, provides firms with access to the best executives who can sky rocket the growth.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>

            <div className="service-card">
              <img src="/images/service_card3.jpg" alt="Temporary Staffing" />
              <h3 className="card-title">Temporary Staffing</h3>
              <p className="card-desc">
                With the credible years of experience and networks we are able to find the right innovators and business thinkers for your organisation.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>

          <div className="bottom-readmore-wrapper">
            <button className="main-read-more">Explore Full Services</button>
          </div>
        </section>




        {/* Fifth Section */}
        <section className="parallax-section" style={{ backgroundImage: `url("/images/parallax_effect_bg1.jpg")` }}>
          <div className="parallax-overlay">
            <div className="parallax-content">
              <div className="parallax-left">
                <h4 className="process-title">Our Process</h4>
                <h2 className="process-subtitle">We’re Reliable & Cost Efficiant Recruitment Agency</h2>
                <button className="about-btn">About Us</button>
              </div>

              <div className="parallax-right">
                <div className="tab-buttons">
                  {["Understand the Requirements", "Vetting the Candidates", "Place the job"].map((tab, index) => (
                    <button
                      key={index}
                      className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab}
                      <div className={`underline ${activeTab === index ? 'show' : ''}`}></div>
                    </button>
                  ))}
                </div>

                <div className="tab-content">
                  <img src={`/images/parallax_image${activeTab + 1}.jpg`} className="tab-img" />
                  <div className="tab-description">
                    <p className="tab-text">{tabData[activeTab].description}</p>
                    <ul className="tab-points">
                      {tabData[activeTab].points.map((point, i) => (
                        <li key={i}><span className="tick">✔</span> {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="overlay-card1">
              {counterData.map((item, i) => (
                <div key={i} className="overlay-part1">
                  <img src={counterImages[i]} className="overlay-logo1" />
                  <h2 className="counter">{counters[i]}+</h2>
                  <p className="counter-text1">{item.label}</p>
                  {i !== 3 && <div className="vertical-divider" />}
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="closed-projects-section">
          <div className="closed-projects-container">
            <h3 className="recent-projects-heading">Staffing Recent Closed Projects</h3>
            <h1 className="main-project-heading">We Choose NM</h1>
            <img
              src="/images/ss.png"
              alt="Closed Projects"
              className="projects-image"
            />
          </div>
        </section>















        {/* sixth Section */}
        <section className="new-recruitment-section">
          <div className="background-blur-wrapper">
            <img src="/images/big1.jpg" alt="Background" className="background-blur-image" />
            <div className="content-overlay">

              <div className="recruit-parts-wrapper">

                <div className="recruit-part left-part">
                  <h5 className="small-heading-left">Staffing Partners</h5>
                  <h1 className="big-heading-left">We’re Here to Solve Recruitment Using Technology</h1>
                </div>

                <div className="recruit-part middle-part">
                  <div className="outer-middle-card">
                    <div className="inner-middle-card">
                      <i className="fas fa-user-check feedback-icon"></i> {/* ICON here instead of image */}
                      <h2 className="happy-number">2887</h2>
                      <p className="happy-text">Happy Customers</p>
                    </div>
                  </div>
                </div>
                <div className="recruit-part right-part">
                  <p className="experience-text">
                    Highly experienced recruitment professionals
                    with a decade of experience in IT and Non-IT recruitment.
                  </p>

                  <div className="progress-container">
                    <h3 className="progress-title">Staffing</h3>
                    <div className="progress-bar">
                      <div className="progress-fill staffing-fill"></div>
                      <div className="progress-arrow staffing-arrow">▲</div>
                    </div>
                  </div>

                  <div className="progress-container">
                    <h3 className="progress-title">Recruitment</h3>
                    <div className="progress-bar">
                      <div className="progress-fill recruitment-fill"></div>
                      <div className="progress-arrow recruitment-arrow">▲</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* seventh Section */}
          <div className="reviews-container">
            <div className="review-card">
              <p className="review-text">NM Consultancy made hiring so easy for us. Exceptional service and commitment!</p>
              <h4 className="review-author">- Ganesh</h4>
              <img src="/images/review.jpg" alt="Reviewer" className="review-img" />
            </div>

            <div className="review-card">
              <p className="review-text">The recruiters are highly professional and deliver quick results. Highly recommend!</p>
              <h4 className="review-author">- Harsha</h4>
              <img src="/images/review1.jpeg" alt="Reviewer" className="review-img" />
            </div>

            <div className="review-card">
              <p className="review-text">We had a smooth hiring experience. NM Consultancy is reliable and trustworthy.</p>
              <h4 className="review-author">- Chandu</h4>
              <img src="/images/review2.jpg" alt="Reviewer" className="review-img" />
            </div>
          </div>
        </section>





        {/* Eigth Section */}
        <section className="company-logos-section">
          <div className="logos-container">
            <div className="logo-card">
              <img src="/images/mug_company.png" alt="Mug Company" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="/images/nbtc_company.png" alt="NBTC Company" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="/images/ferropan_company.jpg" alt="Ferropan Company" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="/images/growmaxx_company.png" alt="Growmaxx Company" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="/images/target_company.jpg" alt="Target Company" className="logo-img" />
            </div>
          </div>
        </section>












      </div>
      <MainPageFooter />
    </div>
  );
};

export default MainPage;
