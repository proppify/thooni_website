import React from 'react';
import '../../Styles/SubHeader.css';
import { Col, Row } from 'react-bootstrap';
import ThooniLogo from '../../Assets/ThooniLogo.svg';
import { Link } from 'react-router-dom';

const SubHeader = () => {
  return (
    <div className='subHeader'>
      <Row style={{ alignItems: 'center' }}>
        <Col xs={12} md={4}>
          <div className='logoContainer'>
            <Link to='/' className='navtext'>
              <img src={ThooniLogo} alt='logo' className='logo' />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className='navalignment2'>
            <span className='navtext'>
              <Link to='/' className='navtext'>Home</Link>
            </span>
            <span className='navtext'>
              <Link to='/aboutus' className='navtext'>About Us</Link>
            </span>
            <span className='navtext'>
              <Link to='/business' className='navtext'>For Business</Link>
            </span>
            <span className='navtext'>Designer's Advice</span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SubHeader;