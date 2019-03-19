import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import makeup from './makeup.jpg';
import women from './women.jpg';
import './back.css'


const Back = () => {
            return (
                <Carousel >

                <Carousel.Item>
                    <div className='container'>
                    <img
                        className="d-block w-100"
                        src={ women}
                        alt="First slide"
                        className ='tall'
                    />

                <Carousel.Caption>
                    <div className='centered'>
                    <h3>NEW COLLECTION</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className='now'> 
                    <span className='label'>SHOP NOW </span>
                    </button>

                    </div>
                </Carousel.Caption>

                    </div>
                </Carousel.Item>
  
                <Carousel.Item>
                <div className='container'>
                    <img
                    className="d-block w-100"
                    src={ makeup } 
                    alt="Third slide"
                    className ='tall'
                    />

                <Carousel.Caption>
                    <div className='centered'>
                    <h3>NEW COLLECTION</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button className='now'> 
                    <span className='label'>SHOP NOW </span>
                    </button>
                    </div>
                </Carousel.Caption>
                    </div>
                </Carousel.Item>
                </Carousel>

               
            );
        }



export default Back;