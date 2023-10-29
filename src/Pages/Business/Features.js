import React from 'react'
import '../../Styles/Business.css';
import { Col, Row } from 'react-bootstrap';
import Featured1 from '../../Assets/Featured1.svg';
import Featured2 from '../../Assets/Featured2.svg';
import Featured3 from '../../Assets/Featured3.svg';
import Featured4 from '../../Assets/Featured4.svg';
import CardOwn from '../../Components/Card';

const Features = () => {
    return (
        <div className='featureContainer'>
            <div className='featureSubContainer'>
                <div className='featureSubContainer2'>
                    <span className='featureSpanBold'>FEATURES</span>
                    <span className='featureSpanSmall'>We have something for everyone</span>
                    <div style={{ width: '100%' }}>
                        <Row>
                            <Col xs={12} md={6}>

                                <CardOwn
                                    subtext="Lorem"
                                    image={Featured1}
                                    maintext="3D VISUALISATION"
                                    para='Engage your customers like never before with our cutting-edge 3D visualization feature. 
                                    Showcase your creations in stunning detail, allowing customers to interact with designs and make informed choices.'
                                />
                            </Col>
                            <Col xs={12} md={6}>

                                <CardOwn
                                    subtext="Lorem"
                                    image={Featured2}
                                    maintext="Order Management"
                                    para='Streamline your order management process from start to finish. Create, track, and fulfill orders effortlessly with features like order tracking and inventory management.'
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col xs={12} md={6}>

                                <CardOwn
                                    subtext="Lorem"
                                    image={Featured3}
                                    maintext="Website and Mobile app"
                                    para='Your fashion business deserves a dedicated online presence. 
                                    Our SAAS solution provides you with a professional website and mobile app, complete with online catalogs and lookbooks.'
                                />
                            </Col>
                            <Col xs={12} md={6}>

                                <CardOwn
                                    subtext="Lorem"
                                    image={Featured4}
                                    maintext="Payment Flow"
                                    para='Secure and seamless payment processing is at your fingertips. 
                                    Accept payments with ease through multiple payment gateways, ensuring a frictionless checkout experience for your customers.'
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;