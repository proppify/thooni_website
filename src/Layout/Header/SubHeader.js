import React, { useState } from 'react';
import '../../Styles/SubHeader.css';
import { Col, Row } from 'react-bootstrap';
import ThooniLogo from '../../Assets/ThooniLogo.svg';
import { Link } from 'react-router-dom';

const SubHeader = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const scrollToContact = () => {
    const contactSection = document?.getElementById('designersadvice');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  const navigateToContact = () => {
    window.location.href = '/designersadvice';
  };


  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
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
            <span>
              <Link to='/'
                //
                // className={activeItem === 'Home' ? 'navItemActive' : 'navtext'}
                className='navtext'
                onClick={() => handleItemClick('Home')}
              >Home</Link>
            </span>
            <span>
              <Link to='/aboutus'
                className='navtext'
                // className={activeItem === 'AboutUs' ? 'navItemActive' : 'navtext'}
                onClick={() => handleItemClick('AboutUs')}>About Us</Link>
            </span>
            <span>
              <Link to='/business'
                className='navtext'
                // className={activeItem === 'Business' ? 'navItemActive' : 'navtext'}
                onClick={() => handleItemClick('Business')}
              >For Business</Link>
            </span>
            <span>
              <Link onClick={() => { navigateToContact(); handleItemClick('Designer') }}
                // className={activeItem === 'Designer' ? 'navItemActive' : 'navtext'}
                className='navtext'
              >Designer's Advice</Link>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SubHeader;