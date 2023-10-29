import React from 'react';
import '../../Styles/Business.css';
import OurSaas from './OurSaas';
import Features from './Features';
import Benefits from './Benefits';
// import Letstalk from './Letstalk';
import ContactUs from './ContactUs';

const Business = () => {
  return (
    <div>
      <OurSaas />
      <Features />
      <div className='mb-150'>
        <Benefits />
      </div>
      <div className='mb-150'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Business;