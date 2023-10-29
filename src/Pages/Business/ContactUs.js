import React from 'react';
import '../../Styles/Business.css';
import { Col, Row } from 'react-bootstrap';
import ContactUsDone from '../../Assets/ContactUs.svg';
import PrimaryButton from '../../Components/PrimaryButton';

const ContactUs = () => {
    return (
        <div className='contactcontainer'>
            <Row style={{ backgroundColor: '#EDF8FF' }}>
                <Col xs={12} md={6}>
                    <div className="image-container1">
                        <img src={ContactUsDone} alt="card" className="contact2Img" />
                        <div className="contactoverlay"></div>
                    </div>
                </Col>
                <Col xs={6} md={6}>
                    <div className='contactForm'>
                        <div className='contactinputs' >
                            <input placeholder='Name*' type='text' />
                            <input placeholder='Email*' type='text' />
                            <input placeholder='Phone Number' type='text' />
                            <textarea name="message" rows="5" cols="2" placeholder='Your Message' className='fonttextarea'>
                            </textarea>
                        </div>
                        <PrimaryButton text={'Contact Us'} color={'#23A6F0'} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs;