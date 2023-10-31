import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Aboutus from '../Pages/AboutUs/Aboutus';
import Business from '../Pages/Business/Business';
import PrivacyPolicy from '../Pages/PrivacyPlociy/PrivacyPolicy';
import TermsService from '../Pages/Terms&Service/Terms&Service';
import Returns from '../Pages/Returns/Returns';
import ContactUs from '../Pages/Business/ContactUs';

const Routing = () => {
    return (
        <Routes > 
            <Route path="/designersadvice" element={<ContactUs />} />
            <Route path="/thooni_website/returns" element={<Returns />} />
            <Route path="/thooni_website/termsservice" element={<TermsService />} />
            <Route path="/thooni_website/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/business" element={<Business />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/thooni_website/" element={<Home />} />
            <Route path="/" element={<Home />} exact />
        </Routes>
    )
}

export default Routing;