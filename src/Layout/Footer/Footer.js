import React from 'react';
import '../../Styles/Footer.css'
import { Col, Row } from 'react-bootstrap';
import GetItOn from '../../Assets/GetItOn.svg';
import Twitter from '../../Assets/Twitter.svg';
import Instagram from '../../Assets/Instagram.svg';
import Facebook from '../../Assets/Facebook.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
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
                            <span className='exploremenutexts'>About Us</span>
                            <span className='exploremenutexts'>For Business</span>
                            <span className='exploremenutexts'>Alterations & Returns</span>
                            <span className='exploremenutexts'>FAQ</span>
                            <span className='exploremenutexts'>Contact Us</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Experience thooni app on</span>
                        <div className='exploremenus'>
                            <img alt='GetItOn' src={GetItOn} />
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
                        <Link to='https://thooni.com/privacypolicy' target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Privacy</Link></span> | <span>
                        <Link to='https://thooni.com/termsofservice' target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Terms of Service</Link></span> | <span>
                        <Link to='https://thooni.com/returns' target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Alterations and Returns</Link></span></span>
                    <hr className='line' />
                </div>
            </div>
        </div>
    )
}

export default Footer;