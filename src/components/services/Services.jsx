import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const[toggleState,setToggleState]=useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web<br></br> Developer</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Web Developer👨🏽‍💻</h3>
                        <p className="services__modal-description">Offering professional web development services to create sleek, efficient, and responsive websites. Harness cutting-edge technology to deliver user-centric solutions that drive engagement and success.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Professional web development for all business needs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Expertise in frontend and backend development.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Focus on sleek, modern, and responsive designs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Emphasis on mobile-responsive and SEO-friendly websites.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Tailored web solutions to meet specific business objectives.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Problem <br/>Solver</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Problem Solver💡</h3>
                        <p className="services__modal-description">Harnessing analytical skills and innovative thinking, I deliver effective solutions to complex problems. Committed to optimizing outcomes through strategic approaches and creative resolution strategies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Expert in identifying and dissecting complex problems.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Creative in developing innovative and effective solutions.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Proficient in applying logical and strategic thinking.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Skilled in optimizing processes and improving efficiency.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Committed to continuous learning and skill enhancement.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br /> Designer</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I Develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I position your company brand.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Services