import React from 'react'
import '../../Styles/Business.css';
import { Card, Col, Row } from 'react-bootstrap';
import Featured1 from '../../Assets/Featured1.svg';
import Featured2 from '../../Assets/Featured2.svg';
import Featured3 from '../../Assets/Featured3.svg';
import Featured4 from '../../Assets/Featured4.svg';


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
                                <Card className="bg-dark text-white">
                                    <Card.Img src={Featured1} alt="Card image" />
                                </Card>
                            </Col>
                            <Col xs={12} md={6}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src={Featured2} alt="Card image" />
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'10px'}}>
                            <Col xs={12} md={6}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src={Featured3} alt="Card image" />
                                </Card>
                            </Col>
                            <Col xs={12} md={6}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src={Featured4} alt="Card image" />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;