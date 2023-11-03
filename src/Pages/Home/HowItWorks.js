import React from 'react';
import '../../Styles/YourStyle.css';
import { Col, Row } from 'react-bootstrap';
import HowItWork from '../../Assets/HowItWorks.svg';


const HowItWorks = () => {
    return (
        <div className='subcontainer'>
            <Row className='align-items-center'>
            <Col md={6} xl={5}>
                    <img alt='' src={HowItWork} className='HowItWorkImg' />
                </Col>
                {/* <Col sm={8}>
                    <div className='howworkcontainer'>
                        <Row>
                            <Col sm={12}>
                                <h3 className='headinghow1'>HOW IT WORKS</h3>
                            </Col>
                            <Col sm={12}>
                                <h6 className='headinghow2'>Our Process for Making This a Reality</h6>
                            </Col>
                            <Row className='subhowworkcontainer'>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>1.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext'>Choose the item you wish to personalize</span>
                                            <span className='smallblacktext'>Pick your desired product for custom design and personalisation.</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>2.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext'>Pick the material</span>
                                            <span className='smallblacktext' style={{ width: '175px' }}>Select the fabric that you would like to use for your project. Choose from our extensive range of various textures and patterns.</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>3.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext' style={{ width: '120px' }}>Provide Sizing Details</span>
                                            <span className='smallblacktext' style={{ width: '175px' }}>Please supply accurate measurements for a perfect-fitting custom garment. </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='subhowworkcontainer1'>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>4.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext' style={{width:'154px'}}>Virtual Try-On: See the Real Look Before You Choose!</span>
                                            <span className='smallblacktext'>Experience its true appearance on you with virtual try-on technology.</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>5.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext'>Get Your Dream Delivered Home</span>
                                            <span className='smallblacktext' style={{ width: '175px' }}>Experience the joy of having your dream delivered right to your home.</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                </Col> */}
                <Col md={6} xl={7}>
                    <Row className='how-it-work-info'>
                        <Col sm={12}>
                            <h3 className='headinghow1' style={{marginBottom:'10px'}}>HOW IT WORKS</h3>
                        </Col>
                        <Col sm={12}>
                            <h6 className='headinghow2'>Our Process for Making This a Reality</h6>
                        </Col>
                        <Row className='subhowworkcontainer'>
                        <Col sm={6} lg={6} xl={4}>
                                <div className='numbandtext'>
                                    <h2 className='blueandtext'>1.</h2>
                                    <div className='textandtext'>
                                        <span className='boldblacktext'>Choose the item you wish to personalize</span>
                                        <span className='smallblacktext'>Pick your desired product for custom design and personalisation.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={6} xl={4}>
                                <div className='numbandtext'>
                                    <h2 className='blueandtext'>2.</h2>
                                    <div className='textandtext'>
                                        <span className='boldblacktext'>Pick the material</span>
                                        <span className='smallblacktext' style={{ width: '175px' }}>Select the fabric that you would like to use for your project. Choose from our extensive range of various textures and patterns.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={6} xl={4}>
                                <div className='numbandtext'>
                                    <h2 className='blueandtext'>3.</h2>
                                    <div className='textandtext'>
                                        <span className='boldblacktext' style={{ width: '120px' }}>Provide Sizing Details</span>
                                        <span className='smallblacktext' style={{ width: '175px' }}>Please supply accurate measurements for a perfect-fitting custom garment. </span>
                                    </div>
                                </div>
                            </Col>
                           <Col sm={6} lg={6} xl={4}>
                                <div className='numbandtext'>
                                    <h2 className='blueandtext'>4.</h2>
                                    <div className='textandtext'>
                                        <span className='boldblacktext' style={{ width: '154px' }}>Virtual Try-On: See the Real Look Before You Choose!</span>
                                        <span className='smallblacktext'>Experience its true appearance on you with virtual try-on technology.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} xl={4}>
                                <div className='numbandtext'>
                                    <h2 className='blueandtext'>5.</h2>
                                    <div className='textandtext'>
                                        <span className='boldblacktext'>Get Your Dream Delivered Home</span>
                                        <span className='smallblacktext' style={{ width: '175px' }}>Experience the joy of having your dream delivered right to your home.</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </Row>
                        
                </Col>
            </Row>
        </div>
    )
}

export default HowItWorks;