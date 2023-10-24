import React from 'react';
import '../../Styles/AboutUs.css';

const HappyCustomers = () => {
    return (
        <div className='happycontainer'>
            <div className='happycontainersub'>
                <div className='happysub1'>
                    <span className='happyBoldText'>15K</span>
                    <span className='happySmallText'>Happy Customers</span>
                </div>
                <div className='happysub1'>
                    <span className='happyBoldText'>150K</span>
                    <span className='happySmallText'>Monthly Visitors</span>
                </div>
                <div className='happysub1'>
                    <span className='happyBoldText'>15</span>
                    <span className='happySmallText'>Countries  Worldwide</span>
                </div>
                <div className='happysub1'>
                    <span className='happyBoldText'>100+</span>
                    <span className='happySmallText'>Top Partners</span>
                </div>
            </div>
        </div>
    )
}

export default HappyCustomers;