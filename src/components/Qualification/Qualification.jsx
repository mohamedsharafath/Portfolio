import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
    const[toggleState,setToggleState]=useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <sedction className="qualification section" id="qualifications">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 0 ? "qualification__button qualification__active  button--flex":"qualification__button  button--flex"} onClick={()=>toggleTab(0)}>
                    
                    <i className="uil uil-graduation-cap qualification__icon" ></i>Education
                </div>
                <div className={toggleState === 1 ? "qualification__button qualification__active  button--flex":"qualification__button  button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-briefcase-alt qualification__icon" ></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState===0 ? "qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState===1 ? "qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - present
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </sedction>
  )
}

export default Qualification