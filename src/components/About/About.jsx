import React, {useState} from 'react'
import cyanImage from '../../assets/cyan.png'
import purpleImage from '../../assets/purple.png'
import blueImage from '../../assets/blue.png'
import greenImage from '../../assets/green.png'
import pinkImage from '../../assets/pink.png'
import redImage from '../../assets/red.png'


import "./about.css"

const About = () => {

    const info = [
        { color:'cyan', src: cyanImage },
        { color:'purple', src: purpleImage },
        { color:'blue', src: blueImage },
        { color:'green', src: greenImage },
        { color:'pink', src: pinkImage },
        { color:'red', src: redImage }
    ];

    const [selectedColor, setSelectedColor] = useState(info[0].src); // Inicializa con el color cyan

    const handleColorChange = (colorIndex) => {
        setSelectedColor(info[colorIndex].src);
    }


  return (
    <section className="about-section section-padding" id='about'>
        <div className="container">
            <div className="row">
                <div className="about-img">
                    <div className="img-box">
                        <img src={selectedColor} id='main-shoe' alt=""/>
                    </div>
                </div>
                <div className="about-text">
                    <div className="section-title">
                        <h1 className="title">About Product</h1>
                        <h2 className="subtitle">Awesome digital watch can make life easier</h2>
                    </div>
                    <div className="about-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla blanditiis minima consequatur praesentium sequi est, qui officiis adipisci esse aliquam ex neque, labore cupiditate atque sit pariatur dolorem vel.</p>
                        <div className="color-container">
                            <h3 className="title">select color</h3>
                            <div className="colors">
                                {
                                    info.map((color, index) => (
                                        <span
                                            key={index}
                                            className={`color ${color} ${selectedColor === info[index].src ? 'active' : ''} ${color.color}`}
                                            onClick={() => handleColorChange(index)}
                                        ></span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="price">
                            <h3 className="title">item price</h3>
                            <span className="new-price">$45.00</span>
                            <span className="old-price">$56.85</span>
                        </div>
                        <a href="#" className='btn-1'>buy now</a>
                        <a href="#" className='configurate'>
                            <i className="fa fa-question-circle"></i>
                            How to Configurate your Smart Watch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About