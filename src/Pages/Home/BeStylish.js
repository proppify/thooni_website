import React from 'react';
import Accesories from '../../Assets/Accessories.svg';
import Kids from '../../Assets/Kids.svg';
import Womens from '../../Assets/womens.svg';
import Men from '../../Assets/filter (1).png';

import Men1 from '../../Assets/man-striped-shirt-closing-his-buttonier.jpg';
import Womens1 from '../../Assets/young-woman-beautiful-yellow-dress.jpg';
import Kids1 from '../../Assets/pretty-toddler-sucking-lollipop.jpg';
import { Col, Row } from 'react-bootstrap';
import Accesories1 from '../../Assets/D0.png';

const BeStylish = () => {
    return (
        <>
            <div className='stylishContainer'>
                {/* <div style={{ display: 'flex' }}>
                    <div className='stylishleftContainer'>
                        <div className='stylishgrpText'>
                            <h3 className='stylishtxt1'>Wear Better and Be Stylish</h3>
                            <h6 className='stylishtxt2'>We have something for everyone</h6>
                            <span className='stylishtxt3'>At Thooni Custom Clothing, we're all about making your fashion
                                dreams come true. Our talented designers and crafty creators work
                                hard to make clothes that are just for you, showing off your one-of-a-kind
                                style. We promise to give you great quality, new ideas, and keep you happy – we're your go-to
                                friend for custom fashion.</span>
                        </div>
                    </div>
                    <div className='stylishrightContainer'>
                        <div class="styleimgcontainer">
                            <img src={Accesories} alt="Accesories" style={{ width: '100%' }} />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">ACCESSORIES</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stylishContainer1'>
                    <div className='stylishrightContainer1'>
                        <div class="styleimgcontainer">
                            <img src={Men1} alt="Accesories" />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">MEN</span>
                            </div>
                        </div>
                    </div>
                    <div className='stylishrightContainer2'>
                        <div class="styleimgcontainer">
                            <img src={Womens1} alt="Accesories" />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">WOMEN</span>
                            </div>
                        </div>
                    </div>
                    <div className='stylishrightContainer3'>
                        <div class="styleimgcontainer">
                            <img src={Kids1} alt="Accesories" style={{ width: '100%', height: '500px' }} />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">KIDS</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            
                <Row className='justify-content-between'>
                   <Col md={7} className='order-lg-first order-last'>
                   <div className='stylishleftContainer'>
                            <div className='stylishgrpText'>
                                <h3 className='stylishtxt1'>Wear Better and Be Stylish</h3>
                                <h6 className='stylishtxt2'>We have something for everyone</h6>
                                <span className='stylishtxt3'>At Thooni Custom Clothing, we're all about making your fashion
                                    dreams come true. Our talented designers and crafty creators work
                                    hard to make clothes that are just for you, showing off your one-of-a-kind
                                    style. We promise to give you great quality, new ideas, and keep you happy – we're your go-to
                                    friend for custom fashion.</span>
                            </div>
                        </div>
                    </Col> 
                    <Col md={5}  lg={4} className='order-lg-last order-first'>
                    <div className='stylishrightContainer'>
                            <div class="styleimgcontainer">
                                <img src={Accesories1} alt="Accesories" style={{ width: '100%',height:'281px' }} />
                                <div class="styleimgcontent">
                                    <span class="accesoriestxt">ACCESSORIES</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                 
                </Row>
                <Row>
                    <Col md={4}>
                             <div class="styleimgcontainer">
                                <img src={Men1} alt="Accesories" className='stylishMen'/>
                                <div class="styleimgcontent" style={{minWidth:'33%'}}>
                                    <span class="accesoriestxt">MEN</span>
                                </div>
                            </div>
                    </Col>
                    <Col md={4}>
                             <div class="styleimgcontainer">
                                 <img src={Womens1} alt="Accesories" className='stylishWoMen' />
                                <div class="styleimgcontent">
                                    <span class="accesoriestxt">WOMEN</span>
                                </div>
                            </div>
                    </Col>
                    <Col md={4}>
                             <div class="styleimgcontainer">
                             <img src={Kids1} alt="Accesories" />
                                <div class="styleimgcontent">
                                    <span class="accesoriestxt">KIDS</span>
                                </div>
                            </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default BeStylish;