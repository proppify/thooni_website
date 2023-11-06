import React from 'react';
import Hero2 from '../../Assets/Banner_3.png';
import '../../Styles/YourStyle.css';
import Carousel from 'react-bootstrap/Carousel';
import H1 from '../../Assets/Banner_1.png';
import H2 from '../../Assets/Banner_2.png';



const YourStyle = () => {
    return (
        <div className='subcontainer1 overflow-hidden'>
            <div className='herocontainer'>
                <Carousel>
                    <Carousel.Item>
                        <div className='heroimage-widget'>
                            <img src={H1} alt='heroimage' className='h1imageContainer' />
                        </div>

                        <Carousel.Caption className="text-left">
                            <div className='caption'>
                                <h5 className='blueheading'>Let your style shine</h5>
                                <h2 className='boldheading' style={{ margin: '0px 163px 20px 0px' }}>Your Design,<br/>Our Expert Craftsmanship</h2>
                                <p className='smallsubheading'>Turn Your Fashion Ideas into Stunning Reality with Our Expert Tailoring</p>
                                <a href="#download" className='btn btn-primary'>Personalise Your Style</a>
                                
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='heroimage-widget'>
                            <img src={H2} alt='heroimage' className='h2imageContainer' />
                        </div>
                        <Carousel.Caption className="text-left">
                            <div className='caption'>
                                <h5 className='blueheading'>Add uniqueness to your daily style</h5>
                                <h2 className='boldheading' style={{ marginBottom: '20px' }}>Budget-Friendly Custom Clothing</h2>
                                <span className='smallsubheading' style={{ marginBottom: '20px' }}>Fashion that's made just for you and doesn't cost much.</span>
                                <a href="#download" className='btn btn-primary'>Personalise Your Style</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='heroimage-widget'>
                              <img src={Hero2} alt='heroimage' className='h2imageContainer' />
                        </div>                       
                        <Carousel.Caption className="text-left">
                            <div className='caption'>
                                <h5 className='blueheading'>Convenience and Comfort Combined</h5>
                                <h2 className='boldheading' style={{ marginBottom: '20px' }}> Perfect Fit Home Delivered</h2>
                                <span className='smallsubheading' style={{ marginBottom: '20px' }}>Discover the joy of a perfect fit, conveniently delivered to your home, ensuring comfort and satisfaction.</span>
                                <a href="#download" className='btn btn-primary'>Personalise Your Style</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default YourStyle;


{/* <img src={Hero} alt='heroimage' className='heroimg' /> */ }