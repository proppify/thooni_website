import React from 'react';
import PhoneHand from '../../Assets/CommingSoon.svg';

const ComingSoon = () => {
    return (
        <div className='comingContainer'>
            <div className='downloadrightContainer'>
                <img src={PhoneHand} alt='PhoneHand' className='phonestyle' />
            </div>
            <div className='downloadleftContainer'>
                <div className='comingText'>
                    <h2 className='soonText'>COMING SOON ...</h2>
                    <h3 className='soonTexth3'>XPERIENCE <span style={{color:'#23A6F0'}}>VR</span></h3>
                    <h6 className='soonTexth6'>We have something for everyone</h6>
                    <span className='soonTextspan' style={{width:'400px'}}>At Thooni Custom Clothing, we're all about 
                    making your fashion dreams come true. Our talented designers and crafty creators work hard to make clothes 
                    that are just for you</span>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;