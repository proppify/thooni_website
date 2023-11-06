import React from 'react';
import '../../Styles/Business.css';
import { Col, Row } from 'react-bootstrap';
import ContactUsDone from '../../Assets/ContactUs.svg';
import PrimaryButton from '../../Components/PrimaryButton';
import { ValidationError, useForm } from '@formspree/react';

const ContactUs = () => {
    const [state, handleSubmit] = useForm('mnqkawqk');
    if (state.succeeded) {
      return <div className='contactcontainer' id='designersadvice'>
      <Row style={{ backgroundColor: '#EDF8FF' }}>
          <Col xs={12} md={6}>
              <div className="contactimage-container1">
                  <img src={ContactUsDone} alt="card" className="contact2Img" />
                  <div className="contactoverlay"></div>
              </div>
          </Col>
          <Col xs={12} md={6}>
          <div>Thank you for submitting the details, we weill get back to you ASAP!</div>
              
          </Col>
      </Row>
  </div>;
    }
    return (
        <div className='contactcontainer' id='designersadvice'>
            <Row style={{ backgroundColor: '#EDF8FF' }}>
                <Col xs={12} md={6}>
                    <div className="contactimage-container1">
                        <img src={ContactUsDone} alt="card" className="contact2Img" />
                        <div className="contactoverlay"></div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                <form onSubmit={handleSubmit}>
                
                <input id="name" type="text" name="name" placeholder='Name*' required />
                <input id="email" type="email" name="email" placeholder='Email*' required />
                <ValidationError field="email" prefix="Email" errors={state.errors} />
                <input id="number" type="text" name="number" placeholder='Contact*' required />
                <textarea id="message" rows="4" cols="50" name="message" placeholder='Message' required></textarea>
                <button type="submit" disabled={state.submitting}>Submit</button>
                </form>
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