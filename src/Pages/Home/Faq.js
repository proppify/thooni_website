import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap';
import NewAccordion from '../../Components/NewAccordtion';

const Faq = () => {
    const items = [
        { title: 'Accordion Item 1', content: 'Content for Accordion Item 1' },
        { title: 'Accordion Item 2', content: 'Content for Accordion Item 2' },
        // Add more items as needed
      ];
    return (
        <div className='faq0'>
            <Row >
                <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <span className='faq1'>FAQ’s</span>
                    </div>
                </Col>
                <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <h5 className='faq2'>We have something for everyone</h5>
                    </div>
                </Col>
                <Col sm={8}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', width: '75%' }}>
                        <span className='faq3'>At Thooni Custom Clothing, we're all about making your fashion dreams come true. Our talented designers and crafty </span>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'30px'}}>
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
            </Row>
            <Row >
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
            </Row>
            <Row >
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
            </Row>
            <Row >
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
                <Col sm={6}>
                    <NewAccordion title={'We connect our customers with the best?'} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat."/>
                </Col>
            </Row>
        </div>
    )
}

export default Faq;