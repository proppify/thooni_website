import React from 'react';
import '../../Styles/Header.css';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle, BiLogoTwitter } from 'react-icons/bi';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='wholecontainer'>
      <div className='subcontainer'>
        <Row >
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={6} xl={3} lg={4}>
                <div className='iconwithtext'>
                  <HiOutlinePhone color='white' size={18} />
                  <span className='numberfont'>+91 73582 95552</span>
                </div>
              </Col>
              <Col xs={12} md={6} xl={3} lg={3}>
                <div className='iconwithtext'>
                  <HiOutlineMail color='white' size={18} />
                  <span className='numberfont'>team@thooni.com</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <div className='textandicons'>
              <span className='numberfont'>Follow Us : </span>
              <AiOutlineInstagram color='white' size={18} />
              <BiLogoFacebookCircle color='white' size={18} />
              <BiLogoTwitter color='white' size={18} />
            </div>
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default Header;