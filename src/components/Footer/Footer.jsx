import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='section-padding'>
        <div className="container">
            <div className="row">
                <div className="left-col">
                    <div className="logo"><a href="#idex.html"> <span className="logo-circle"></span> Baires</a></div>
                    <div className="social-media">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <p className="left-text">&copy; 2023 created by Jeronimo Albusto All rights reserved</p>
                </div>
                <div className="right-col">
                    <h1>Our Newsletter</h1>
                    <div className="border"></div>
                    <p>Enter Your Email to get our news and updates.</p>
                    <form action="" className='newsletter-form'>
                        <input type="text" className='txtb' placeholder='enter your email' />
                        <input type="submit" className='btn-1' value="submit" />
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer