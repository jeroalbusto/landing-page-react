import React from 'react'
import "./product.css"

import cyanImage from "../../assets/cyan.png";
import purpleImage from "../../assets/purple.png";
import blueImage from "../../assets/blue.png";
import greenImage from "../../assets/green.png";
import pinkImage from "../../assets/pink.png";
import redImage from "../../assets/red.png";

const Product = () => {
  return (
    <section className="product-items section-padding" id="product">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h1 className="title">our Product</h1>
                    <h2 className="subtitle">our latest products</h2>
                </div>
            </div>
            <div className="row">
                <div className="product-item">
                    <div className="product-item-inner">
                        <div className="card-img">
                            <img src={cyanImage} alt="" />
                        </div>
                        <div className="card-name">
                            <p>Smart Bailo Watch</p>
                        </div>
                        <div className="card-precis">
                            <a href="#" className='card-icon'><i className="fas fa-heart"></i></a>
                            <div>
                                <span className="card-preci card-preci-before">$990.00</span>
                                <span className="card-preci card-preci-now">$890.00</span>
                            </div>
                            <a href="#" className='card-icon'><i className="fas fa-cart-plus"></i></a>
                        </div>
                    </div>
                </div>

                <div className="product-item">
                    <div className="product-item-inner">
                        <div className="card-img">
                            <img src={purpleImage} alt="" />
                        </div>
                        <div className="card-name">
                            <p>Smart Bailo Watch</p>
                        </div>
                        <div className="card-precis">
                            <a href="#" className='card-icon'><i className="fas fa-heart"></i></a>
                            <div>
                                <span className="card-preci card-preci-before">$990.00</span>
                                <span className="card-preci card-preci-now">$890.00</span>
                            </div>
                            <a href="#" className='card-icon'><i className="fas fa-cart-plus"></i></a>
                        </div>
                    </div>
                </div>

                <div className="product-item">
                    <div className="product-item-inner">
                        <div className="card-img">
                            <img src={blueImage} alt="" />
                        </div>
                        <div className="card-name">
                            <p>Smart Bailo Watch</p>
                        </div>
                        <div className="card-precis">
                            <a href="#" className='card-icon'><i className="fas fa-heart"></i></a>
                            <div>
                                <span className="card-preci card-preci-before">$990.00</span>
                                <span className="card-preci card-preci-now">$890.00</span>
                            </div>
                            <a href="#" className='card-icon'><i className="fas fa-cart-plus"></i></a>
                        </div>
                    </div>
                </div>

                <div className="product-item">
                    <div className="product-item-inner">
                        <div className="card-img">
                            <img src={greenImage} alt="" />
                        </div>
                        <div className="card-name">
                            <p>Smart Bailo Watch</p>
                        </div>
                        <div className="card-precis">
                            <a href="#" className='card-icon'><i className="fas fa-heart"></i></a>
                            <div>
                                <span className="card-preci card-preci-before">$990.00</span>
                                <span className="card-preci card-preci-now">$890.00</span>
                            </div>
                            <a href="#" className='card-icon'><i className="fas fa-cart-plus"></i></a>
                        </div>
                    </div>
                </div>


                <div className="product-item">
                    <div className="product-item-inner">
                        <div className="card-img">
                            <img src={pinkImage} alt="" />
                        </div>
                        <div className="card-name">
                            <p>Smart Bailo Watch</p>
                        </div>
                        <div className="card-precis">
                            <a href="#" className='card-icon'><i className="fas fa-heart"></i></a>
                            <div>
                                <span className="card-preci card-preci-before">$990.00</span>
                                <span className="card-preci card-preci-now">$890.00</span>
                            </div>
                            <a href="#" className='card-icon'><i className="fas fa-cart-plus"></i></a>
                        </div>
                    </div>
                </div>

                <div className="product-item">
                    <div className="product-item-inner">
                        <div className="card-img">
                            <img src={redImage} alt="" />
                        </div>
                        <div className="card-name">
                            <p>Smart Bailo Watch</p>
                        </div>
                        <div className="card-precis">
                            <a href="#" className='card-icon'><i className="fas fa-heart"></i></a>
                            <div>
                                <span className="card-preci card-preci-before">$990.00</span>
                                <span className="card-preci card-preci-now">$890.00</span>
                            </div>
                            <a href="#" className='card-icon'><i className="fas fa-cart-plus"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Product