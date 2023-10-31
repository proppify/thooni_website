import React from 'react';
import Hero from '../../Assets/Hero.png';
import Hero1 from '../../Assets/Hero 5.png';
import Hero2 from '../../Assets/Hero 6.png';
import '../../Styles/YourStyle.css';
import Carousel from 'react-bootstrap/Carousel';
import PrimaryButton from '../../Components/PrimaryButton';
import H1 from '../../Assets/H1.png';
import H2 from '../../Assets/H2.png';


const YourStyle = () => {
    return (
        <div className='subcontainer1'>
            <div className='herocontainer'>
                <Carousel>
                    <Carousel.Item>
                        <div style={{ backgroundColor: '#9BEAF2', height: '620px',borderRadius:'4px' }}>
                            <img src={H1} alt='heroimage' className='h1imageContainer' />
                        </div>

                        <Carousel.Caption className="text-left">
                            <div style={{ position: 'absolute', width: '55%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h5 className='blueheading'>Let your style shine</h5>
                                <h2 className='boldheading' style={{ margin: '0px 163px 20px 0px' }}>Your Design,<br/>Our Expert Craftsmanship</h2>
                                <p className='smallsubheading'>Turn Your Ideas into Stunning Reality with Our Expert Tailoring.</p>
                                <PrimaryButton color={'#23A6F0'} text={'Personalise Your Style'} width={'none'} minWidth={'235px'}/>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundColor: '#9BEAF2', height: '620px', borderRadius: '4px' }}>
                            <img src={H2} alt='heroimage' className='h2imageContainer' />
                        </div>
                        <Carousel.Caption className="text-left">
                            <div style={{ position: 'absolute', width: '54%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h5 className='blueheading'>Add uniqueness to your daily style</h5>
                                <h2 className='boldheading' style={{ marginBottom: '20px' }}>Budget-Friendly Custom Clothing</h2>
                                <span className='smallsubheading'>Fashion that's made just for you and doesn't cost much.</span>
                                <PrimaryButton color={'#23A6F0'} text={'Personalise Your Style'} width={'none'} />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Hero2} alt='heroimage' className='heroimg' />
                        <Carousel.Caption className="text-left">
                            <div style={{ position: 'absolute', width: '54%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h5 className='blueheading'>Every individual is a star</h5>
                                <h2 className='boldheading' style={{ marginBottom: '20px' }}>Unlock Your Star Style</h2>
                                <span className='smallsubheading' style={{ marginBottom: '20px' }}>Discover your inner celebrity style. We'll assist in creating and delivering it to your doorstep.</span>
                                <PrimaryButton color={'#23A6F0'} text={'Personalise Your Style'} width={'none'} />
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