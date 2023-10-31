import React from 'react';
import PhoneHand from '../../Assets/CommingSoon.svg';

const ComingSoon = () => {
    return (
        <div className='comingContainer'>
            <div className='downloadrightContainer'>
                <img src={PhoneHand} alt='PhoneHand' className='phonestyle1' />
            </div>
            <div className='downloadleftContainer'>
                <div className='comingText'>
                    <h2 className='soonText'>COMING SOON ...</h2>
                    <h3 className='soonTexth3'>XPERIENCE <span style={{color:'#23A6F0'}}>VR</span></h3>
                    <h6 className='soonTexth6'>Try Before You Buy</h6>
                    <span className='soonTextspan' style={{width:'80%'}}>Our virtual try-on technology offers a unique and immersive way to experience a product's true appearance on you. Say goodbye to the uncertainty of online shopping, and say hello to confidence and satisfaction in your purchase decisions. It's like having a virtual fitting room at your fingertips, making shopping an enjoyable and personalized experience like never before.</span>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;