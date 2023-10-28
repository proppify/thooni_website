import React from 'react';
import Hero from '../../Assets/Hero.png';
import '../../Styles/YourStyle.css';
import Carousel from 'react-bootstrap/Carousel';

const YourStyle = () => {
    return (
        <div className='subcontainer'>
            <div className='herocontainer'>
                {/* <img src={Hero} alt='heroimage' className='heroimg' /> */}
                <Carousel>
                    <Carousel.Item>
                        <img src={Hero} alt='heroimage' className='heroimg' />
                        <Carousel.Caption className="text-left">
                            <div style={{ position: 'absolute', width: '40%', display: 'flex', flexDirection: 'column' }}>
                                <span>Let your style shine</span>
                                <span>Your Design,Our Expert Craftsmanship</span>
                                <span>Turn Your Ideas into Stunning Reality with Our Expert Tailoring.</span>

                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Hero} alt='heroimage' className='heroimg' />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Hero} alt='heroimage' className='heroimg' />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default YourStyle;