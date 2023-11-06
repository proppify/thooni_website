import React, { useState } from 'react';
import '../../Styles/SubHeader.css';
import { Col, Row,Navbar, Container, Nav } from 'react-bootstrap';
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

<Navbar expand="lg">    
        <Container>
        <Navbar.Brand href="#home">
        <div className='logoContainer'>
            <Link to='/' className='navtext'>
              <img src={ThooniLogo} alt='logo' className='logo' /> <span className='ms-2 brand-name'>Thooni</span> 
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navalignment2'>
          <Nav>
            <Link to="/" onClick={() => handleItemClick('Home')} className='navtext'>Home</Link>          
            <Link to='/aboutus' className='navtext'  onClick={() => handleItemClick('AboutUs')}>About Us</Link>
            <Link to='/business' className='navtext'  onClick={() => handleItemClick('Business')}>For Business</Link>
            <Link to='/designersadvice' className='navtext' onClick={() => handleItemClick('Home')}>Fashion Advice</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
         </Navbar> 
      
      
    </div>
  )
}

export default SubHeader;