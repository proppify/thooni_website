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
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                
                                <CardOwn
                                    subtext="Lorem"
                                    image={Featured2}
                                    maintext="3D VISUALISATION"
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col xs={12} md={6}>
                                
                                <CardOwn
                                    subtext="Lorem"
                                    image={Featured3}
                                    maintext="3D VISUALISATION"
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                
                                <CardOwn
                                    subtext="Lorem"
                                    image={Featured4}
                                    maintext="3D VISUALISATION"
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