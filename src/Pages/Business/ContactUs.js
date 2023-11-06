import React from 'react';
import '../../Styles/Business.css';
import { Col, Row } from 'react-bootstrap';
import ContactUsDone from '../../Assets/ContactUs.svg';
import PrimaryButton from '../../Components/PrimaryButton';
import { ValidationError, useForm } from '@formspree/react';
import Alert from 'react-bootstrap/Alert';

const ContactUs = () => {
    const [state, handleSubmit] = useForm('mnqkawqk');
    if (state.succeeded) {
      return <div className='contactcontainer' id='designersadvice'>
      <Row style={{ backgroundColor: '#EDF8FF' }} className='align-items-center'>
          <Col xs={12} md={6}>
              <div className="contactimage-container1">
                  <img src={ContactUsDone} alt="card" className="contact2Img" />
                  <div className="contactoverlay"></div>
              </div>
          </Col>
          <Col xs={12} md={6}>
          <Alert variant="success">Thank you for submitting the details, we weill get back to you ASAP!</Alert>
              
          </Col>
      </Row>
  </div>;
    }
    return (
        <div className='contactcontainer' id='designersadvice'>
            <Row style={{ backgroundColor: '#EDF8FF' }} >
                <Col xs={12} md={6}>
                    <div className="contactimage-container1">
                        <img src={ContactUsDone} alt="card" className="contact2Img" />
                        <div className="contactoverlay"></div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                <form onSubmit={handleSubmit} className='contactForm'>
                
                     <div className='contactinputs' >
                        <input id="name" type="text" name="name" placeholder='Name*' required />
                        <input id="email" type="email" name="email" placeholder='Email*' required />
                        <ValidationError field="email" prefix="Email" errors={state.errors} />
                        <input id="number" type="text" name="number" placeholder='Contact*' required />
                        <textarea className='fonttextarea' id="message" rows="4" cols="50" name="message" placeholder='Message' required></textarea>                        
                    </div>
                    <PrimaryButton className='btn btn-primary' type="submit" disabled={state.submitting} text={'Submit'} color={'#23A6F0'} />
               
                </form>
                   
                    
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs;