import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const[toggleState,setToggleState]=useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web Development <br/> Services</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Full-Stack Web Development</h3>
                        <p className="services__modal-description">I provide end-to-end web development services using cutting-edge technologies. Whether you're looking for a modern, responsive website or a scalable web application, I build solutions that are both functional and user-friendly.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Expert in building dynamic, responsive websites and web applications.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Proficiency in React, Spring Boot, and FastAPI for robust, scalable solutions.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Mobile-first designs that ensure seamless experience across devices.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">SEO-friendly websites with great focus on performance optimization.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Customized solutions tailored to your business needs and goals.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-brain services__icon"></i>
                    <h3 className="services__title">AI & Machine Learning <br/> Solutions</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Machine Learning & AI Consulting</h3>
                        <p className="services__modal-description">I help businesses unlock the power of data through machine learning. Whether you need predictive models, data analysis, or AI-driven insights, I offer solutions that improve decision-making and automate key processes.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Customized AI models to solve complex business problems.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Hands-on expertise with foundational ML/DL concepts and frameworks.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Leveraging LangChain for powerful LLM applications in real-world scenarios.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Data-driven insights and predictive models that enhance business operations.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Comprehensive support, from strategy to implementation.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-server services__icon"></i>
                    <h3 className="services__title">Backend Development <br/> Services</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Backend Development</h3>
                        <p className="services__modal-description">I provide robust backend development services to power your applications. With expertise in FastAPI, Spring Boot, and MySQL/MongoDB, I ensure that your app performs at scale, securely and efficiently.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Building RESTful APIs with FastAPI and Spring Boot for scalable, maintainable apps.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Optimizing database queries for performance and scalability with MySQL and MongoDB.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Ensure high availability and fault-tolerant backend systems.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">End-to-end backend solutions for complex business logic and process automation.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">Custom integrations with third-party services and APIs.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
