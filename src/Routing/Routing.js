import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Aboutus from '../Pages/AboutUs/Aboutus';
import Business from '../Pages/Business/Business';

const Routing = () => {
    return (
        <Routes >
            <Route path="/business" element={<Business />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Routing;