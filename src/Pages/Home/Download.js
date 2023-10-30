import React from 'react';
import PhoneHand from '../../Assets/PhoneHand.svg'

const Download = () => {
    return (
        <div className='downloadContainer'>
            <div className='downloadleftContainer'>
                <div className='downloadText'>
                    <h5 className='downloadbluetxt'>Now Thooni App on Google Playstore and Appstore</h5>
                    <h2 className='downloadblacktxt'>Download the Thooni App<br/>
                        for better experience <br/>
                        and win exciting rewards</h2>
                </div>
            </div>
            <div className='downloadrightContainer'>
                <img src={PhoneHand} alt='PhoneHand' className='phonestyle' />
            </div>
        </div>
    )
}

export default Download;