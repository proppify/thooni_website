import React from 'react';
import '../../Styles/Footer.css'
import { Col, Row } from 'react-bootstrap';
import GetItOn from '../../Assets/GetItOn.svg';
import Twitter from '../../Assets/Twitter.svg';
import Instagram from '../../Assets/Instagram.svg';
import Facebook from '../../Assets/Facebook.svg';
import { Link } from 'react-router-dom';
import GetItOn1 from '../../Assets/Foot1.png';
import GetItOn2 from '../../Assets/Foot2.png';
import GetItOn3 from '../../Assets/Foot3.svg';



const Footer = () => {
    const scrollToContact = () => {
        const contactSection = document?.getElementById('designersadvice');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToFaq = () => {
        const contactSection = document?.getElementById('faq');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='footercontainer'>
            <div className='footerline' />
            <Row >
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Thooni</span>
                        <span className='thoonibody'>Thooni, exclusively owned by Snyder Looms Pvt. Ltd., is headquartered in Chennai. 1A, Plot - 105, Door No.31, Firms Nandhana, Vaikasi Street, Chinamaya Nagar,Chennai, India</span>
                    </div>
                </Col>
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Explore</span>
                        <div className='exploremenus'>
                            <span className='exploremenutexts'>
                                <a href='/aboutus' className='exploremenutextsNolink'>About Us</a>
                            </span>
                            <span className='exploremenutexts'>
                                <a href='/business' className='exploremenutextsNolink'>For Business</a>
                            </span>
                            <span className='exploremenutexts' style={{ cursor: 'pointer' }}>
                                <Link to={'/returns'} className='exploremenutextsNolink'>
                                    Alterations & Returns
                                </Link>
                            </span>
                            <span className='exploremenutexts' onClick={scrollToFaq}  style={{ cursor: 'pointer' }}>FAQ</span>
                            <span className='exploremenutextsNolink' onClick={scrollToContact} style={{ cursor: 'pointer' }}>Contact Us</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Experience thooni app on</span>
                        <div className='exploremenus'>
                            <Link to={'https://play.google.com/store/apps/details?id=com.thooni.thooni'}>
                                <img alt='GetItOn' src={GetItOn2} style={{ width: '100px' }} />
                            </Link>
                            <Link to={' https://apps.apple.com/in/app/thooni/id6452012641'}>
                                <img alt='GetItOn' src={GetItOn1} style={{ width: '100px' }} />
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Social Links</span>
                        <div className='sociallinks'>
                            <img src={Twitter} alt='Twitter' className='socialmedia' />
                            <img src={Instagram} alt='Instagram' className='socialmedia' />
                            <img src={Facebook} alt='Facebook' className='socialmedia' />
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='footerline2' />
            <div className='headcont'>
                <h2 className='headtxt'>thooni</h2>
            </div>
            <div style={{ display: 'inline-block' }}>
                <div className='reserved'>
                    <span className='reservedtext'>© 2023 Thooni.com. All Rights Reserved.</span>
                    <span className='reservedtext pointer'>
                        <span>
                            <Link to='/privacypolicy' target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Privacy</Link></span> | <span>
                            <Link to='/termsservice' target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Terms of Service</Link></span> | <span>
                            <Link to='/returns' target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Alterations and Returns</Link></span></span>
                    <hr className='line' />
                </div>
            </div>
        </div>
    )
}

export default Footer;