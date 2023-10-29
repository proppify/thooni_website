import React from 'react'
import YourStyle from './YourStyle';
import HowItWorks from './HowItWorks';
import Download from './Download';
import BeStylish from './BeStylish';
import ComingSoon from './ComingSoon';
import CustomerSays from './CustomerSays';
import Faq from './Faq';
import ContactUs from '../Business/ContactUs';

const Home = () => {
  return (
    <div>
      <div className='mb-150'>
        <YourStyle />
      </div>
      <div className='mb-150'>
        <HowItWorks />
      </div>
      <div className='mb-150'>
        <Download />
      </div>
      <div className='mb-150'>
        <BeStylish />
      </div>
      <div className='mb-150'>
        <ComingSoon />
      </div>
      <div className='mb-150'>
        <CustomerSays />
      </div>
      <div className='mb-150'>
        <Faq />
      </div>
      <div className='mb-150'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Home;