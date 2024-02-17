import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Mohamed Sharafath🕊️</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/shara_fath10/" className="footer__social-link" target="_blank">
                <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://www.facebook.com/mohamed.sharafath.18/" className="footer__social-link" target="_blank">
                    <i className='bx bxl-facebook'></i>

                </a>
                <a href="https://www.linkedin.com/in/mohamed-sharafath-a35377253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer__social-link" target="_blank">
                    <i className='bx bxl-linkedin'></i>
                </a>
            </div>
            <span className='footer__copy'>&#169; Crypticalcoder. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer