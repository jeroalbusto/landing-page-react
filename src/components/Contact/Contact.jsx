import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact-section section-padding" id="contact">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h1 className="title">contact us</h1>
                    <h2 className="subtitle">get in touch</h2>
                </div>
            </div>
            <div className="row">
                <div className="contact-info">
                    <h3>For Any Queries and Support</h3>
                    <div className="contact-info-item">
                        <i className="fas fa-location-arrow"></i>
                        <h4>Company Location</h4>
                        <p>Balcarce 78, C1064 CABA</p>
                    </div>

                    <div className="contact-info-item">
                        <i className="fas fa-envelope"></i>
                        <h4>Write to us at</h4>
                        <p>john@gmail.com</p>
                    </div>
                
                    <div className="contact-info-item">
                        <i className="fas fa-phone"></i>
                        <h4>Call us on</h4>
                        <p>+92 234 4567 78</p>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="">
                        <div className="row">
                            <div className="left">
                                <div className="form-group">
                                    <input type="text" placeholder='your name' className='form-control' />
                                </div>
                            </div>

                            <div className="right">
                                <div className="form-group">
                                    <input type="email" placeholder='your email' className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="full-width">
                                <div className="form-group">
                                    <input type="text" placeholder='your phone'  className='form-control'/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="full-width">
                                <div className="form-group">
                                    <input type="text" placeholder='subject'  className='form-control'/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="full-width">
                                <div className="form-group">
                                    <textarea name="" placeholder='your message' className='form-control' id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="full-width">
                                <button className='btn-1' type='submit'>send message</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
    </section>
  )
}

export default Contact