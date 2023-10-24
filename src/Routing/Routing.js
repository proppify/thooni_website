import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Aboutus from '../Pages/AboutUs/Aboutus';

const Routing = () => {
    return (
        <Routes >
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Routing;